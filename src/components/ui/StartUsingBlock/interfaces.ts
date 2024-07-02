export interface GroupsData {
  title: string;
  subGroups?: GroupsData[];
}

export interface GroupsDataWithChecked extends GroupsData {
  checked: boolean;
  subGroups?: GroupsDataWithChecked[];
}

export interface FormData {
  name: string;
  surname: string;
  theme: string;
  question: string;
  groups: GroupsData[];
  isAgreedToPolicy: boolean;
}
