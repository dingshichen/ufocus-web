declare namespace API {

  class RoleOption extends Base {
    chnName: string;
  }

  class RoleItem extends RoleOption {
    createUser: UserOption;
    createTime: string;
  }

  class RoleDetail extends RoleItem {
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }
}
