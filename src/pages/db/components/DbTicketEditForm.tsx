import React from "react";
import {ModalForm, ProFormSelect, ProFormText, ProFormTextArea} from "@ant-design/pro-components";
import {selectDbGroupMock} from "@/services/db/api";

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
        width: '600px'
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
