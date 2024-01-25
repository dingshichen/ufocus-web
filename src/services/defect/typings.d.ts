declare namespace API {
  class DefectOption extends Base {
    defectTitle: string;
  }

  class DefectItem extends DefectOption {
    project?: ProjectOption;
    responsibleUser: UserOption;
    createUser: UserOption;
    createTime: string;
  }

  class DefectDetail extends DefectItem {
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class DefectQuery {

  }
}
