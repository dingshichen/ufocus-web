declare namespace API {

  class UserOption extends Base {
    chnName: string;
  }

  class UserItem extends UserOption {
    mobilePhoneNumber?: string;
    emailAddress: string;
    roles: RoleOption[];
    isLockFlag: boolean;
  }

  class UserDetail extends UserItem {
    createUser: UserOption;
    createTime: string;
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class UserQuery {
    chnName?: string;
    mobilePhoneNumber?: string;
    isLockFlag?: boolean;
    roleId?: string;
  }

  class UserInsert {
    chnName: string;
    mobilePhoneNumber?: string;
    emailAddress: string;
    roleIds: string[];
    pwd: string;
  }

  class UserUpdate extends Base {
    chnName: string;
    mobilePhoneNumber?: string;
    emailAddress: string;
    roleIds: string[];
  }
}
