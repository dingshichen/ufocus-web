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
    updateUser: UserOption;
    updateTime: string;
  }

  class TaskQuery {

  }
}
