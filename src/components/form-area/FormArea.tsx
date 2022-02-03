import { useDrop } from "react-dnd";
import { FormAreaWrapper } from "./FormArea.styles";
import { FormAreaItem, FormAreaProps } from "./FormArea.types";
import { nanoid } from "nanoid";
import { useCallback, useRef, useState } from "react";
import ShortText from "./elements/ShortText";
import {
  CheckboxAttributes,
  ElementAttributes,
  ElementType,
} from "../element-bank/ElementBank.types";
import Checkbox from "./elements/Checkbox";

const FormArea = (props: FormAreaProps) => {
  const [, drop] = useDrop(() => ({
    accept: "form-element",
    drop: (item: FormAreaItem<ElementAttributes>) => {
      props.onDrop(item);
    },
  }));

  return (
    <FormAreaWrapper
      className="panel"
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {props.items.map((item, index) => {
        switch (item.type) {
          case ElementType.SHORT_TEXT:
            return (
              <ShortText
                key={index}
                {...item}
                numbering={index + 1}
                onDelete={() => props.onItemDelete(item)}
                onQuestionTextChanged={(questionText) =>
                  props.onQuestionTextChange(item, questionText)
                }
                onQuestionSelected={() => props.onQuestionSelected(item)}
              />
            );
          case ElementType.CHECKBOX:
            return (
              <Checkbox
                key={index}
                {...(item as FormAreaItem<CheckboxAttributes>)}
                numbering={index + 1}
                onDelete={() => props.onItemDelete(item)}
                onQuestionTextChanged={(questionText) =>
                  props.onQuestionTextChange(item, questionText)
                }
                onQuestionSelected={() => props.onQuestionSelected(item)}
              />
            );
        }
      })}
    </FormAreaWrapper>
  );
};

export default FormArea;
