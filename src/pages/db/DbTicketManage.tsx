import {loadDbTicketMock, dbTicket, loadDbTicketWithScriptV2} from '@/services/db/api';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import {Button} from 'antd';
import React, {useRef, useState} from 'react';
import DbTicketEditForm from "@/pages/db/components/DbTicketEditForm";
import DbTicketDescriptions from "@/pages/db/components/DbTicketDescriptions";

function getDbTicketColumn(option: ProColumns<API.DbTicketItem>): ProColumns<API.DbTicketItem>[] {
  return [
    {
      title: '工单标题',
      dataIndex: 'ticketTitle',
    },
    {
      title: '数据库分组',
      dataIndex: ['dbGroup', 'groupName'],
    },
    {
      title: '审批状态',
      dataIndex: 'auditState',
      valueEnum: {
        "WAIT_AUDIT": {
          text: "待审批",
          status: "default",
        },
        "APPROVE": {
          text: "已通过",
          status: "success",
        },
        "REJECT": {
          text: "已拒绝",
          status: "error",
        },
        "CANCEL": {
          text: "已撤销",
          status: "error",
        }
      }
    },
    {
      title: '执行状态',
      dataIndex: 'performState',
      valueEnum: {
        "WAIT": {
          text: "未执行",
          status: "default",
        },
        "RUNNING": {
          text: "执行中",
          status: "processing",
        },
        "SUCCESS": {
          text: "执行成功",
          status: "success",
        },
        "ERROR": {
          text: "执行失败",
          status: "error",
        },
      },
    },
    {
      title: '创建人',
      dataIndex: ['createUser', 'chnName'],
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
    option
  ];
}

const DbTicketManage: React.FC = () => {
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false);
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.DbTicketWithScriptDetail>();
  const actionRef = useRef<ActionType>();
  const columns = getDbTicketColumn(
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="detail"
          onClick={() => {
            loadDbTicketWithScriptV2(record.id).then(value => {
              setCurrentRow(value);
              setDetailOpen(true);
            })
          }}
        >
          详情
        </a>,
        <a
          key="update"
          onClick={() => {
            loadDbTicketWithScriptV2(record.id).then(value => {
              setCurrentRow(value);
              setEditOpen(true);
            })
          }}
        >
          变更
        </a>,
        <a
          key="delete"
          onClick={() => {
            const init = async () => {
              return await loadDbTicketMock(record.id);
            };
            init().then((value) => {
              // TODO 删除
              console.log("删除：value" + value.id)
            });
          }}
        >
          删除
        </a>,
        <a
          key="execute"
          onClick={() => {
            const init = async () => {
              return await loadDbTicketMock(record.id);
            };
            init().then((value) => {
              // TODO 执行或审核
              console.log("执行或审核：value" + value.id)
            });
          }}
        >
          {record.auditState === '审核通过' ? '执行' : '审核'}
        </a>,
      ],
    }
  );
  return (
    <PageContainer>
      <ProTable<API.DbTicketItem, API.PageParams>
        headerTitle="SQL工单列表"
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCurrentRow(undefined)
              setEditOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={dbTicket}
        columns={columns}
      />
      <DbTicketDescriptions
        open={isDetailOpen}
        onOpenChange={setDetailOpen}
        currentRow={currentRow!}
      />
      <DbTicketEditForm
        open={isEditOpen}
        onOpenChange={setEditOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          // TODO
          console.log(value)
        }}
      />
    </PageContainer>
  );
};

export default DbTicketManage;
