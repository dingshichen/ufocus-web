declare namespace API {
  class DbInstanceOption extends Base {
    dbInstanceName: string;
    dbProductCode: string;
  }

  class DbInstanceItem extends DbInstanceOption {
    linkAddress: string;
    createUser: UserOption;
    createTime: string;
  }

  class DbInstanceDetail extends DbInstanceItem {
    account: string;
    password: string;
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class DbGroupOption extends Base {
    groupName: string;
  }

  class DbGroupItem extends DbGroupOption {
    groupDesc?: string;
    dbInstances: DbInstanceOption[];
    createUser: UserOption;
    createTime: string;
  }

  class DbGroupDetail extends DbGroupItem {
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class DbTicketOption extends Base {
    ticketTitle: string;
  }

  class DbTicketItem extends DbTicketOption {
    dbGroup: DbGroupOption;
    auditState: string;
    performState: string;
    createUser: UserOption;
    createTime: string;
  }

  class DbTicketDetail extends DbTicketItem {
    textContent: string;
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }
}
