import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {selectProject} from "@/services/project/api";

export type DefectEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.DefectDetail;
}

const DefectEditForm: React.FC<DefectEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更缺陷" : "新建缺陷" }
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
            message: "请输入缺陷标题",
          },
        ]}
        width="md"
        name="defectTitle"
        label="缺陷标题"
        initialValue={ props.currentRow?.defectTitle }
      />
      <ProFormSelect
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
            message: "请选择缺陷负责人",
          },
        ]}
        width="md"
        name="responsibleUserId"
        label="缺陷负责人"
        request={selectUser}
        initialValue={ props.currentRow?.responsibleUser?.id }
      />
    </ModalForm>
  )
}

export default DefectEditForm;
