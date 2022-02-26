import { useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { Identifier } from "typescript";
import { ShortTextAttributes } from "../../element-bank/ElementBank.types";
import Question from "../../Question";
import { FormElementStyle } from "../FormArea.styles";
import { DragItem, FormAreaItem } from "../FormArea.types";

interface ShortTextProps extends FormAreaItem<ShortTextAttributes> { }

const ShortText = (props: ShortTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "form-area-element",
      item: () => {
        return { id: props.id, index: props.index, question: props.question, attributes: props.attributes, isSelected: props.isSelected, type: props.type };
      },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging() ? 0.3 : 1,
        };
      },
    }),
    []
  );
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: any }
  >({
    accept: "form-area-element",
    collect: (monitor) => {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover: (item: DragItem, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  drag(drop(ref));
  return (
    <FormElementStyle
      onClick={() => props.onQuestionSelected()}
      isSelected={props.isSelected}
      ref={ref} style={{
        opacity: isDragging,
        cursor: "move",
      }}
      data-handler-id={handlerId}
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
