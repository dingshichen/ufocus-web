declare namespace API {

  class RoleOption extends Base {
    roleName: string;
  }

  class RoleItem extends RoleOption {
    createUser: UserOption;
    createTime: string;
  }

  class RoleDetail extends RoleItem {
    updateUser: UserOption;
    updateTime: string;
  }

  class RoleSelectQuery extends SelectQuery {

  }

  class RoleQuery {
    chnName?: string;
  }

  class RoleInsert {
    roleName: string;
    permissionIds: string[];
  }

  class RoleUpdate extends Base {
    roleName: string;
    permissionIds: string[];
  }
}
