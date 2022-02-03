import { HTMLAttributes } from "react";

export interface ElementBankProps extends HTMLAttributes<any> {
    
}

export enum ElementType {
    SHORT_TEXT = "shorttext",
    CHECKBOX = "checkbox"
}

export interface StylingAttributes {
    fontColor: string;
    fontBackground: string;
}

export type ElementAttributes = ShortTextAttributes | CheckboxAttributes;

export interface ShortTextAttributes {
    styling: StylingAttributes;
}
export interface CheckboxAttributes {
    styling: StylingAttributes;
    choices: {
        value: string;
        label: string;
    }[];
}

export interface FormElement<T> {
    type: ElementType;
    question: string;
    attributes: T;
    displayName: string;
}

export interface ElementProps<T> extends FormElement<T> {
}