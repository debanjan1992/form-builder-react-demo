import ElementBank from "../../components/element-bank/ElementBank";
import ElementProperties from "../../components/element-properties/ElementProperties";
import FormArea from "../../components/form-area/FormArea";
import { FormBuilderWrapper } from "./FormBuilder.styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FormAreaItem } from "../../components/form-area/FormArea.types";
import { ElementAttributes } from "../../components/element-bank/ElementBank.types";
import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import {
  FORM_ITEMS_SESSION_KEY,
  SessionStorageService,
} from "../../services/SessionStorageService";

const FormBuilder = () => {
  const [selectedItem, setSelectedItem] = useState(
    null as FormAreaItem<ElementAttributes> | null
  );
  const [formAreaItems, setFormAreaItems] = useState(
    () =>
      (SessionStorageService.getItem(FORM_ITEMS_SESSION_KEY) ||
        []) as FormAreaItem<ElementAttributes>[]
  );
  const onQuestionSelected = (item: FormAreaItem<ElementAttributes>) => {
    setFormAreaItems((oldArray) => {
      const index = oldArray.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        oldArray.forEach((item) => (item.isSelected = false));
        oldArray[index].isSelected = true;
      }
      SessionStorageService.saveItem(FORM_ITEMS_SESSION_KEY, oldArray);
      return [...oldArray];
    });
    setSelectedItem(item);
  };

  const onFormAreaDrop = useCallback(
    (item: FormAreaItem<ElementAttributes>) => {
      setFormAreaItems((oldArray) => {
        oldArray.forEach((item) => (item.isSelected = false));
        const newArray = [
          ...oldArray,
          { ...item, id: nanoid(), isSelected: true },
        ];
        SessionStorageService.saveItem(FORM_ITEMS_SESSION_KEY, newArray);
        return [...newArray];
      });
    },
    [formAreaItems]
  );

  const onElementDelete = (item: FormAreaItem<ElementAttributes>) => {
    setFormAreaItems((oldArray) => {
      oldArray.forEach((item) => (item.isSelected = false));
      const newArray = oldArray.filter((oldItem) => oldItem.id !== item.id);
      SessionStorageService.saveItem(FORM_ITEMS_SESSION_KEY, newArray);
      return [...newArray];
    });
  };

  const onElementQuestionChanged = (
    item: FormAreaItem<ElementAttributes>,
    questionText: string
  ) => {
    setFormAreaItems((oldArray) => {
      const index = oldArray.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        oldArray[index].question = questionText;
      }
      SessionStorageService.saveItem(FORM_ITEMS_SESSION_KEY, oldArray);
      return [...oldArray];
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <FormBuilderWrapper>
        <ElementBank />
        <FormArea
          items={formAreaItems}
          onDrop={onFormAreaDrop}
          onItemDelete={onElementDelete}
          onQuestionTextChange={onElementQuestionChanged}
          onQuestionSelected={onQuestionSelected}
        />
        <ElementProperties
          selectedItem={selectedItem}
          onItemPropertiesChange={(item) => {
            setFormAreaItems((oldArray) => {
              const index = oldArray.findIndex((i) => i.id === item.id);
              if (index !== -1) {
                oldArray[index].attributes.styling = item.attributes.styling;
              }
              SessionStorageService.saveItem(FORM_ITEMS_SESSION_KEY, oldArray);
              return [...oldArray];
            });
          }}
        />
      </FormBuilderWrapper>
    </DndProvider>
  );
};

export default FormBuilder;
