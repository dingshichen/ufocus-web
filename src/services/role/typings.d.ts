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

  class RoleSelectQuery extends SelectQuery {

  }

  class RoleQuery {
    chnName?: string;
  }

  class RoleInsert {
    chnName: string;
  }

  class RoleUpdate extends Base {
    chnName: string;
  }
}
