import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectPermissions} from "@/services/permission/api";

export type RoleEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow?: API.RoleDetail;
  currentRolePermissions?: API.PermissionOption[];
  onFinish: (values: Record<string, any>) => Promise<boolean | void>;
}

/**
 * 角色编辑表单
 */
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
      <ProFormSelect
        width="md"
        name="permissionIds"
        mode="multiple"
        label="权限"
        request={selectPermissions}
        initialValue={ props.currentRolePermissions?.map((item) => ({ value: item.id, label: item.permissionName })) }
      />
    </ModalForm>
  )
};

export default RoleEditForm;
