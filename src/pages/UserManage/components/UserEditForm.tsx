import React from "react";
import {ModalForm, ProFormText} from "@ant-design/pro-components";

export type UpdateFormProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: API.UserItem) => Promise<boolean | void>;
  currentRow?: API.UserItem;
};

const UserEditForm: React.FC<UpdateFormProps> = (value) => {
  return (
    <ModalForm
      title="变更用户"
      open={value.open}
      onOpenChange={value.onOpenChange}
      width="400px"
      onFinish={value.onFinish}
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
        initialValue={ value.currentRow?.chnName }
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "请输入手机号码",
          },
        ]}
        width="md"
        name="mobilePhoneNumber"
        label="手机号码"
        initialValue={ value.currentRow?.mobilePhoneNumber }
      />
      <ProFormText
        width="md"
        name="emailAddress"
        label="电子邮箱"
        initialValue={ value.currentRow?.emailAddress }
      />
    </ModalForm>
  )
}

export default UserEditForm
