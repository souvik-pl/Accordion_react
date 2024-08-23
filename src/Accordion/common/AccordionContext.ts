import { createContext } from "react";
import { AccordionContextType } from "./common.type";

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);
