import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material';

export default function ProjectsCard() {
  const Wrapper = styled(Card)(({ theme }) => ({
    background: theme.palette.custom.black,
    height: '100%',
    display: 'grid',
    gap: '52px',
    gridTemplateColumns: 'auto auto auto',
    padding: '10px',
  }));
  const Wrapper2 = styled(CardContent)(({ theme }) => ({
    background: theme.palette.custom.background,
    borderRadius: 10,
    color: theme.palette.custom.white,
    maxWidth: 289,
  }));
  const WrapperPN = styled(Typography)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.custom.black,
    width: '100px',
    borderRadius: 4,
    marginTop: '-40px',
    marginBottom: '15px',
    textAlign: 'center',
    marginRight: '20px',
  }));
  const WrapperDes = styled(Typography)(({ theme }) => ({
    color: theme.palette.custom.gray,
    fontSize: '12px',
  }));
  const WrapperApp = styled(CardContent)(({ theme }) => ({
    background: theme.palette.custom.black,
    width: '995px',
  }));
  const WrapperH1 = styled(Typography)(({ theme }) => ({
    color: theme.palette.custom.white,
    fontSize: '27px',
    marginBottom: '10px',
  }));
  const WrapperUserName = styled(Typography)(({ theme }) => ({
    color: theme.palette.custom.white,
    display: 'flex',
    justifyContent: 'flex-end',
  }));
  const WrapperUNDiv = styled(Typography)(({ theme }) => ({
    background: theme.palette.custom.white,
    color: theme.palette.custom.black,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    marginRight: '5px',
  }));
  const WrappBtnDone = styled(Button)(({ theme }) => ({
    color: theme.palette.custom.green,
  }));
  const WrapperBtnUD = styled(Button)(({ theme }) => ({
    color: theme.palette.custom.orange,
  }));
  const WrapperIc = styled(DashboardIcon)(({ theme }) => ({
    color: theme.palette.custom.white,
    marginRight: '10px',
  }));
  return (
    <WrapperApp>
      <WrapperUserName>
        <WrapperUNDiv>MS</WrapperUNDiv>
        <h2> Mohammed Sbeata</h2>
      </WrapperUserName>
      <WrapperH1>
        <WrapperIc />
        My Projects
      </WrapperH1>
      <Wrapper>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
        <Wrapper2>
          <CardContent>
            <WrapperPN>Project Name</WrapperPN>
            <Typography gutterBottom variant="h5" component="div">
              Title Project
            </Typography>
            <WrapperDes variant="body2" color="text.secondary">
              Description for projects and explanation about it
            </WrapperDes>
          </CardContent>
          <CardActions>
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </CardActions>
        </Wrapper2>
      </Wrapper>
    </WrapperApp>
  );
}
