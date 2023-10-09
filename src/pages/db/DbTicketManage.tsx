import { loadDbTicketMock, dbTicket } from '@/services/db/api';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import qs from 'qs';
import React, { useRef } from 'react';
import { history } from 'umi';

function getDbTicketColumn(): ProColumns<API.DbTicketItem>[] {
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
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="detail"
          onClick={() => {
            history.push({
              pathname: '/db/ticket/detail',
              search: qs.stringify({
                id: record.id,
              }),
            });
        }}
          >
          详情
        </a>,
        <a
          key="update"
          onClick={() => {
            const init = async () => {
              return await loadDbTicketMock(record.id);
            };
            init().then(() => {
              history.push({
                pathname: '/db/ticket/edit',
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
    },
  ];
}

const DbTicketManage: React.FC = () => {
  const actionRef = useRef<ActionType>();
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
              history.push({
                pathname: '/db/ticket/edit',
              });
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={dbTicket}
        columns={getDbTicketColumn()}
      />
    </PageContainer>
  );
};

export default DbTicketManage;
