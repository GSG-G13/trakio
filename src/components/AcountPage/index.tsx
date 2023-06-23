import { Box } from '@mui/material';
import {
  WrapBox,
  WrapTypo,
  WrapContent,
  WrapInput,
  Boxes,
  WrapDelete,
  WrapBtn,
} from './acount.styled';

const AccountPage = () => (
  <WrapBox>
    <WrapTypo>
      Edit Profile Information
      <Boxes>
        <Box sx={{ marginRight: '2vw' }}>
          <WrapContent>
            Name
            <br />
            <WrapInput />
          </WrapContent>
          <WrapContent>
            Email
            <br />
            <WrapInput />
          </WrapContent>
        </Box>
        <Box>
          <WrapContent>
            Old Password
            <br />
            <WrapInput />
          </WrapContent>
          <WrapContent>
            New Password
            <br />
            <WrapInput />
          </WrapContent>
        </Box>
      </Boxes>
    </WrapTypo>
    <WrapBox>
      <WrapDelete>
        Delete Your Account
        <br />
        <WrapBtn>
          Delete Account
        </WrapBtn>
      </WrapDelete>
    </WrapBox>
  </WrapBox>
);
export default AccountPage;
