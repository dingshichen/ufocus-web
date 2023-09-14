import React from "react";
import {Tag} from "antd";

export type TagProductProps = {
  text?: string;
}

export const TagMySQL: React.FC<TagProductProps> = (props) => {
  return <Tag color="#2db7f5">{ props.text ? props.text : "MYSQL"}</Tag>
}

export const TagDaMeng: React.FC<TagProductProps> = (props) => {
  return <Tag color="#108ee9">{ props.text ? props.text : "DAMENG"}</Tag>
}

export const TagGaussDB: React.FC<TagProductProps> = (props) => {
  return <Tag color="#f50">{ props.text ? props.text : "GAUSSDB"}</Tag>
}
