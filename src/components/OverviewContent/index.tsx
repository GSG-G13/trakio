import {
  IntroductionBox,
  OverviewBox,
  IntroductionTitle,
  IntroductionDesc,
  ProjectRole,
  UsersBox,
  UserBox,
  UserAvatar,
  UserDetails,
  UserName,
  RoleChip,
} from './overview.styled';

const OverviewContent = () => (
  <OverviewBox>
    <IntroductionBox>
      <IntroductionTitle variant="h4">
        How we&apos;ll collabrate
      </IntroductionTitle>
      <IntroductionDesc>
        Welcome to your team
        check your tasks, members and it &apos;s status, don&apos;t waste your time! Go ahead.
      </IntroductionDesc>
    </IntroductionBox>
    <ProjectRole variant="h5">
      Project roles
    </ProjectRole>
    <UsersBox>
      <UserBox>
        <UserAvatar>
          N
        </UserAvatar>
        <UserDetails>
          <UserName>Nada Abu Zaid</UserName>
          <RoleChip
            label="Owner"
            variant="outlined"
            size="small"
          />
        </UserDetails>
      </UserBox>
    </UsersBox>
  </OverviewBox>
);

export default OverviewContent;
