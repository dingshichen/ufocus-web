declare namespace API {
  class ProjectOption extends Base {
    projectName: string;
  }

  class ProjectItem extends ProjectOption {
    responsibleUser: UserOption;
  }

  class ProjectDetail extends ProjectItem {
    projectDesc?: string;
    createUser: UserOption;
    createTime: string;
    updateUser: UserOption;
    updateTime: string;
  }

  class ProjectQuery {

  }

  class ProjectSelectQuery extends SelectQuery {

  }
}
