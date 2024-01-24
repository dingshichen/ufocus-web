import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";

export type RequirementEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.RequirementDetail;
}

const RequirementEditForm: React.FC<RequirementEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更需求" : "新建需求" }
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
            message: "请输入需求标题",
          },
        ]}
        width="md"
        name="requirementTitle"
        label="需求标题"
        initialValue={ props.currentRow?.requirementTitle }
      />
      <ProFormSelect
        rules={[
          {
            required: true,
            message: "请选择项目",
          },
        ]}
        width="md"
        name="projectId"
        label="项目"
        request={selectUser}
        initialValue={ props.currentRow?.responsibleUser?.id }
      />
      <ProFormSelect
        rules={[
          {
            required: true,
            message: "请选择项目负责人",
          },
        ]}
        width="md"
        name="responsibleUserId"
        label="项目负责人"
        request={selectUser}
        initialValue={ props.currentRow?.responsibleUser?.id }
      />
    </ModalForm>
  )
}

export default RequirementEditForm;
