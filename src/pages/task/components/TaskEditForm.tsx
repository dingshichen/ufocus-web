import React from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {selectProject} from "@/services/project/api";

export type TaskEditProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: Record<string, any>) => Promise<boolean | void>;
  currentRow?: API.TaskDetail;
}

const TaskEditForm: React.FC<TaskEditProps> = (props) => {
  return (
    <ModalForm
      title={ props.currentRow ? "变更任务" : "新建任务" }
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
            message: "请输入任务标题",
          },
        ]}
        width="md"
        name="taskTitle"
        label="任务标题"
        initialValue={ props.currentRow?.taskTitle }
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
            message: "请选择任务负责人",
          },
        ]}
        width="md"
        name="responsibleUserId"
        label="任务负责人"
        request={selectUser}
        initialValue={ props.currentRow?.responsibleUser?.id }
      />
    </ModalForm>
  )
}

export default TaskEditForm;
