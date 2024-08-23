import { AccordionProps } from "./common/common.type";
import styles from "./Accordion.module.css";
import { useState } from "react";
import { AccordionContext } from "./common/AccordionContext";

function Accordion(props: AccordionProps) {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number>(0);

  function keydownHandler(event: React.KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
        setFocusIndex(focusIndex - 1 < 0 ? 0 : focusIndex - 1);
        break;
      case "ArrowDown":
        setFocusIndex(
          focusIndex + 1 > children.length - 1
            ? children.length - 1
            : focusIndex + 1
        );
        break;
      case "Home":
        setFocusIndex(0);
        break;
      case "End":
        setFocusIndex(children.length - 1);
        break;
      case "Enter":
      case " ":
        break;
      default:
        break;
    }
  }

  return (
    <AccordionContext.Provider
      value={{ activeIndex, setActiveIndex, focusIndex, setFocusIndex }}
    >
      <section className={styles.container} onKeyDown={keydownHandler}>
        {children}
      </section>
    </AccordionContext.Provider>
  );
}

export default Accordion;
