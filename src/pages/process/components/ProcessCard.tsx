import React from "react";
import {useDraggable} from "@dnd-kit/core";
import {Card} from "antd";

export type ProcessCardProps = {
  id: string;
  title: string;
  user: string;
}

/**
 * 过程卡片
 */
const ProcessCard: React.FC<ProcessCardProps> = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  return (
    <Card
      id={props.id}
      ref={setNodeRef}
      title={props.title}
      {...listeners}
      {...attributes}
      style={style}
      hoverable={true}  // 鼠标移过时可浮起
    >
      {props.user}
    </Card>
  )
}

export default ProcessCard;
