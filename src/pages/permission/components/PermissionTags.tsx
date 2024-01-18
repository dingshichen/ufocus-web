import React, {useState} from "react";
import {Tag} from "antd";
import {rolePermission} from "@/services/role/api";
import {useAsyncEffect} from "ahooks";

export type PermissionTagsProps = {
  roleId: string
}

/**
 * TODO 权限标签列表，这个样式不好看，还是要重新设计
 */
const PermissionTags: React.FC<PermissionTagsProps> = (props) => {
  const [permissions, setPermissions] = useState<API.PermissionOption[]>()
  useAsyncEffect(async () => {
    const permissions = await rolePermission(props.roleId)
    setPermissions(permissions)
  }, [])
  return (
    <div>
      { permissions?.map((e: API.PermissionOption) => {
        return (
          <>
            <Tag key={e.id}>{e.permissionName}</Tag>
            <br/>
          </>
        )
      }) }
    </div>
  )
}

export default PermissionTags;
