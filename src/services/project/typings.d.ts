declare namespace API {
  class ProjectOption extends Base {
    projectName: string;
  }

  class ProjectItem extends ProjectOption {
    responsibleUser: UserOption;
  }

  class ProjectDetail extends ProjectItem {
    createUser: UserOption;
    createTime: string;
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class ProjectQuery {

  }

  class ProjectSelectQuery extends SelectQuery {

  }
}
