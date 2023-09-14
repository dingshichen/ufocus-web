import React, {useRef, useState} from "react";
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable
} from "@ant-design/pro-components";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {addRule, user} from "@/services/ant-design-pro/api";
import UserEditForm from "@/pages/user/components/UserEditForm";
import {loadUserMock} from "@/services/user/api";

// TODO 接口未更换
const handleAdd = async (fields: API.UserDetail) => {
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
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.UserDetail>();
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
      valueType: 'dateTime',
      search: false
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            const init = async () => {
              return await loadUserMock(record.id)
            }
            init().then((user) => {
              setCurrentRow(user);
              setModalOpen(true);
            })
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
              setCurrentRow(undefined);
              setModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={user}
        columns={columns}/>
      <UserEditForm
        open={isModalOpen}
        onOpenChange={setModalOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          const success = await handleUpdate(value as API.UserItem);
          if (success) {
            setModalOpen(false);
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
