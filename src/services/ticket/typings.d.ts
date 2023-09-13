declare namespace API {
  class TicketOption extends Base {
    ticketTitle: string;
  }

  class TicketItem extends TicketOption {
    dbGroup: DbGroupOption;
    auditState: string;
    performState: string;
    createUser: UserOption;
    createTime: string;
  }

  class TicketDetail extends TicketItem {
    textContent: string;
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }
}
