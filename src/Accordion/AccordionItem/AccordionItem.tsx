import { AccordionItemProps } from "../common/common.type";
import Arrow from "../common/Arrow";
import useAccordionContext from "../common/useAccordionContext";
import styles from "./AccordionItem.module.css";
import { useRef } from "react";

function AccordionItem(props: AccordionItemProps) {
  const { title, content, index } = props;
  const btnRef = useRef<HTMLButtonElement>(null);
  const { activeIndex, setActiveIndex, focusIndex, setFocusIndex } =
    useAccordionContext();

  if (focusIndex === index) btnRef.current?.focus();

  function toggleAccordion() {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
    setFocusIndex(index);
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.title}
        onClick={toggleAccordion}
        ref={btnRef}
        aria-expanded={activeIndex === index}
        aria-controls={`panel-${String(index)}`}
        id={`btn-${String(index)}`}
      >
        {title} <Arrow isOpen={activeIndex === index} />
      </button>
      <div
        className={styles.content}
        hidden={activeIndex !== index}
        aria-labelledby={`btn-${String(index)}`}
        id={`panel-${String(index)}`}
      >
        {content}
      </div>
    </div>
  );
}

export default AccordionItem;
