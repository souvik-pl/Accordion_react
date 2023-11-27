import styles from "./App.module.css";
import Accordion, { AccordianData } from "./Accordion/Accordion";
import { ACCORDION_DATA } from "./_shared/accordion_data";

function App() {
  const ALL_DATA: AccordianData[] = ACCORDION_DATA;

  return (
    <div className={styles.container}>
      {
        ALL_DATA.map(data => <Accordion key={data.id} data={data} />)
      }
    </div>
  )
}

export default App;