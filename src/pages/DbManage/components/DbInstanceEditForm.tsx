import React from "react";
import {ModalForm, ProFormText} from "@ant-design/pro-components";

export type DbInstanceEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.DbInstanceDetail;
  onFinish: (value: API.DbInstanceItem) => Promise<void>;
};

/**
 * 数据库实例编辑表单
 */
const DbInstanceEditForm: React.FC<DbInstanceEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更数据库实例" : "新建数据库实例" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="400px"
      onFinish={props.onFinish}>
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入数据库实例名称",
          },
        ]}
        width="md"
        name="dbInstanceName"
        label="数据库实例名称"
        initialValue={ props.currentRow?.dbInstanceName }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请选择数据库产品",
          },
        ]}
        width="md"
        name="dbProductCode"
        label="数据库产品"
        initialValue={ props.currentRow?.dbProductCode }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请选择数据库产品版本号",
          },
        ]}
        width="md"
        name="dbProductVersionNumber"
        label="数据库产品版本号"
        initialValue={ props.currentRow?.dbProductVersionNumber }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入链接地址",
          },
        ]}
        width="md"
        name="linkAddress"
        label="链接地址"
        initialValue={ props.currentRow?.linkAddress }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入账号",
          },
        ]}
        width="md"
        name="account"
        label="账号"
        initialValue={ props.currentRow?.account }
      />
      <ProFormText.Password
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
        width="md"
        name="password"
        label="密码"
        initialValue={ props.currentRow?.password }
      />
    </ModalForm>
  )
}

export default DbInstanceEditForm;


