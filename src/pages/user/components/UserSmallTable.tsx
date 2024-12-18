import React, {useRef} from "react";
import {ActionType, ProColumns, ProTable} from "@ant-design/pro-components";
import {pageUsers} from "@/services/user/api";

export type UserSmallTableProps = {
  roleId?: string;
}

/**
 * 用户小表格，页容5
 */
const UserSmallTable: React.FC<UserSmallTableProps> = (props) => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.UserItem>[] = [
    {
      title: "用户姓名",
      dataIndex: "userName",
    },
    {
      title: "手机号码",
      dataIndex: "phoneNo",
    },
    {
      title: "电子邮箱",
      dataIndex: "email",
    }
  ]
  return (
    <ProTable<API.UserItem, API.UserQuery & API.PageParams>
      headerTitle="用户列表"
      rowKey="id"
      actionRef={actionRef}
      defaultSize="small"
      search={false}
      pagination={{ defaultPageSize: 5 }}   // 页容 5
      params={{ roleId: props.roleId }}
      request={pageUsers}
      columns={columns}
    />
  )
}

export default UserSmallTable;
