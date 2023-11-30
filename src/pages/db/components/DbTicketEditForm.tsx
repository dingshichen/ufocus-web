import React from "react";
import {ModalForm, ProFormSelect, ProFormText, ProFormTextArea} from "@ant-design/pro-components";
import {selectBeforeDbTicket, selectDbGroupMock} from "@/services/db/api";

export type DbTicketEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.DbTicketWithScriptDetail;
  onFinish: (value: API.DbTicketWithScriptDetail) => Promise<void>;
}

const DbTicketEditForm: React.FC<DbTicketEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更SQL工单" : "新建SQL工单" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="400px"
      modalProps={{
        destroyOnClose: true,
        width: '600px',
        maskClosable: false,
      }}
      onFinish={props.onFinish}>
      <ProFormText
        width="md"
        name="ticketTitle"
        label="工单标题"
        rules={[
          {
            required: true,
            message: '请输入工单标题',
          },
        ]}
        initialValue={props.currentRow?.ticketTitle}
      />
      <ProFormSelect
        name={["dbGroup", "groupName"]}
        label="数据库分组"
        width="md"
        request={selectDbGroupMock}
        rules={[
          {
            required: true,
            message: '请选择数据库分组',
          },
        ]}
        fieldProps={{ fieldNames: { label: 'groupName', value: 'id' } }}
        initialValue={props.currentRow?.dbGroup?.groupName}
      />
      <ProFormSelect
        name="dbTicketType"
        label="类型"
        width="md"
        rules={[
          {
            required: true,
            message: '请选择类型',
          },
        ]}
        valueEnum={{
          "结构变更": "结构变更",
          "数据变更": "数据变更",
          "存储过程": "存储过程",
        }}
        initialValue={props.currentRow?.dbTicketType}
        />
      <ProFormSelect
        name={["beforeDbTicket", "ticketTitle"]}
        label="紧前工单"
        width="md"
        request={async () => {
          const tickets = await selectBeforeDbTicket()
          return tickets.map((e) => {
            return {
              label: e.ticketTitle,
              value: e.id
            }
          })
        }}
        fieldProps={{ showSearch: true }}
        initialValue={props.currentRow?.beforeDbTicket?.ticketTitle}
        />
      <ProFormTextArea
        name="textContent"
        label="文本内容"
        width="xl"
        rules={[
          {
            required: true,
            message: '请输入文本内容',
          },
        ]}
        initialValue={props.currentRow?.textContent}
      />
    </ModalForm>
  )
}

export default DbTicketEditForm;
