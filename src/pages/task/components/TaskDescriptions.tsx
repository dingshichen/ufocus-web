import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";

export type TaskDescriptionsProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow: API.TaskDetail;
}

/**
 * 任务详情
 */
const TaskDescriptions: React.FC<TaskDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="600px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}
    >
      <ProDescriptions<API.TaskDetail, API.Base>
        column={2}
        title="任务详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="taskTitle" label="任务标题" span={2} />
        <ProDescriptions.Item dataIndex={['project', 'projectName']} label="所属项目" />
        <ProDescriptions.Item dataIndex={['requirement', 'requirementTitle']} label="关联需求" />
        <ProDescriptions.Item dataIndex={['responsibleUser', 'chnName']} label="任务负责人" />
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["latestUpdateUser", "chnName"]} label="最近修改人"/>
        <ProDescriptions.Item dataIndex="latestUpdateTime" label="最近更新时间" valueType="dateTime"/>
      </ProDescriptions>
    </ModalForm>
  )
}

export default TaskDescriptions;
