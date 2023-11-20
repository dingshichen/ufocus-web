import {loadDbTicketMock, dbTicket, loadDbTicketWithScriptV2} from '@/services/db/api';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import {Button, message} from 'antd';
import React, {useRef, useState} from 'react';
import DbTicketEditForm from "@/pages/db/components/DbTicketEditForm";
import {addRule} from "@/services/ant-design-pro/api";

// TODO
const handleAdd = async (fields: API.DbTicketWithScriptDetail) => {
  const hide = message.loading('正在添加');
  try {
    await addRule({...fields});
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

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
      title: '审核状态',
      dataIndex: 'auditState',
    },
    {
      title: '执行状态',
      dataIndex: 'performState',
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
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
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
              setModalOpen(true);
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
              setModalOpen(true);
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
              setModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={dbTicket}
        columns={columns}
      />
      <DbTicketEditForm
        open={isModalOpen}
        onOpenChange={setModalOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            setModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}/>
    </PageContainer>
  );
};

export default DbTicketManage;
