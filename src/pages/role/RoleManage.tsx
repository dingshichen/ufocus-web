import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {role} from "@/services/role/api";

const RoleManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.RoleDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.RoleItem>[] = [
    {
      title: '角色名称',
      dataIndex: 'chnName',
      valueType: 'text',
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
          onClick={() => {
            // TODO
          }}
        >
          详情
        </a>,
        <a
          key="update"
          onClick={() => {
            // TODO
          }}
        >
          变更
        </a>,
      ],
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.RoleItem, API.PageParams>
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
        request={role}
        columns={columns} />

    </PageContainer>
  )
}

export default RoleManage
