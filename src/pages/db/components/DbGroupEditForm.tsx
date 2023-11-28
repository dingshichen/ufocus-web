import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectDbInstanceMock} from "@/services/db/api";
import {TagDbProduct} from "@/components/Tag/DbProduct";
import {RequestOptionsType} from "@ant-design/pro-utils/es/typing";

export type DbGroupEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.DbGroupItem;
  onFinish: (value: API.DbGroupDetail) => Promise<void>
};

async function selectDbInstanceTag(): Promise<RequestOptionsType[]> {
  const dbInstances = await selectDbInstanceMock()
  return dbInstances.map((e) => {
    return {
      label: <TagDbProduct dbProductCode={e.dbProductCode} text={e.dbInstanceName} />,
      value: e.id
    }
  })
}

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
        request={selectDbInstanceTag}
        initialValue={ props.currentRow?.dbInstances.map((e) => {
          return {
            label: <TagDbProduct dbProductCode={e.dbProductCode} text={e.dbInstanceName} />,
            value: e.id
          }})
        }
      />
    </ModalForm>
  )
};

export default DbGroupEditForm;
