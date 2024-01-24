import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";

export type ProjectDescriptionsProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow: API.ProjectDetail;
}

/**
 * 项目详情
 */
const ProjectDescriptions: React.FC<ProjectDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="600px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}
    >
      <ProDescriptions<API.ProjectDetail, API.Base>
        column={2}
        title="项目详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="projectName" label="项目名称" span={2} />
        <ProDescriptions.Item dataIndex={['responsibleUser', 'chnName']} label="项目负责人" span={2}/>
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["latestUpdateUser", "chnName"]} label="最近修改人"/>
        <ProDescriptions.Item dataIndex="latestUpdateTime" label="最近更新时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex='projectDesc' label='描述' valueType='textarea' span={2} />
      </ProDescriptions>
    </ModalForm>
  )
}

export default ProjectDescriptions;
