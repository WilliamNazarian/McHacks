import Container from "react-bootstrap/Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./SortableItem";

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
      <Container className="p-3" style={{ width: "50%"  }} align="center">
        <SortableContext items={options} strategy={verticalListSortingStrategy}>
          {options.map((language, index) => (
            <SortableItem num={index+1} key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );
}

export default DragDrop;
