declare namespace API {
  class RequirementOption extends Base {
    requirementTitle: string;
  }

  class RequirementItem extends RequirementOption {
    project: ProjectOption;
    responsibleUser: UserOption;
    createUser: UserOption;
    createTime: string;
  }

  class RequirementDetail extends RequirementItem {
    updateUser: UserOption;
    updateTime: string;
  }

  class RequirementQuery {

  }

}
