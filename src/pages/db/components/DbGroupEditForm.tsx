import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";

export type DbGroupEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.DbGroupItem;
  onFinish: (value: API.DbGroupDetail) => Promise<void>
};

const DbGroupEditForm: React.FC<DbGroupEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更数据库实例分组" : "新建数据库实例分组" }
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
        name="groupName"
        label="分组名称"
        initialValue={ props.currentRow?.groupName }
      />
      <ProFormText
        width="md"
        name="groupDesc"
        label="分组描述"
        initialValue={ props.currentRow?.groupDesc }
      />
      <ProFormSelect
        name="dbInstances"
        label="数据库实例"
        mode="multiple"
        width="md"
        valueEnum={{
          1: 'MySQL测试环境主库',
          2: 'DM测试环境租户库',
          3: 'GAUSSDB测试环境主库'
        }}
      />
    </ModalForm>
  )
};

export default DbGroupEditForm;
