import React from "react";
import {ModalForm, ProDescriptions} from "@ant-design/pro-components";
import {Tag} from "antd";

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
        <ProDescriptions.Item dataIndex="userName" label="用户名" span={2} />
        <ProDescriptions.Item label="角色"
          render={(_, user) => {
            return (
              <div>
                {user.roles.map((role: API.RoleOption) => {
                  return (
                    <Tag key={role.id}>{role.roleName}</Tag>
                  )
                })}
              </div>
            )
          }}
        />
        <ProDescriptions.Item dataIndex="phoneNo" label="手机号码"/>
        <ProDescriptions.Item dataIndex="email" label="电子邮箱"/>
        <ProDescriptions.Item dataIndex="lockFlag" label="停用状态"
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
        <ProDescriptions.Item dataIndex={["createUser", "userName"]} label="创建人"/>
        <ProDescriptions.Item dataIndex="createTime" label="创建时间" valueType="dateTime"/>
        <ProDescriptions.Item dataIndex={["updateUser", "userName"]} label="最近更新人"/>
        <ProDescriptions.Item dataIndex="updateTime" label="更新时间" valueType="dateTime"/>
      </ProDescriptions>
    </ModalForm>
  )
}

export default UserDescriptions;
