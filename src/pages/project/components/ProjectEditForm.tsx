import React from "react";
import {ModalForm, ProFormSelect, ProFormText, ProFormTextArea} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";

export type ProjectEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.ProjectDetail;
}

const ProjectEditForm: React.FC<ProjectEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更项目" : "新建项目" }
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
            message: "请输入项目名称",
          },
        ]}
        width="md"
        name="projectName"
        label="项目名称"
        initialValue={ props.currentRow?.projectName }
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
      <ProFormTextArea
        width="xl"
        name="projectDesc"
        label='描述'
        initialValue={ props.currentRow?.projectDesc }
      />
    </ModalForm>
  )
}

export default ProjectEditForm;

