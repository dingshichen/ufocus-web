import React from "react";
import {Col} from "antd";
import {useDroppable} from "@dnd-kit/core";

export type ProcessStatusColumnProps = {
  id: string;
  label: string;
  color: string;
  children?: React.ReactNode;
}

/**
 * 过程状态列
 */
const ProcessStatusColumn: React.FC<ProcessStatusColumnProps> = (props) => {
  const {setNodeRef} = useDroppable({
    id: props.id
  });
  return (
    <Col
      span={6}
      key={props.id}
      style={{ borderStyle: 'solid', borderWidth: '3px', borderColor: props.color }}
      ref={setNodeRef}
    >
      {props.children}
    </Col>
  )
}

export default ProcessStatusColumn;
