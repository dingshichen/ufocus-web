import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {loadRequirement, pageRequirement} from "@/services/requirement/api";
import RequirementDescriptions from "@/pages/requirement/components/RequirementDescriptions";
import RequirementEditForm from "@/pages/requirement/components/RequirementEditForm";
import {loadDefect, pageDefect} from "@/services/defect/api";
import DefectDescriptions from "@/pages/defect/components/DefectDescriptions";
import DefectEditForm from "@/pages/defect/components/DefectEditForm";
import {selectProject} from "@/services/project/api";

/**
 * 缺陷管理
 */
const DefectManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.DefectDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.DefectItem>[] = [
    {
      title: "缺陷标题",
      dataIndex: "defectTitle",
    },
    {
      title: "所属项目",
      dataIndex: ['project', 'projectName'],
      request: selectProject,
    },
    {
      title: "缺陷负责人",
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
            const detail = await loadDefect(record.id);
            setCurrentRow(detail);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key='update'
          onClick={async () => {
            const detail = await loadDefect(record.id);
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
      <ProTable<API.DefectItem, API.DefectQuery & API.PageParams>
        headerTitle="缺陷列表"
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
        request={pageDefect}
        columns={columns}/>
      <DefectDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <DefectEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log('新增缺陷', value)
        }}
      />
    </PageContainer>
  )
}

export default DefectManage;
