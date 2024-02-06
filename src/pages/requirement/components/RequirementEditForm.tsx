import React, {useState} from "react";
import {ModalForm, ProForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {selectProject} from "@/services/project/api";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export type RequirementEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.RequirementDetail;
}

const RequirementEditForm: React.FC<RequirementEditProps> = (props) => {
  const [value, setValue] = useState('');
  return (
    <ModalForm
      title={ props.currentRow ? "变更需求" : "新建需求" }
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="800px"
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
        request={selectProject}
        initialValue={ props.currentRow?.project?.id }
      />
      <ProFormSelect
        rules={[
          {
            required: true,
            message: "请选择需求负责人",
          },
        ]}
        width="md"
        name="responsibleUserId"
        label="需求负责人"
        request={selectUser}
        initialValue={ props.currentRow?.responsibleUser?.id }
      />
      <ProForm.Item
        name="context"
        label="内容"
        initialValue={value}
      >
        <ReactQuill theme='snow' value={value} onChange={setValue} />
      </ProForm.Item>
    </ModalForm>
  )
}

export default RequirementEditForm;
