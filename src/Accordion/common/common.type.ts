export type AccordionProps = {
  children: JSX.Element[];
};

export type AccordionItemProps = {
  index: number;
  title: string;
  content: string;
};

export type IconProps = {
  isOpen: boolean;
  styles?: React.CSSProperties;
};

export type AccordionContextType = {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  focusIndex: number | null;
  setFocusIndex: (index: number) => void;
};
