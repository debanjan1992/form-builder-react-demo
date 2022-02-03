import { CheckboxAttributes } from "../../element-bank/ElementBank.types";
import Question from "../../Question";
import { FormElementStyle } from "../FormArea.styles";
import { FormAreaItem } from "../FormArea.types";

interface CheckboxProps extends FormAreaItem<CheckboxAttributes> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <FormElementStyle onClick={() => props.onQuestionSelected()} isSelected={props.isSelected}>
      <Question
        numbering={props.numbering}
        question={props.question}
        styling={props.attributes.styling}
        onDelete={props.onDelete}
        onQuestionTextChanged={props.onQuestionTextChanged}
      />
      <div className="content-wrapper choices-wrapper">
        {props.attributes.choices.map((choice, index) => (
          <div key={index}>
            <input type="checkbox" value={choice.value} />
            <label>{choice.label}</label>
          </div>
        ))}
      </div>
    </FormElementStyle>
  );
};

export default Checkbox;
