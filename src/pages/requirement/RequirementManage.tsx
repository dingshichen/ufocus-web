import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {loadRequirement, pageRequirement} from "@/services/requirement/api";
import RequirementDescriptions from "@/pages/requirement/components/RequirementDescriptions";
import RequirementEditForm from "@/pages/requirement/components/RequirementEditForm";

/**
 * 需求管理
 */
const RequirementManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.RequirementDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.RequirementItem>[] = [
    {
      title: "需求标题",
      dataIndex: "requirementTitle",
    },
    {
      title: "所属项目",
      dataIndex: ['project', 'projectName'],
    },
    {
      title: "需求负责人",
      dataIndex: ['responsibleUser', 'chnName'],
      request: selectUser,
    },
    {
      title: "创建人",
      dataIndex: ['createUser', 'chnName'],
      request: selectUser,
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="detail"
          onClick={async () => {
            const detail = await loadRequirement(record.id);
            setCurrentRow(detail);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key='update'
          onClick={async () => {
            const detail = await loadRequirement(record.id);
            setCurrentRow(detail);
            setEditOpen(true);
          }}
        >
          变更
        </a>
      ],
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.RequirementItem, API.RequirementQuery & API.PageParams>
        headerTitle="需求列表"
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
        request={pageRequirement}
        columns={columns}/>
      <RequirementDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <RequirementEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log('新增需求', value)
        }}
      />
    </PageContainer>
  )
}

export default RequirementManage;
