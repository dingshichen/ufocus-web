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
    updateUser: UserOption;
    updateTime: string;
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
    updateUser: UserOption;
    updateTime: string;
  }

  class DbTicketOption extends Base {
    ticketTitle: string;
    performState: string;
  }

  class DbTicketItem extends DbTicketOption {
    dbGroup: DbGroupOption;
    dbTicketType: string;
    beforeDbTicket?: DbTicketOption;
    auditState: string;
    createUser: UserOption;
    createTime: string;
  }

  class DbTicketDetail extends DbTicketItem {
    textContent: string;
    updateUser: UserOption;
    updateTime: string;
  }

  class DbTicketWithScriptDetail extends DbTicketDetail {
    instanceScripts: DbTicketInstanceScriptItem[]
  }

  class DbTicketInstanceScriptItem {
    dbInstance: DbInstanceOption;
    scripts: DbTicketScriptItem[];
  }

  class DbTicketScriptItem extends Base {
    exceptionInformationContent?: string;
    performState: string;
    textContent: string;
  }
}
