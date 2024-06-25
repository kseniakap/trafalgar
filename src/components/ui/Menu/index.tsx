import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';
import { FC, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

interface ICustomMenu {
  title: string;
  startIcon?: string;
  items?: {
    title: string;
    link: string;
  }[];
  disabled?: boolean;
}

const CustomMenu: FC<ICustomMenu> = ({ title, items, startIcon, disabled = false }) => {
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
        startIcon={startIcon ? <img src={startIcon} alt="startIcon" /> : null}
        endIcon={<CustomIcon />}
        disabled={disabled}
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
        {items?.map((item) => (
          <MenuItem disableRipple key={item.title} component={Link} to={item.link} onClick={handleClose}>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>{item.title}</Typography>
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

const StyledButton = styled(Button)(({ disabled }) => ({
  'textTransform': 'none',
  'color': 'black',
  '& .MuiButton-startIcon': {
    opacity: `${disabled ? '25%' : '100%'}`,
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
