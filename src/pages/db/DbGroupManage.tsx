import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {dbGroup, loadDbGroupMock} from "@/services/db/api";
import {Button, Tag} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import DbGroupEditForm from "@/pages/db/components/DbGroupEditForm";
import {TagDaMeng, TagGaussDB, TagMySQL} from "@/components/Tag/DbProduct";

function getDbGroupColumn(option: ProColumns<API.DbGroupItem>): ProColumns<API.DbGroupItem>[] {
  return [
    {
      title: "分组名称",
      dataIndex: "groupName",
    },
    {
      title: "数据库实例",
      dataIndex: "dbInstances",
      render: (_, entity) => {
        return entity.dbInstances.map(e => {
          switch (e.dbProductCode) {
            case "MYSQL":
              return <TagMySQL key={e.id} text={e.dbInstanceName} />
            case "DAMENG":
              return <TagDaMeng key={e.id} text={e.dbInstanceName} />
            case "GAUSSDB":
              return <TagGaussDB key={e.id} text={e.dbInstanceName} />
            default:
              return <Tag>{e.dbInstanceName}</Tag>
          }
        })
      },
    },
    {
      title: "描述",
      dataIndex: "groupDesc",
      search: false
    },
    option
  ]
}

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
      <DbGroupEditForm
        open={isModalOpen}
        onOpenChange={setModalOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log(value)
        }}/>
    </PageContainer>
  )
};

export default DbGroupManage;
