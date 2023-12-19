import React, {useRef, useState} from "react";
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable
} from "@ant-design/pro-components";
import {Button, Popconfirm, Tag} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import UserEditForm from "@/pages/user/components/UserEditForm";
import {insertUser, loadUser, pageUsers, updateUser} from "@/services/user/api";
import UserDescriptions from "@/pages/user/components/UserDescriptions";
import {selectRole} from "@/services/role/api";

/**
 * 处理提交
 */
async function handleSubmit(value: Record<string, any>, current?: API.UserDetail) {
  if (current === undefined) {
    await insertUser({
      chnName: value.chnName,
      roleIds: value.roles,
      mobilePhoneNumber: value.mobilePhoneNumber,
      emailAddress: value.emailAddress,
      pwd: value.pwd,
    });
  } else {
    await updateUser({
      id: current.id,
      chnName: value.chnName,
      roleIds: value.roles.map((e: Record<string, any>) => e.value),
      mobilePhoneNumber: value.mobilePhoneNumber,
      emailAddress: value.emailAddress,
    });
  }
}

const UserManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.UserDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.UserItem>[] = [
    {
      title: "用户名称",
      dataIndex: "chnName",
    },
    {
      title: "角色",
      valueType: "select",
      request: selectRole,
      fieldProps: { fieldNames: { value: 'id', label: 'chnName' } },
      ellipsis: true,
      render: (_, user) => {
        return(
          <div>
            { user.roles.map((role) => <Tag key={role.id}>{role.chnName}</Tag>) }
          </div>
        )
      }
    },
    {
      title: "手机号码",
      dataIndex: "mobilePhoneNumber",
    },
    {
      title: "电子邮箱",
      dataIndex: "emailAddress",
      search: false
    },
    {
      title: "停用状态",
      dataIndex: "isLockFlag",
      valueEnum: {
        false: {
          text: "可用",
          status: "success",
        },
        true: {
          text: "停用",
          status: "error",
        }
      },
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="detail"
          onClick={async () => {
            const user = await loadUser(record.id);
            setCurrentRow(user);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key="update"
          onClick={async () => {
            const user = await loadUser(record.id);
            setCurrentRow(user);
            setEditOpen(true);
          }}
        >
          变更
        </a>,
        <Popconfirm
          key="lock"
          title="注意"
          description="停用后该用户将无法登陆！"
          onConfirm={async () => {
            console.log("确认删除 id = " + record.id)
          }} >
            <a>停用</a>
        </Popconfirm>
        ,
      ],
    },
  ]

  return (
    <PageContainer>
      <ProTable<API.UserItem, API.UserQuery & API.PageParams>
        headerTitle="用户列表"
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCurrentRow(undefined);
              setEditOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={pageUsers}
        columns={columns}/>
      <UserDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <UserEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          await handleSubmit(value, currentRow)
          setEditOpen(false);
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  )
}

export default UserManage;
