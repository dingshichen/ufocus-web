import React, {useRef} from "react";
import {ActionType, ModalForm, ProColumns, ProDescriptions, ProTable} from "@ant-design/pro-components";
import {pageUsers} from "@/services/user/api";
import {Tag} from "antd";

export type RoleDescriptionsProps = {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  currentRow: API.RoleDetail,
}

const RoleDescriptions: React.FC<RoleDescriptionsProps> = (props) => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.UserItem>[] = [
    {
      title: "用户名称",
      dataIndex: "chnName",
    },
    {
      title: "手机号码",
      dataIndex: "mobilePhoneNumber",
    },
    {
      title: "电子邮箱",
      dataIndex: "emailAddress",
    }
  ]
  return (
    <ModalForm
      title="角色详情"
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="800px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}>
      <ProDescriptions<API.RoleDetail, API.Base>
        column={2}
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="chnName" label="角色名称" span={2}
          render={(_, entity) => (<Tag>{entity.chnName}</Tag>)}
        />
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["latestUpdateUser", "chnName"]} label="最近修改人"/>
        <ProDescriptions.Item dataIndex="latestUpdateTime" label="最近更新时间" valueType="dateTime"/>
      </ProDescriptions>
      <ProTable<API.UserItem, API.UserQuery & API.PageParams>
        headerTitle="用户列表"
        rowKey="id"
        actionRef={actionRef}
        defaultSize="small"
        search={false}
        pagination={{ defaultPageSize: 5 }}
        params={{ roleId: props.currentRow?.id }}
        request={pageUsers}
        columns={columns}
      />
    </ModalForm>
  )
}

export default RoleDescriptions;

