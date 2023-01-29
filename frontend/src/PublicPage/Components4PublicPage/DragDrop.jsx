import Container from "react-bootstrap/Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./SortableItem";
import Alert from 'react-bootstrap/Alert'

function DragDrop(props) {
  const [options, setOptions] = useState(props.myOptions);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setOptions((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" style={{ width: "90%", maxWidth: "500px"  }} align="center">
        <Alert key="success" variant="success" style={{marginBottom: "15px"}}>Your First Option</Alert>
        <SortableContext items={options} strategy={verticalListSortingStrategy}>
          {options.map((language, index) => (
            <SortableItem num={index+1} key={language} id={language} />
          ))}
        </SortableContext>
        <Alert key="danger" variant="danger" style={{marginBottom: "15px"}}>Your Last Option</Alert>
      </Container>
    </DndContext>
  );
}

export default DragDrop;
