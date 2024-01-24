import React from "react";
import {ProTable} from "@ant-design/pro-components";
import {history} from "@@/core/history";
import qs from "qs";
import {loadDbTicketMock} from "@/services/db/api";
import {Tooltip} from "antd";

export type DbTicketScriptListProps = {
  scripts: API.DbTicketScriptItem[]
}

const DbTicketScripTable: React.FC<DbTicketScriptListProps> = (props) => {
  return (
    <ProTable<API.DbTicketScriptItem>
      rowKey="id"
      dataSource={props.scripts}
      options={false}
      search={false}
      columns={[
        {
          title: "内容",
          dataIndex: "textContent",
        },
        {
          title: "执行状态",
          dataIndex: "performState",
          width: 100,
          fixed: "right",
          valueEnum: {
            "WAIT": {
              text: "未执行",
              status: "default",
            },
            "RUNNING": {
              text: "执行中",
              status: "processing",
            },
            "SUCCESS": {
              text: "执行成功",
              status: "success",
            },
            "ERROR": {
              text: "执行失败",
              status: "error",
            },
          },
          render: (node, record) => {
            return record.exceptionInformationContent ? node : <Tooltip title={record.exceptionInformationContent}><span>{node}</span></Tooltip>
          }
        },
        {
          title: "操作",
          valueType: 'option',
          width: 120,
          fixed: "right",
          render: (_, record) => [
            <a
              key="update"
              onClick={async () => {
                const ticket = await loadDbTicketMock(record.id);
                console.log(ticket)
                history.push({
                  pathname: '/db/ticket/edit',
                  search: qs.stringify({
                    id: record.id,
                  }),
                });
              }}
            >
              变更
            </a>,
            <a
              key="delete"
              onClick={async () => {
                const value = await loadDbTicketMock(record.id);
                // TODO 删除
                console.log("删除：value" + value.id)
              }}
            >
              删除
            </a>,
            <a
              key="execute"
              onClick={async () => {
                const value = await loadDbTicketMock(record.id);
                // TODO 执行
                console.log("执行或审核：value" + value.id)
              }}
            >
              重试
            </a>,
          ],
        }
      ]}
    />
  );
};

export default DbTicketScripTable;
