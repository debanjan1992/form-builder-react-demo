import { HTMLAttributes } from "react";
import { ElementAttributes, ElementType } from "../element-bank/ElementBank.types";

export interface FormAreaProps {
  items: FormAreaItem<ElementAttributes>[];
  onQuestionSelected: (item: FormAreaItem<ElementAttributes>) => any;
  onQuestionTextChange: (item: FormAreaItem<ElementAttributes>, question: string) => any;
  onDrop: (item: FormAreaItem<ElementAttributes>) => any;
  onItemDelete: (item: FormAreaItem<ElementAttributes>) => any;
}

export interface FormAreaItem<T> {
  id: string;
  question: string;
  attributes: T;
  type: ElementType;
  numbering: number;
  isSelected: boolean;
  onDelete: () => any;
  onQuestionTextChanged: (questionText: string) => any;
  onQuestionSelected: () => any;
}
