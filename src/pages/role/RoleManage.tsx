import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Button, Popconfirm, Tag} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {deleteRole, insertRole, loadRole, pageRoles, updateRole} from "@/services/role/api";
import RoleDescriptions from "@/pages/role/components/RoleDescriptions";
import RoleEditForm from "@/pages/role/components/RoleEditForm";

async function handleSubmit(value: Record<string, any>, current?: API.RoleDetail) {
  if (current === undefined) {
    await insertRole({ chnName: value.chnName });
  } else {
    await updateRole({ id: current.id, chnName: value.chnName })
  }
}

const RoleManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.RoleDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.RoleItem>[] = [
    {
      title: '角色名称',
      dataIndex: 'chnName',
      render: (_, record) => (<Tag>{record.chnName}</Tag>)
    },
    {
      title: "创建人",
      dataIndex: ["createUser", "chnName"],
      search: false
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      valueType: 'dateTime',
      search: false
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="detail"
          onClick={async () => {
            const role = await loadRole(record.id);
            setCurrentRow(role);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key="update"
          onClick={async () => {
            const role = await loadRole(record.id);
            setCurrentRow(role);
            setEditOpen(true);
          }}
        >
          变更
        </a>,
        <Popconfirm
          key="delete"
          title="注意"
          description="删除该角色后将无法恢复！"
          onConfirm={async () => {
            await deleteRole(record.id)
            actionRef.current?.reload()
          }} >
          <a>删除</a>
        </Popconfirm>
      ],
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.RoleItem, API.RoleQuery & API.PageParams>
        headerTitle="角色列表"
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
        request={pageRoles}
        columns={columns} />
        <RoleDescriptions
          open={isDetailOpen}
          onOpenChange={setDetailOpen}
          currentRow={currentRow!}/>
        <RoleEditForm
          open={isEditOpen}
          onOpenChange={setEditOpen}
          currentRow={currentRow}
          onFinish={async (value) => {
            await handleSubmit(value, currentRow)
            setEditOpen(false)
            actionRef.current?.reload()
          }}/>
    </PageContainer>
  )
}

export default RoleManage
