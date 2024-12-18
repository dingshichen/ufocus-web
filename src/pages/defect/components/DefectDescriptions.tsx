import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";

export type DefectDescriptionsProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow: API.DefectDetail;
}

/**
 * 缺陷详情
 */
const DefectDescriptions: React.FC<DefectDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="600px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}
    >
      <ProDescriptions<API.DefectDetail, API.Base>
        column={2}
        title="缺陷详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex='defectTitle' label="缺陷标题" span={2} />
        <ProDescriptions.Item dataIndex={['project', 'projectName']} label="所属项目" />
        <ProDescriptions.Item dataIndex={['responsibleUser', 'chnName']} label="缺陷负责人" />
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["updateUser", "chnName"]} label="最近更新人"/>
        <ProDescriptions.Item dataIndex="updateTime" label="更新时间" valueType="dateTime"/>
      </ProDescriptions>
    </ModalForm>
  )
}

export default DefectDescriptions;
