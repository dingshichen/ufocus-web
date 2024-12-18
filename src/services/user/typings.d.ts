declare namespace API {

  class UserOption extends Base {
    userName: string;
  }

  class UserItem extends UserOption {
    phoneNo?: string;
    email: string;
    roles: RoleOption[];
    lockFlag: boolean;
  }

  class UserDetail extends UserItem {
    createUser: UserOption;
    createTime: string;
    updateUser: UserOption;
    updateTime: string;
  }

  class UserQuery {
    userName?: string;
    phoneNo?: string;
    lockFlag?: boolean;
    roleId?: string;
  }

  class UserSelectQuery extends SelectQuery{

  }

  class UserInsert {
    userName: string;
    phoneNo?: string;
    email: string;
    roleIds: string[];
    pwd: string;
  }

  class UserUpdate extends Base {
    userName: string;
    phoneNo?: string;
    email: string;
    roleIds: string[];
  }
}
