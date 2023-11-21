import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";
import DbTicketScriptTab from "@/pages/db/components/DbTicketScriptTab";

export type DbTicketDescriptionsProps = {
  currentRow: API.DbTicketWithScriptDetail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * 浮层数据库工单详情
 */
const DbTicketDescriptions: React.FC<DbTicketDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="1200px"
      modalProps={{ destroyOnClose: true }}
      submitter={false}
    >
      <ProDescriptions<API.DbTicketWithScriptDetail, API.Base>
        column={2}
        title="工单详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="ticketTitle" label="工单标题"/>
        <ProDescriptions.Item dataIndex={["dbGroup", "groupName"]} label="数据库分组"/>
        <ProDescriptions.Item dataIndex="auditState" label="审核状态"/>
        <ProDescriptions.Item dataIndex="performState" label="执行状态"/>
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["latestUpdateUser", "chnName"]} label="最近修改人"/>
        <ProDescriptions.Item dataIndex="latestUpdateTime" label="最近更新时间" valueType="dateTime"/>
        <ProDescriptions.Item span={2} render={(_, value) => {
          return <DbTicketScriptTab dbTicketId={1} instanceScripts={(value as API.DbTicketWithScriptDetail).instanceScripts}/>
        }} />
      </ProDescriptions>
    </ModalForm>
  )
}

export default DbTicketDescriptions;

