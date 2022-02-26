import { useEffect, useState } from "react";
import { ElementPropertiesWrapper } from "./ElementProperties.styles";
import { ElementPropertiesProps } from "./ElementProperties.types";

const ElementProperties = (props: ElementPropertiesProps) => {
  const [fontColor, setFontColor] = useState(
    props.selectedItem ? props.selectedItem.attributes.styling.fontColor : ""
  );
  const [fontBackground, setFontBackground] = useState(
    props.selectedItem
      ? props.selectedItem.attributes.styling.fontBackground
      : ""
  );

  useEffect(() => {
    if (props.selectedItem !== null) {
      setFontColor(props.selectedItem.attributes.styling.fontColor);
      setFontBackground(props.selectedItem.attributes.styling.fontBackground);
    }
  }, [props.selectedItem]);

  if (props.selectedItem === null) {
    return null;
  }
  return (
    <ElementPropertiesWrapper className="panel">
      <h3>Element Properties</h3>
      <div className="property-wrapper">
        <label>Text Color</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => {
            setFontColor(e.target.value);
            if (props.selectedItem !== null) {
              props.selectedItem.attributes.styling.fontColor = e.target.value;
              props.onItemPropertiesChange(props.selectedItem);
            }
          }}
        />
      </div>
      <div className="property-wrapper">
        <label>Text Background Color</label>
        <input
          type="color"
          value={fontBackground}
          onChange={(e) => {
            setFontBackground(e.target.value);
            if (props.selectedItem !== null) {
              props.selectedItem.attributes.styling.fontBackground =
                e.target.value;
              props.onItemPropertiesChange(props.selectedItem);
            }
          }}
        />
      </div>
    </ElementPropertiesWrapper>
  );
};

export default ElementProperties;
