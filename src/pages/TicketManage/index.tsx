import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {loadTicket, ticket} from "@/services/ticket/api";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

function getTicketColumn(option: ProColumns<API.TicketItem>): ProColumns<API.TicketItem>[] {
  return [
    {
      title: "工单标题",
      dataIndex: "ticketTitle",
    },
    {
      title: "数据库分组",
      dataIndex: ["dbGroup", "groupName"]
    },
    {
      title: "是否强制校验",
      dataIndex: "forceVerificationFlag",
      search: false
    },
    {
      title: "校验状态",
      dataIndex: "verificationState",
      search: false
    },
    {
      title: "审核状态",
      dataIndex: "auditState",
    },
    {
      title: "执行状态",
      dataIndex: "performState",
    },
    {
      title: "创建人",
      dataIndex: ["createUser", "chnName"],
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      valueType: 'dateTime'
    },
    option
  ]
}

const TicketManage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.TicketItem>()
  const actionRef = useRef<ActionType>();
  const columns = getTicketColumn({
    title: "操作",
    dataIndex: "option",
    valueType: "option",
    render: (_, record) => [
      <a
        key="update"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id)
          }
          init().then((value) => {
            setCurrentRow(value)
            setModalOpen(true);
          })
        }}
      >
        变更
      </a>,
      <a
        key="delete"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id)
          }
          init().then((value) => {
            setCurrentRow(value)
            setModalOpen(true);
          })
        }}
      >
        删除
      </a>,
      <a
        key="execute"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id)
          }
          init().then((value) => {
            setCurrentRow(value)
            setModalOpen(true);
          })
        }}
      >
        { record.auditState === "审核通过" ? "执行" : "审核" }
      </a>,
    ],
  })
  return (
    <PageContainer>
      <ProTable<API.TicketItem, API.PageParams>
        headerTitle="SQL工单列表"
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCurrentRow(undefined);
              setModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={ticket}
        columns={columns}/>
    </PageContainer>
  )
}

export default TicketManage
