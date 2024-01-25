import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {selectUser} from "@/services/user/api";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {loadTask, pageTask} from "@/services/task/api";
import TaskDescriptions from "@/pages/task/components/TaskDescriptions";
import TaskEditForm from "@/pages/task/components/TaskEditForm";
import {selectProject} from "@/services/project/api";

/**
 * 任务管理
 */
const TaskManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.TaskDetail>();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.TaskItem>[] = [
    {
      title: "任务标题",
      dataIndex: "taskTitle",
    },
    {
      title: "所属项目",
      dataIndex: ['project', 'projectName'],
      request: selectProject,
    },
    {
      title: "任务负责人",
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
            const detail = await loadTask(record.id);
            setCurrentRow(detail);
            setDetailOpen(true);
          }}
        >
          详情
        </a>,
        <a
          key='update'
          onClick={async () => {
            const detail = await loadTask(record.id);
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
      <ProTable<API.TaskItem, API.TaskQuery & API.PageParams>
        headerTitle="任务列表"
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
        request={pageTask}
        columns={columns}/>
      <TaskDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <TaskEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log('新增任务', value)
        }}
      />
    </PageContainer>
  )
}

export default TaskManage;
