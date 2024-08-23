# Accordion in React

The `Accordion` component is a versatile and accessible UI element that allows users to expand and collapse sections of content. This implementation supports keyboard navigation and ensures that only one section is open at a time.

## Usage

To use the `Accordion` and `AccordionItem` components, import them into your project and include them in your JSX code as shown below:

```typescript
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
    <div>
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
```

## Props

1. **`Accordion`** - The `Accordion` component wraps multiple `AccordionItem` components and ensures that only one item can be expanded at a time.

   - `children: JSX.Element[]` - The `AccordionItem` components to be rendered inside the `Accordion`.

2. **`AccordionItem`** - The `AccordionItem` component represents an individual item in the accordion.
   - `index: number` - The index of the `AccordionItem` within the `Accordion`. Used for managing the open state.
   - `title: string` - The title of the accordion item, which will be displayed as the header.
   - `content: string` - The content of the accordion item, which will be revealed when the item is expanded.

## Features

- **Single Item Expansion:** Only one accordion item can be open at a time. Opening a new item automatically closes the previously opened one.
- **Keyboard Navigation:**

  - **ArrowUp:** Move focus to the previous accordion header.
  - **ArrowDown:** Move focus to the next accordion header.
  - **Home:** Move focus to the first accordion header.
  - **End:** Move focus to the last accordion header.
  - **Enter:** Toggle the expanded state of the focused accordion item.
  - **Space:** Toggle the expanded state of the focused accordion item.

## Installation

- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v18.17.1).
- Navigate to the project directory and run
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```
