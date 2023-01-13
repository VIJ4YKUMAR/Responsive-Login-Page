import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../src/images/login-image.png';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
//import url('https://fonts.googleapis.com/css?family=Anton');

library.add(faEye, faEyeSlash)
// const Eye = <FontAwesomeIcon icon={faEye} />;
// const NoEye = <FontAwesomeIcon icon={faEyeSlash} />;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`;

const Image = styled.img`
  width: 543.22px;
  height: 633.6px;
  position: absolute;
  left: 180px;
  top: 213px;
  @media (max-width: 1024px) {
    width: 80%;
    height: 60%;
    left: 10%;
    top: 20%;
  }
`;

const RightContainer = styled.div`
  width: 1077px;
  height: 961px;
  margin-top: 130px;
  margin: 20px;
  top: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0px 0px 15px #bab6b6;
  @media (max-width: 1024px) {
    //width: 1047px;
    //height: 961px;
    width: 577px;
    height: 361px;
    left: 833px;
    top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
  max-width: 450px;
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 20px;
  }
`;

const H2 = styled.h2`
  position: absolute;
  top: 200px;
  right: 500px;
  font-size: 48px;

  @media (max-width: 480px) {
    top: 30px;
    right: 110px;
    font-size: 20px;
  }
`;

const Uname = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 824px;
  height: 56px;
  left: 944px;
  top: 372px;
  text-indent: 10px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  color: #737B86;

  @media (max-width: 480px) {
    width: 54%;
    height: 30px;
    left: 155px;
    top: 120px;
    font-size: 14px;
  }
`;

const Pwd = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 824px;
  height: 56px;
  left: 944px;
  top: 496px;
  text-indent: 10px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  color: #737B86;

  @media (max-width: 480px) {
    width: 54%;
    height: 30px;
    left: 155px;
    top: 185px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  position: absolute;
  font-size: 20px;
  background-color: #1575A7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 583px;
  height:46px;
  left: 1087px;
  top: 675px;

  @media (max-width: 480px) {
    width: 40%;
    height: 30px;
    left: 183px;
    top: 330px;
    font-size: 14px;
  }
`;

const Userlabel = styled.label`
  position: absolute;
  top: 345px;
  left: 944px;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 400px) {
    top: 100px;
    left: 160px;
    font-size: 14px;
  }
`;

const Pwdlabel = styled.label`
  position: absolute;
  top: 470px;
  left: 944px;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 480px) {
    top: 165px;
    left: 160px;
    font-size: 14px;
  }
`;

const Chagepwd = styled.a`
  position: absolute;
  color: #F78719;
  top: 565px;
  right: 155px;

  @media (max-width: 480px) {
    top: 225px;
    right: 75px;
    font-size: 14px;
  }
`;

const Register = styled.a`
  position: absolute;
  color: #F78719;
  font-weight: bold;
  top: 800px;
  right: 490px;

  @media (max-width: 480px) {
    top: 400px;
    right: 90px;
    font-size: 14px;
  }
`;

const RememberMe = styled.input`
  position: absolute;
  top: 565px;
  left: 945px;

  @media (max-width: 480px) {
    top: 250px;
    left: 155px;
  }
`;

const RememberLabel = styled.label`
  position: absolute;
  top: 565px;
  left: 975px;
  color: grey;

  @media (max-width: 480px) {
    top: 253px;
    left: 180px;
    font-size: 14px;
  }
`;

const Tac = styled.input`
  position: absolute;
  top: 595px;
  left: 945px;

  @media (max-width: 480px) {
    top: 280px;
    left: 155px;
  }
`;

const TacLabel = styled.label`
  position: absolute;
  top: 595px;
  left: 975px;
  color: grey;

  @media (max-width: 480px) {
    top: 283px;
    left: 180px;
    font-size: 14px;
  }
`;

const TacLink = styled.a`
  position: absolute;
  color: #F78719;
  top: 595px;
  left: 1045px;

  @media (max-width: 480px) {
    top: 283px;
    left: 240px;
    font-size: 14px;
  }
`;

const StyledToggleButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 505px;
  right: 190px;
  font-size: 20px;
  padding: 5px;
  border: none;
  //color: black;
  background: transparent;

  @media (max-width: 480px) {
    top: 180px;
    right: 50px;
  }
  &:hover{
    cursor: pointer;
  }
`;

const EyeIcon = styled.i`
  /* CSS styles for the toggle button */
  position: absolute;
  background: lightgray;
  dsiplay: block;
  width: 20px;
  height: 20px;
`;



const LoginPage = () => {
  const [loginid, setLoginid] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = e => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <Container>
      <LeftContainer>
        <Image src={image} alt="image" />
      </LeftContainer>
      <RightContainer>
        <LoginForm onSubmit={handleSubmit}>
          <H2>Login</H2>
          <Userlabel>
            Login ID
          </Userlabel>
          <Uname
            type="text"
            value={loginid}
            placeholder="Enter Login ID"
            onChange={e => setLoginid(e.target.value)}
          />
          <br />
          <Pwdlabel>
            Password
          </Pwdlabel>
          <Pwd
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
          />
          <StyledToggleButton type="button" onClick={togglePasswordVisibility}>
            <EyeIcon icon={`fa fa-${showPassword ? faEye : faEyeSlash}`} />
          </StyledToggleButton>
          <br />
          <RememberMe type="checkbox"></RememberMe>
          <RememberLabel>Remember Me</RememberLabel>
          <Chagepwd target="_blank">Change Password</Chagepwd>
          <Tac type="checkbox"></Tac>
          <TacLabel>Agree To</TacLabel>
          <TacLink href='' target="_blank" >Terms & Conditions</TacLink>
          <Button type="submit">Login</Button>
          <Register href='' target="_blank">Register Here</Register>
        </LoginForm>
      </RightContainer>
    </Container>
  );
};

export default LoginPage;