import React from "react";
import UserItem = API.UserItem;

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.UserItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: UserItem) => void;
  onSubmit: (values: UserItem) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.UserItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <div></div>
  );
};

export default UpdateForm;
