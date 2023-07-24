import {
  styled,
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
  Container,
} from '@mui/material';
import { MdDashboard } from 'react-icons/md';

export const WrapCards = styled(Card)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    background: custom.background,
    display: 'grid',
    gap: '1.5rem 1rem',
    boxShadow: 'none',
    gridTemplateColumns: 'auto auto auto',
    ':last-child': {
      padding: '0',
    },
  }),
);

export const Wrapper2 = styled(Container)(
  ({
    theme: {
      palette: { custom, primary },
    },
  }) => ({
    background: custom.divider,
    borderRadius: 10,
    color: custom.white,
    display: 'flex',
    flexDirection: 'column',
    maxwidth: '20rem',
    width: '20rem',
    maxheight: '15rem',
    height: '13rem',
    borderLeft: `1px solid ${primary.main}`,
    padding: '1rem',
  }),
);

export const WrapperDes = styled(Typography)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.gray,
    marginTop: '10px',
    fontSize: '13.8px',
    overflow: 'hidden',
    WebkitLineClamp: '3',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    textAlign: 'left',
  }),
);

export const WrapperApp = styled(CardContent)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    background: custom.background,
    ':last-child': {
      padding: '0',
    },
  }),
);

export const WrapperH1 = styled(Typography)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.white,
    fontSize: '1.5em',
    marginBottom: '2rem',
  }),
);

export const WrappBtnDone = styled(Button)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.green,
  }),
);

export const WrapperBtnUD = styled(Button)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.orange,
  }),
);

export const WrapperIc = styled(MdDashboard)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.white,
    marginRight: '0.6vw',
  }),
);

export const WrappBtn = styled(CardActions)({
  display: 'flex',
  justifyContent: 'flex-end',
});
