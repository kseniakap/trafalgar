export interface GroupsData {
  title: string;
  subGroups?: GroupsData[];
}

export interface FormData {
  name: string;
  surname: string;
  theme: string;
  question: string;
  groups: GroupsData[];
}
