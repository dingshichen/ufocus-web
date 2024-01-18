import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";
import {Tabs, Tag} from "antd";
import UserSmallTable from "@/pages/user/components/UserSmallTable";
import PermissionTags from "@/pages/permission/components/PermissionTags";

export type RoleDescriptionsProps = {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  currentRow: API.RoleDetail,
}

const getRoleDescriptionTabs = (roleId: string) => {
  return [
    {
      key: "permissions",
      label: "权限",
      children: <PermissionTags roleId={roleId} />
    },
    {
      key: "users",
      label: "用户",
      children: <UserSmallTable roleId={roleId} />
    }
  ]
}

const RoleDescriptions: React.FC<RoleDescriptionsProps> = (props) => {
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
      <Tabs defaultActiveKey="permissions" items={getRoleDescriptionTabs(props.currentRow?.id)} />
    </ModalForm>
  )
}

export default RoleDescriptions;

