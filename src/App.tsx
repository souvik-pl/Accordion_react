import { Accordion, AccordionItem } from "./Accordion";

export type AccordionItemType = {
  id: string;
  title: string;
  content: string;
};

const ACCORDION_LIST: AccordionItemType[] = [
  {
    id: "1",
    title: "Title 1",
    content: "Content 1",
  },
  {
    id: "2",
    title: "Title 2",
    content: "Content 2",
  },
  {
    id: "3",
    title: "Title 3",
    content: "Content 3",
  },
];

function App() {
  return (
    <div style={{ width: "50%" }}>
      <Accordion>
        {ACCORDION_LIST.map((item, index) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
            index={index}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default App;
