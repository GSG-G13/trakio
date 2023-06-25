import {
  Box, styled, Typography, Avatar, Chip,
} from '@mui/material';

export const OverviewBox = styled(Box)(() => ({
  marginTop: '-3.5rem',
}));

export const IntroductionBox = styled(Box)(() => ({
  marginBottom: '4rem',
}));

export const IntroductionTitle = styled(Typography)(({ theme: { palette: { primary } } }) => ({
  color: primary.main,
  lineHeight: 2,
}));

export const IntroductionDesc = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  lineHeight: 1.5,
  width: '40rem',
}));

export const ProjectRole = styled(Typography)(({ theme: { palette: { primary } } }) => ({
  color: primary.main,
  lineHeight: 2,
  paddingBottom: '1rem',
}));

export const UsersBox = styled(Box)(() => ({
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  width: '70%',
}));

export const UserBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '.5rem',
}));

export const UserAvatar = styled(Avatar)(({ theme: { palette: { custom } } }) => ({
  width: '3rem',
  height: '3rem',
  bgcolor: custom.purple,
  color: custom.divider,
}));

export const UserDetails = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '.3rem',
  alignItems: 'flex-start',
}));

export const UserName = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  lineHeight: 1,
  color: custom.white,
  fontSize: '.9rem',
}));

export const RoleChip = styled(Chip)(({ theme: { palette: { custom } } }) => ({
  padding: '0rem',
  borderColor: custom.white,
  color: custom.fontGray,
  fontSize: '.7rem',
  height: '1.31rem',
}));
