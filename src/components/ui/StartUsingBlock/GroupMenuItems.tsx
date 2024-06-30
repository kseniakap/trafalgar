import { Checkbox, FormControlLabel, List, ListItem } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

import { groups } from '../../../const/groupsData';
import { GroupsData, GroupsDataWithChecked } from './interfaces';
import { SECONDARY_BG } from '~/assets/style/colors';

const GroupMenuItems: FC = () => {
  const addCheckedProperty = (groups: GroupsData[]): GroupsDataWithChecked[] => {
    return groups.map((group) => ({
      ...group,
      checked: false,
      subGroups: group.subGroups ? addCheckedProperty(group.subGroups) : undefined,
    }));
  };

  const groupsWithChecked: GroupsDataWithChecked[] = addCheckedProperty(groups);

  const [globalCheck, setGlobalCheck] = useState(false);
  const [groupChecked, setGroupChecked] = useState<GroupsDataWithChecked[]>(groupsWithChecked);

  const updateCheckedProperty = (groups: GroupsDataWithChecked[], checked: boolean): GroupsDataWithChecked[] => {
    return groups.map((group) => ({
      ...group,
      checked: checked,
      subGroups: group.subGroups ? updateCheckedProperty(group.subGroups, checked) : [],
    }));
  };

  const handleGlobalCheck = () => {
    setGlobalCheck(!globalCheck);
    setGroupChecked((prevGroups) => updateCheckedProperty(prevGroups, !globalCheck));
  };

  const updateSingleGroupCheck = (
    groups: GroupsDataWithChecked[],
    title: string,
    checked: boolean,
  ): GroupsDataWithChecked[] => {
    return groups.map((group) => {
      if (group.title === title) {
        return {
          ...group,
          checked: checked,
          subGroups: group.subGroups ? updateCheckedProperty(group.subGroups, checked) : [],
        };
      }
      return {
        ...group,
        subGroups: group.subGroups ? updateSingleGroupCheck(group.subGroups, title, checked) : undefined,
      };
    });
  };
  const handleCheck = (title: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setGroupChecked((prevGroups) => updateSingleGroupCheck(prevGroups, title, checked));
  };

  const renderGroups = (groupsData: GroupsDataWithChecked[], level = 1) => {
    return groupsData.map(({ title, subGroups, checked }) => (
      <div key={title}>
        <ListItem sx={{ padding: '0px', paddingLeft: `${level * 16}px` }}>
          <FormControlLabel
            label={title}
            control={<StyledCheckbox checked={checked} onChange={handleCheck(title)} />}
          />
        </ListItem>
        {subGroups && (
          <List disablePadding component="div">
            {renderGroups(subGroups, level + 1)}
          </List>
        )}
      </div>
    ));
  };

  return (
    <List sx={{ gap: '4px', padding: '16px' }}>
      <ListItem sx={{ padding: '0px' }}>
        <FormControlLabel
          label="Выбрать все"
          control={<StyledCheckbox checked={globalCheck} onChange={handleGlobalCheck} />}
        />
      </ListItem>
      {renderGroups(groupChecked)}
    </List>
  );
};

export default GroupMenuItems;

const StyledCheckbox = styled(Checkbox)`
  &&.Mui-checked {
    color: ${SECONDARY_BG};
  }
`;
