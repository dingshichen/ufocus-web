import React from "react";
import {ModalForm, ProFormSelect, ProFormText, ProFormTextArea} from "@ant-design/pro-components";

export type TicketEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.TicketDetail;
  onFinish: (value: API.TicketDetail) => Promise<void>;
}

const TicketEditForm: React.FC<TicketEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更工单" : "新建工单" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="400px"
      modalProps={{ destroyOnClose: true }}
      onFinish={props.onFinish}>
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入工单标题",
          },
        ]}
        width="md"
        name="ticketTitle"
        label="工单标题"
        initialValue={ props.currentRow?.ticketTitle }
      />
      <ProFormSelect
        name="dbGroup"
        label="数据库分组"
        width="md"
        valueEnum={{
          1: 'MySQL测试主库',
          2: 'MySQL测试所有',
        }}
        initialValue={ props.currentRow?.dbGroup }
      />
      <ProFormTextArea
        name="textContent"
        label="文本内容"
        width="md"
        initialValue={ props.currentRow?.textContent }
      />
    </ModalForm>
  )
}

export default TicketEditForm;


