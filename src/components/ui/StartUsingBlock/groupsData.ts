import { GroupsData } from './interfaces';

export const groups: GroupsData[] = [
  {
    title: 'Группа 1',
    subGroups: [
      { title: 'Группа 1.1' },
      { title: 'Группа 1.2' },
      {
        title: 'Группа 1.3',
        subGroups: [{ title: 'Группа 1.3.1' }, { title: 'Группа 1.3.2' }, { title: 'Группа 1.3.3' }],
      },
      {
        title: 'Группа 1.4',
        subGroups: [{ title: 'Группа 1.4.1' }, { title: 'Группа 1.4.2' }, { title: 'Группа 1.4.3' }],
      },
      {
        title: 'Группа 1.5',
        subGroups: [{ title: 'Группа 1.5.1' }, { title: 'Группа 1.5.2' }, { title: 'Группа 1.5.3' }],
      },
      { title: 'Группа 1.6' },
      { title: 'Группа 1.7' },
    ],
  },
  {
    title: 'Группа 2',
    subGroups: [
      { title: 'Группа 2.1', subGroups: [{ title: 'Группа 2.1.1' }, { title: 'Группа 2.1.2' }] },
      {
        title: 'Группа 2.2',
        subGroups: [{ title: 'Группа 2.2.1' }, { title: 'Группа 2.2.2' }],
      },
    ],
  },
  { title: 'Группа 3' },
];
