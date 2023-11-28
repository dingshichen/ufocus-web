import React from "react";
import {Tag} from "antd";

export type TagProductProps = {
  text?: string;
}

export type TagCommonProps = {
  dbProductCode: string
} & TagProductProps

// 应该拆分到单个文件

export const TagMySQL: React.FC<TagProductProps> = (props) => {
  return <Tag color="#2db7f5">{ props.text ? props.text : "MYSQL"}</Tag>
}

export const TagDaMeng: React.FC<TagProductProps> = (props) => {
  return <Tag color="#108ee9">{ props.text ? props.text : "DAMENG"}</Tag>
}

export const TagGaussDB: React.FC<TagProductProps> = (props) => {
  return <Tag color="#f50">{ props.text ? props.text : "GAUSSDB"}</Tag>
}

export const TagDbProduct: React.FC<TagCommonProps> = (props) => {
  switch (props.dbProductCode) {
    case 'MYSQL':
      return <TagMySQL text={props.text} />
    case 'DAMENG':
      return <TagDaMeng text={props.text} />
    case 'GAUSSDB':
      return <TagGaussDB text={props.text} />
    default:
      return <Tag title={props.text} />
  }
}
