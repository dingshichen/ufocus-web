import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {dbInstance} from "@/services/ant-design-pro/api";
import DbInstanceEditForm from "@/pages/db/components/DbInstanceEditForm";
import {loadDbInstanceMock} from "@/services/db/api";
import {TagDaMeng, TagGaussDB, TagMySQL} from "@/components/Tag/DbProduct";

function getDbInstanceColumn(option: ProColumns<API.DbInstanceItem>): ProColumns<API.DbInstanceItem>[] {
  return [
    {
      title: "实例名称",
      dataIndex: "dbInstanceName",
    },
    {
      title: "数据库产品",
      dataIndex: "dbProductCode",
      search: false,
      render: (_, entity) => {
        switch (entity.dbProductCode) {
          case "MySQL": return <TagMySQL />
          case "DAMENG": return <TagDaMeng />
          case "GAUSSDB": return <TagGaussDB />
        }
      }
    },
    {
      title: "链接地址",
      dataIndex: "linkAddress",
      search: false,
    },
    {
      title: "创建人",
      dataIndex: ["createUser", "chnName"],
      search: false
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      valueType: 'dateTime',
      search: false
    },
    option
  ];
}

/**
 * 数据库管理页面
 */
const DbManage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
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
              return await loadDbInstanceMock(record.id)
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
              setModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>
        ]}
        request={dbInstance}
        columns={columns}/>
      <DbInstanceEditForm
        open={isModalOpen}
        onOpenChange={setModalOpen}
        currentRow={currentRow}
        onFinish={async (value) => {
          console.log(value)
        }}/>
    </PageContainer>
  )
}

export default DbManage
