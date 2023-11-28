import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";

export type UserDescriptionsProps = {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  currentRow: API.UserDetail;
}

/**
 * 浮层的用户详情
 */
const UserDescriptions: React.FC<UserDescriptionsProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      width="600px"
      modalProps={{ destroyOnClose: true, maskClosable: false }}
      submitter={false}
    >
      <ProDescriptions<API.UserDetail, API.Base>
        column={2}
        title="用户详情"
        dataSource={ props.currentRow }
      >
        <ProDescriptions.Item dataIndex="chnName" label="用户名"/>
        <ProDescriptions.Item dataIndex="mobilePhoneNumber" label="手机号码"/>
        <ProDescriptions.Item dataIndex="emailAddress" label="电子邮箱"/>
        <ProDescriptions.Item dataIndex="isLockFlag" label="停用状态"
          valueEnum={
            {
              false: {
                text: "可用",
                status: "success",
              },
              true: {
                text: "停用",
                status: "error",
              }
            }
        }/>
        <ProDescriptions.Item dataIndex={["createUser", "chnName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["latestUpdateUser", "chnName"]} label="最近修改人"/>
        <ProDescriptions.Item dataIndex="latestUpdateTime" label="最近更新时间" valueType="dateTime"/>
      </ProDescriptions>
    </ModalForm>
  )
}

export default UserDescriptions;
