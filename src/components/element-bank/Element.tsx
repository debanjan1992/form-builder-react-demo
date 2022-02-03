import { FormElementWrapper } from "./ElementBank.styles";
import { ElementAttributes, ElementProps } from "./ElementBank.types";
import { useDrag } from "react-dnd";

const Element = ({
  type,
  question,
  displayName,
  attributes,
}: ElementProps<ElementAttributes>) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "form-element",
      item: {
        type,
        question,
        attributes,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <FormElementWrapper
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <span>{displayName}</span>
    </FormElementWrapper>
  );
};

export default Element;
