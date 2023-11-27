import { useState } from "react";
import styles from "./Accordion.module.css";

export type AccordianData = {
    id: string
    title: string
    content: string
}

type AccordianProps = {
    data: AccordianData
}

function Accordion(props: AccordianProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    function toggleAccordion() {
        setIsExpanded(!isExpanded);
    }

    return (
        <main className={styles.main}>
            <button onClick={toggleAccordion} className={styles.header}>
                <p>{props.data.title}</p>
                <span>{isExpanded ? '🔼' : '🔽'}</span>
            </button>
            {
                isExpanded && (
                    <section className={styles.section}>
                        {props.data.content}
                    </section>
                )
            }
        </main>
    );
}

export default Accordion;