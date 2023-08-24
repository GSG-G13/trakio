import {
  ListItemButton,
  ListItemIcon,
  styled,
  ListItemText,
} from '@mui/material';
import { ReactNode } from 'react';
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const StyledNavItem:any = styled(
  (props) => <ListItemButton disableGutters {...props} />,
)(({ theme }):any => ({
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.custom.white,
  borderRadius: theme.shape.borderRadius,
  fontFamily: 'Poppins',
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavItem = ({
  title, path, icon, onClick,
}: {title: string, path:string, icon?: ReactNode, onClick?: ()=> void}) => (
  <StyledNavItem
    component={NavLink}
    to={path}
    onClick={onClick}
    sx={{
      '&.active': {
        color: 'custom.white',
        backgroundColor: 'custom.selected',
        fontWeight: 'fontWeightBold',
      },
      '&:hover': { backgroundColor: 'custom.selected' },
    }}
  >
    {icon ? <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> : (
      <StyledNavItemIcon>
        <MdDashboard style={{ fontSize: 18, color: 'custom.white' }} />
      </StyledNavItemIcon>
    )}
    <ListItemText disableTypography primary={title} />
  </StyledNavItem>
);
