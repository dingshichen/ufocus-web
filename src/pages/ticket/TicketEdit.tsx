import { selectDbGroupMock } from '@/services/db/api';
import { loadTicket } from '@/services/ticket/api';
import {PageContainer, ProForm, ProFormSelect, ProFormText, ProFormTextArea} from '@ant-design/pro-components';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const TicketEdit: React.FC = () => {
  const [searchParams] = useSearchParams();
  const idString = searchParams.get('id');
  return (
    <PageContainer>
      <ProForm request={idString === null ? undefined : () => loadTicket(Number(idString))}>
        <ProFormText
          width="md"
          name="ticketTitle"
          label="工单标题"
          rules={[
          {
            required: true,
            message: '请输入工单标题',
          },
          ]}
        />
        <ProFormSelect
          name={["dbGroup", "groupName"]}
          label="数据库分组"
          width="md"
          request={selectDbGroupMock}
          rules={[
          {
            required: true,
            message: '请选择数据库分组',
          },
          ]}
          fieldProps={{ fieldNames: { label: 'groupName', value: 'id' } }}
        />
        <ProFormTextArea
          name="textContent"
          label="文本内容"
          width="md"
          rules={[
          {
            required: true,
            message: '请输入文本内容',
          },
          ]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default TicketEdit;
