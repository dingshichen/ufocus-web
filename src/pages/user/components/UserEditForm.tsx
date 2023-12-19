import React from "react";
import { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import {selectRole} from "@/services/role/api";

export type UserEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.UserDetail;
};

const UserEditForm: React.FC<UserEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更用户" : "新建用户" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="400px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      onFinish={props.onFinish}
    >
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
        width="md"
        name="chnName"
        label="用户名"
        initialValue={ props.currentRow?.chnName }
      />
      <ProFormSelect
        rules={[
        {
          required: true,
          message: "请选择角色",
        },
        ]}
        width="md"
        name="roles"
        mode="multiple"
        label="角色"
        request={selectRole}
        initialValue={ props.currentRow?.roles.map(e => ({ value: e.id, label: e.chnName }) ) }
      />
      <ProFormText
        width="md"
        name="mobilePhoneNumber"
        label="手机号码"
        initialValue={ props.currentRow?.mobilePhoneNumber }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入电子邮箱",
          },
        ]}
        width="md"
        name="emailAddress"
        label="电子邮箱"
        initialValue={ props.currentRow?.emailAddress }
      />
      { !props.currentRow && (
        <ProFormText.Password
          width="md"
          name="pwd"
          label="密码"
          readonly={true}
          initialValue={"123456"}
        />
      ) }
    </ModalForm>
  )
}

export default UserEditForm
