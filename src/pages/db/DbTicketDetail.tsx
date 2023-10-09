import { PageContainer,ProDescriptions } from "@ant-design/pro-components";
import React from "react";
import { useSearchParams } from "react-router-dom";
import DbTicketScriptTab from "@/pages/db/components/DbTicketScriptTab";
import {loadDbTicketWithScript} from "@/services/db/api";

const DbTicketDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  return (
    <PageContainer>
      <ProDescriptions<API.DbTicketWithScriptDetail, API.Base>
        column={2}
        title="详情"
        request={async ()=> {
          return loadDbTicketWithScript(id)
        }}
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
    </PageContainer>
  );
};

export default DbTicketDetail;
