import { ShortTextAttributes } from "../../element-bank/ElementBank.types";
import Question from "../../Question";
import { FormElementStyle } from "../FormArea.styles";
import { FormAreaItem } from "../FormArea.types";

interface ShortTextProps extends FormAreaItem<ShortTextAttributes> {}

const ShortText = (props: ShortTextProps) => {
  return (
    <FormElementStyle
      onClick={() => props.onQuestionSelected()}
      isSelected={props.isSelected}
    >
      <Question
        numbering={props.numbering}
        styling={props.attributes.styling}
        question={props.question}
        onDelete={props.onDelete}
        onQuestionTextChanged={props.onQuestionTextChanged}
      />
      <div className="content-wrapper">
        <input type="text" />
      </div>
    </FormElementStyle>
  );
};

export default ShortText;
