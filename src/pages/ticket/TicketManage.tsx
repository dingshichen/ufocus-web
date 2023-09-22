import TicketEditForm from '@/pages/ticket/components/TicketEditForm';
import { addRule } from '@/services/ant-design-pro/api';
import { loadTicket, ticket } from '@/services/ticket/api';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import qs from 'qs';
import React, { useRef, useState } from 'react';
import { history } from 'umi';

const handleAdd = async (fields: API.TicketDetail) => {
  const hide = message.loading('正在添加');
  try {
    await addRule({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

function getTicketColumn(option: ProColumns<API.TicketItem>): ProColumns<API.TicketItem>[] {
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
    option,
  ];
}

const TicketManage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.TicketDetail>();
  const actionRef = useRef<ActionType>();
  const columns = getTicketColumn({
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => [
      <a
        key="update"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id);
          };
          init().then((value) => {
            setCurrentRow(value);
            history.push({
              pathname: '/ticket/edit',
              search: qs.stringify({
                id: record.id,
              }),
            });
          });
        }}
      >
        变更
      </a>,
      <a
        key="delete"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id);
          };
          init().then((value) => {
            setCurrentRow(value);
          });
        }}
      >
        删除
      </a>,
      <a
        key="execute"
        onClick={() => {
          const init = async () => {
            return await loadTicket(record.id);
          };
          init().then((value) => {
            setCurrentRow(value);
            setModalOpen(true);
          });
        }}
      >
        {record.auditState === '审核通过' ? '执行' : '审核'}
      </a>,
    ],
  });
  return (
    <PageContainer>
      <ProTable<API.TicketItem, API.PageParams>
        headerTitle="SQL工单列表"
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCurrentRow(undefined);
              history.push({
                pathname: '/ticket/edit',
              });
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={ticket}
        columns={columns}
      />
      <TicketEditForm
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
        }}
      />
    </PageContainer>
  );
};

export default TicketManage;
