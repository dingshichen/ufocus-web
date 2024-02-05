import React from "react";
import {useDraggable} from "@dnd-kit/core";

export type ProcessCardProps = {
  id: string;
  title: string;
}

/**
 * 过程卡片
 */
const ProcessCard: React.FC<ProcessCardProps> = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  return (
    <div ref={setNodeRef} {... listeners} {...attributes}  style={{ background: 'red', borderStyle: 'solid', borderWidth: '2px', borderColor: 'yellow' , width: '200px', height: '80px', ...style }}>
      {/*<span>{props.title}</span>*/}
    </div>
  )
}

export default ProcessCard;
