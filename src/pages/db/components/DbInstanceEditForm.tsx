import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {TagDaMeng, TagGaussDB, TagMySQL} from "@/components/Tag/DbProduct";

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
      modalProps={{
        destroyOnClose: true
      }}
      onFinish={props.onFinish}>
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入实例名称",
          },
        ]}
        width="md"
        name="dbInstanceName"
        label="实例名称"
        initialValue={ props.currentRow?.dbInstanceName }
      />
      <ProFormSelect
        name="dbProductCode"
        label="数据库产品"
        width="md"
        valueEnum={{
          'MYSQL': <TagMySQL />,
          'DAMENG': <TagDaMeng />,
          'GAUSSDB': <TagGaussDB />,
        }}
        rules={[
          {
            required: true,
            message: "请选择数据库产品",
          },
        ]}
        initialValue={ props.currentRow?.dbProductCode }
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


