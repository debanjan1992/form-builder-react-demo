import styled from "styled-components";
import { StylingAttributes } from "./element-bank/ElementBank.types";

interface QuestionProps {
  numbering: number;
  question: string;
  styling: StylingAttributes;
  onDelete: () => any;
  onQuestionTextChanged: (questionText: string) => any;
}

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  .numbering {
    margin-right: 10px;
    font-size: 14px;
  }
  .question-text {
    font-size: 14px;
    font-weight: bold;
    flex: 1;
    outline: none;
  }
  .actions {
    margin-left: 10px;
  }
`;

const Question = (props: QuestionProps) => {
  return (
    <QuestionWrapper>
      <div className="numbering">{props.numbering}.</div>
      <div
        className="question-text"
        contentEditable
        onBlur={(e) => {
          props.onQuestionTextChanged(e.target.innerText);
        }}
        defaultValue={props.question}
        suppressContentEditableWarning={true}
        style={{
          color: props.styling.fontColor,
          backgroundColor: props.styling.fontBackground,
        }}
      >
        {props.question}
      </div>
      <div className="actions">
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </QuestionWrapper>
  );
};

export default Question;
