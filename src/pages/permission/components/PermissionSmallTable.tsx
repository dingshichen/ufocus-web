import React, {useRef, useState} from "react";
import {ActionType, ProColumns, ProTable} from "@ant-design/pro-components";
import {rolePermission} from "@/services/role/api";
import {useAsyncEffect} from "ahooks";

export type PermissionSmallTableProp = {
  roleId: string
}

const PermissionSmallTable: React.FC<PermissionSmallTableProp> = (props) => {
  const actionRef = useRef<ActionType>();
  const [permissions, setPermissions] = useState<API.PermissionOption[]>()
  const columns: ProColumns<API.PermissionOption>[] = [
    {
      title: "权限名称",
      dataIndex: "permissionName",
    },
  ]
  useAsyncEffect(async () => {
    const permissions = await rolePermission(props.roleId)
    setPermissions(permissions)
  }, [])
  return (
    <ProTable<API.PermissionOption, API.UserQuery & API.PageParams>
      headerTitle="权限列表"
      rowKey="id"
      actionRef={actionRef}
      defaultSize="small"
      search={false}
      pagination={{ defaultPageSize: 5 }}   // 页容 5
      params={{ roleId: props.roleId }}
      dataSource={permissions}
      columns={columns}
    />
  )
}

export default PermissionSmallTable;
