declare namespace API {

  class UserOption extends Base {
    chnName: string;
  }

  class UserItem extends UserOption {
    mobilePhoneNumber: string;
    emailAddress?: string;
    isLockFlag: boolean;
    createUser: UserOption;
    createTime: string;
  }

  class UserDetail extends UserItem {
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }
}
