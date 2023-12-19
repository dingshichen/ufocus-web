import React from "react";
import {ModalForm, ProFormText} from "@ant-design/pro-components";

export type RoleEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.RoleDetail;
  onFinish: (values: Record<string, any>) => Promise<boolean | void>;
}

const RoleEditForm: React.FC<RoleEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow? "变更角色" : "新建角色" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="400px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      onFinish={props.onFinish}>
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入角色名称",
          }
        ]}
        width="md"
        name="chnName"
        label="角色名称"
        initialValue={ props.currentRow?.chnName }
      />
    </ModalForm>
  )
};

export default RoleEditForm;
