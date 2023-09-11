import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {addRule, dbInstance, deleteDbInstance, loadDbInstance} from "@/services/ant-design-pro/api";
import DbInstanceEditForm from "@/pages/DbManage/components/DbInstanceEditForm";

// TODO 接口未更换
const handleAdd = async (fields: API.DbInstanceItem) => {
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

const handleUpdate = async (fields: API.DbInstanceItem) => {
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

function getDbInstanceColumn(option: ProColumns<API.DbInstanceItem>): ProColumns<API.DbInstanceItem>[] {
  return [
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
      title: "创建人",
      dataIndex: "createUser.chnName",
      search: false
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      valueType: 'dateTime'
    },
    option
  ];
}

/**
 * 数据库管理页面
 */
const DbManage: React.FC = () => {
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.DbInstanceDetail>()
  const actionRef = useRef<ActionType>();
  const columns = getDbInstanceColumn(
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            const init = async () => {
              const detail = await loadDbInstance(record.id)
              setCurrentRow(detail)
            }
            init().then(() => {
              handleModalOpen(true);
            })
          }}
        >
          变更
        </a>,
        <a
          key="delete"
          onClick={() => {
            deleteDbInstance(record.id).then(() => {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            })
          }}
        >
          删除
        </a>,
      ],
    }
  )
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
              setCurrentRow(undefined);
              handleModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={dbInstance}
        columns={columns}/>
      <DbInstanceEditForm
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}/>
    </PageContainer>
  )
}

export default DbManage
