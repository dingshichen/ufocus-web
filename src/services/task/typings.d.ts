declare namespace API {
  class TaskOption extends Base {
    taskTitle: string;
  }

  class TaskItem extends TaskOption {
    project: ProjectOption;
    requirement?: RequirementOption;
    responsibleUser: UserOption;
    createUser: UserOption;
    createTime: string;
  }

  class TaskDetail extends TaskItem {
    latestUpdateUser: UserOption;
    latestUpdateTime: string;
  }

  class TaskQuery {

  }
}
