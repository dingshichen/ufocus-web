import React, {useRef, useState} from "react";
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormText,
  ProTable
} from "@ant-design/pro-components";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {addRule, user} from "@/services/ant-design-pro/api";
import UserEditForm from "@/pages/UserManage/components/UserEditForm";

// TODO 接口未更换
const handleAdd = async (fields: API.UserItem) => {
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

const handleUpdate = async (fields: API.UserItem) => {
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

const UserManage: React.FC = () => {

  // 新建按钮的弹窗
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  // 变更按钮的弹窗
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  // 操作的行
  const [currentRow, setCurrentRow] = useState<API.UserItem>();

  // 刷新表格
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.UserItem>[] = [
    {
      title: "用户名",
      dataIndex: "chnName",
    },
    {
      title: "手机号码",
      dataIndex: "mobilePhoneNumber",
    },
    {
      title: "电子邮箱",
      dataIndex: "emailAddress",
      search: false
    },
    {
      title: "停用状态",
      dataIndex: "isLockFlag",
      valueEnum: {
        0: {
          text: "可用",
          status: "false"
        },
        1: {
          text: "停用",
          status: "true"
        }
      }
    },
    {
      title: "创建人",
      dataIndex: "createUser",
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
          停用
        </a>,
      ],
    },
  ]

  return (
    <PageContainer>
      <ProTable<API.UserItem, API.PageParams>
        headerTitle="用户列表"
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
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={user}
        columns={columns}/>
      <ModalForm
        title="新建用户"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        width="400px"
        onFinish={async (value) => {
          const success = await handleAdd(value as API.UserItem);
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
              message: "请输入用户名",
            },
          ]}
          width="md"
          name="chnName"
          label="用户名"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: "请输入手机号码",
            },
          ]}
          width="md"
          name="mobilePhoneNumber"
          label="手机号码"
        />
        <ProFormText
          width="md"
          name="emailAddress"
          label="电子邮箱"
        />
        <ProFormText.Password
          width="md"
          name="password"
          label="密码"
          readonly={true}
          initialValue={"123456"}
        />
      </ModalForm>
      <UserEditForm
        open={updateModalOpen}
        onOpenChange={handleUpdateModalOpen}
        onFinish={async (value) => {
          const success = await handleUpdate(value as API.UserItem);
          if (success) {
            handleUpdateModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </PageContainer>
  )
}

export default UserManage
