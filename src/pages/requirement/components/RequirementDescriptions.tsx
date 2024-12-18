import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";

export type RequirementDescriptionsProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow: API.RequirementDetail;
}

/**
 * 需求详情
 */
const RequirementDescriptions: React.FC<RequirementDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="600px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}
    >
      <ProDescriptions<API.RequirementDetail, API.Base>
        column={2}
        title="需求详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="requirementTitle" label="需求标题" span={2} />
        <ProDescriptions.Item dataIndex={['project', 'projectName']} label="所属项目" />
        <ProDescriptions.Item dataIndex={['responsibleUser', 'chnName']} label="需求负责人" />
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["updateUser", "chnName"]} label="最近更新人"/>
        <ProDescriptions.Item dataIndex="updateTime" label="更新时间" valueType="dateTime"/>
      </ProDescriptions>
    </ModalForm>
  )
}

export default RequirementDescriptions;
