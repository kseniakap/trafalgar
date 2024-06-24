import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Menu, { MenuProps } from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';
import { FC, MouseEvent, useState } from 'react';

interface ICustomMenu {
  title: string;
  startIcon?: string;
  items: {
    title: string;
    link: string;
  }[];
}

const CustomMenu: FC<ICustomMenu> = ({ title, items, startIcon }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpened = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        id="menu-button"
        aria-controls={isOpened ? 'menu-custom' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpened ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        startIcon={startIcon ? <img src={startIcon}></img> : null}
        endIcon={<CustomIcon />}
      >
        <StyledTypography>{title}</StyledTypography>
      </StyledButton>
      <StyledMenu
        id="menu-custom"
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        anchorEl={anchorEl}
        open={isOpened}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem disableRipple key={item.title} component={Link} href={item.link}>
            <StyledTypography>{item.title}</StyledTypography>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default CustomMenu;

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  [theme.breakpoints.down('iPad')]: {
    fontSize: '0px',
  },
}));

const CustomIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: '30px !important',
}));

const StyledButton = styled(Button)(() => ({
  'textTransform': 'none',
  'color': 'black',
  '& .MuiButton-endIcon': {
    fontSize: '5rem',
  },
}));

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    'minWidth': 180,
    'color': 'black',

    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
