import React from "react";
import {Tabs} from "antd";
import DbTicketScripTable from "@/pages/db/components/DbTicketScripTable";
import {TagDbProduct} from "@/components/Tag/DbProduct";

export type DbTicketScriptTabProps = {
  dbTicketId: number;
  instanceScripts: API.DbTicketInstanceScriptItem[];
};

const tabs = (instanceScripts: API.DbTicketInstanceScriptItem[]) => {
  return instanceScripts.map(value => {
    return {
      key: value.dbInstance.id.toString(),
      label: <TagDbProduct dbProductCode={value.dbInstance.dbProductCode} text={value.dbInstance.dbInstanceName} />,
      children: <DbTicketScripTable scripts={value.scripts}/>
    }
  });
}

/**
 * 数据工单脚本标签，按数据库实例生成
 */
const DbTicketScriptTab: React.FC<DbTicketScriptTabProps> = (props) => {
  return <Tabs defaultActiveKey={props.instanceScripts[0].dbInstance.id.toString()} items={tabs(props.instanceScripts)} />;
};

export default DbTicketScriptTab;
