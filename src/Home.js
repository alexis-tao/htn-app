import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin-bottom: 10px;
`;

const SmallText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: left;
  flex-direction: column;
  text-align: left;
  padding: 20px;
`;

const ProfilePicWrapper = styled.div`
  width: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: 100px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      checked_in: false
    };
  }

  componentDidMount() {
    axios
      .get('https://hackthenorth.netlify.com/api/fe-challenge-attendee')
      .then(res => res.data)
      .then(data =>
        this.setState({
          profile: data,
          checked_in: data ? data.checked_in : false
        })
      )
      .catch(err => console.log(err));
  }

  handleCheckIn = () => {
    // make post request to update check-in status in database
    // for now we store check in status in state to change the display
    // but since that's not required, we will just perform a console.log
    this.setState({ checked_in: true });
  };

  handleAttendWorkshops = () => {
    // we could open a new modal that allows user to pick available workshops
    // send post request to update db
    console.log('handle attend workshops');
  };

  getProfile = () => {
    const { profile, checked_in } = this.state;
    const rawDate =
      profile && profile.type === 'volunteer'
        ? new Date(profile.next_shift)
        : '';

    if (profile === null) {
      return <Title>No profile found</Title>;
    }
    // type AttendeeType = "hacker" | "organizer" | "volunteer | "sponsor";
    else {
      return (
        <AppWrapper>
          <Title>Welcome back, {profile.name}!</Title>
          <ProfileWrapper>
            <ProfilePicWrapper>
              <ProfilePic src={profile.profile_pic} />
            </ProfilePicWrapper>
            <ProfileInfo>
              <SmallText>Name</SmallText>
              <Text>{profile.name}</Text>
              <SmallText>Id</SmallText>
              <Text>{profile.id}</Text>
              <SmallText>Role</SmallText>
              <Text>{profile.type}</Text>
              <SmallText>Bio</SmallText>
              <Text>{profile.bio}</Text>
              <SmallText>Checked In</SmallText>
              <Text>{checked_in ? 'Yes' : 'No'}</Text>
              {!checked_in && (
                <StyledButton onClick={this.handleCheckIn}>
                  Check In
                </StyledButton>
              )}
              {profile.type === 'hacker' && (
                <>
                  <SmallText>Number of Workshops Attended</SmallText>
                  <Text>{profile.num_workshops_attended}</Text>
                  <StyledButton onClick={this.handleAttendWorkshops}>
                    Attend More
                  </StyledButton>
                </>
              )}
              {profile.type === 'sponsor' && (
                <>
                  <SmallText>Sponsor Company</SmallText>
                  <Link href={profile.sponsor_company_link} target="_blank">
                    {profile.sponsor_company}
                  </Link>
                </>
              )}
              {profile.type === 'volunteer' && (
                <>
                  <SmallText>Next Shift</SmallText>
                  <Text>{rawDate.toLocaleString()}</Text>
                </>
              )}
              {profile.type === 'organizer' && (
                <>
                  <SmallText>Phone Number</SmallText>
                  <Link href={`tel:+${profile.phone_number}`}>
                    {profile.phone_number}
                  </Link>
                </>
              )}
            </ProfileInfo>
          </ProfileWrapper>
        </AppWrapper>
      );
    }
  };

  render() {
    return <AppWrapper>{this.getProfile()}</AppWrapper>;
  }
}
