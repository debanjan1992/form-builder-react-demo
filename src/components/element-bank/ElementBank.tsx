import { ElementBankWrapper, FormElementWrapper } from "./ElementBank.styles";
import {
  CheckboxAttributes,
  ElementAttributes,
  ElementBankProps,
  ElementType,
  FormElement,
  ShortTextAttributes,
} from "./ElementBank.types";
import Element from "./Element";

const ElementBank = (props: ElementBankProps) => {
  const elements: FormElement<ElementAttributes>[] = [
    {
      type: ElementType.SHORT_TEXT,
      question: "Set Question",
      attributes: {
        styling: {
          fontBackground: "#FFFFFF",
          fontColor: "#000000",
        },
      } as ShortTextAttributes,
      displayName: "Text",
    },
    {
      type: ElementType.CHECKBOX,
      question: "Set Question",
      attributes: {
        styling: {
          fontBackground: "#FFFFFF",
          fontColor: "#000000",
        },
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      } as CheckboxAttributes,
      displayName: "Checkbox",
    },
  ];

  return (
    <ElementBankWrapper className="panel">
      <div className="title">Elements</div>
      <div className="container">
        {elements.map((element) => (
          <Element key={element.type} {...element} />
        ))}
      </div>
    </ElementBankWrapper>
  );
};

export default ElementBank;
