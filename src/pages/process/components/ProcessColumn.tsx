import React from "react";
import {Button, Col} from "antd";
import {useDroppable} from "@dnd-kit/core";

export type ProcessColumnProps = {
  key: string;
  label: string;
  color: string;
  children?: React.ReactNode;
}

/**
 * 过程列
 */
const ProcessColumn: React.FC<ProcessColumnProps> = (props) => {
  const {setNodeRef} = useDroppable({
    id: props.key
  });
  return (
    <Col span={6}>
      <Button block style={{ background: props.color }} >
        {props.label}
      </Button>
      <Col ref={setNodeRef}>
        {props.children}
      </Col>
    </Col>
  )
}

export default ProcessColumn;
