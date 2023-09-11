import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {dbGroup, loadDbGroupMock} from "@/services/db/api";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const DbGroupManage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<API.DbGroupItem>()
  const actionRef = useRef<ActionType>();
  const columns = getDbGroupColumn({
    title: "操作",
    dataIndex: "option",
    valueType: "option",
    render: (_, record) => [
      <a
        key="update"
        onClick={() => {
          const init = async () => {
            return await loadDbGroupMock(record.id)
          }
          init().then((value) => {
            setCurrentRow(value)
            setModalOpen(true);
          })
        }}
      >
        变更
      </a>,
    ],
  })
  return (
    <PageContainer>
      <ProTable<API.DbGroupItem, API.PageParams>
        headerTitle="数据库实例分组列表"
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
        request={dbGroup}
        columns={columns}/>
    </PageContainer>
  )
};

function getDbGroupColumn(option: ProColumns<API.DbGroupItem>): ProColumns<API.DbGroupItem>[] {
  return [
    {
      title: "分组名称",
      dataIndex: "groupName",
    },
    {
      title: "数据库实例",
      dataIndex: "dbInstances"
    },
    {
      title: "描述",
      dataIndex: "groupDesc",
      search: false
    },
    option
  ]
}

export default DbGroupManage;
