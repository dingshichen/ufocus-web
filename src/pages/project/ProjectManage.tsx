import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {loadProject, pageProject} from "@/services/project/api";
import ProjectDescriptions from "@/pages/project/components/ProjectDescriptions";
import ProjectEditForm from "@/pages/project/components/ProjectEditForm";
import {selectUser} from "@/services/user/api";

/**
 * 项目管理页面
 */
const ProjectManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.ProjectDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.ProjectItem>[] = [
    {
      title: "项目名称",
      dataIndex: "projectName",
    },
    {
      title: "项目负责人",
      dataIndex: ['responsibleUser', 'chnName'],
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
            const detail = await loadProject(record.id);
            setCurrentRow(detail);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key='update'
          onClick={async () => {
            const detail = await loadProject(record.id);
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
      <ProTable<API.ProjectItem, API.ProjectQuery & API.PageParams>
        headerTitle="项目列表"
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
        request={pageProject}
        columns={columns}/>
      <ProjectDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <ProjectEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log('新增项目', value)
        }}
      />
    </PageContainer>
  )
}

export default ProjectManage;
