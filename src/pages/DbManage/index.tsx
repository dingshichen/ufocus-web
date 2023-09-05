import React, {useRef, useState} from "react";
import {ActionType, ModalForm, PageContainer, ProColumns, ProFormText, ProTable} from "@ant-design/pro-components";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {addRule, dbInstance, user} from "@/services/ant-design-pro/api";

// TODO 接口未更换
const handleAdd = async (fields: API.DbInstanceItem) => {
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

const handleUpdate = async (fields: API.DbInstanceItem) => {
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

const DbManage: React.FC = () => {

  // 新建按钮的弹窗
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  // 变更按钮的弹窗
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  // 操作的行
  const [currentRow, setCurrentRow] = useState<API.DbInstanceItem>();

  // 刷新表格
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.DbInstanceItem>[] = [
    {
      title: "数据库实例名称",
      dataIndex: "dbInstanceName",
    },
    {
      title: "数据库产品代码",
      dataIndex: "dbProductCode",
      search: false,
    },
    {
      title: "数据库产品版本号",
      dataIndex: "dbProductVersionNumber",
      search: false,
    },
    {
      title: "链接地址",
      dataIndex: "linkAddress",
      search: false,
    },
    {
      title: "账号",
      dataIndex: "account",
      search: false
    },
    {
      title: "创建人",
      dataIndex: "createUser.chnName",
      search: false
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      valueType: 'dateTime'
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            setCurrentRow(record);
            handleUpdateModalOpen(true);
          }}
        >
          变更
        </a>,
        <a key="lock" href="https://procomponents.ant.design/">
          删除
        </a>,
      ],
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.DbInstanceItem, API.PageParams>
        headerTitle="数据库实例列表"
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>
        ]}
        request={dbInstance}
        columns={columns}/>
      <ModalForm
        title="新建数据库实例"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        width="400px"
        onFinish={async (value) => {
          const success = await handleAdd(value as API.DbInstanceItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}>
        <ProFormText
          rules={[
            {
              required: true,
              message: "请输入数据库实例名称",
            },
          ]}
          width="md"
          name="dbInstanceName"
          label="数据库实例名称"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "请选择数据库产品",
            },
          ]}
          width="md"
          name="dbProductCode"
          label="数据库产品"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "请选择数据库产品版本号",
            },
          ]}
          width="md"
          name="dbProductVersionNumber"
          label="数据库产品版本号"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "请输入链接地址",
            },
          ]}
          width="md"
          name="linkAddress"
          label="链接地址"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "请输入账号",
            },
          ]}
          width="md"
          name="account"
          label="账号"
        />
        <ProFormText.Password
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
          width="md"
          name="password"
          label="密码"
        />
      </ModalForm>
    </PageContainer>
  )
}

export default DbManage
