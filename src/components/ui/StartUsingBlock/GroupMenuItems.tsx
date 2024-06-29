import { Checkbox, FormControlLabel, List, ListItem } from '@mui/material';
import { FC } from 'react';

import { groups } from '../../../const/groupsData';
import { GroupsData } from './interfaces';

const GroupMenuItems: FC = () => {
  const renderGroups = (groupsData: GroupsData[], level = 1) => {
    return groupsData.map(({ title, subGroups }) => (
      <div key={title}>
        <ListItem sx={{ padding: '0px', paddingLeft: `${level * 16}px` }}>
          <FormControlLabel label={title} control={<Checkbox />} />
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
        <FormControlLabel label="Выбрать все" control={<Checkbox />} />
      </ListItem>
      {renderGroups(groups)}
    </List>
  );
};

export default GroupMenuItems;
