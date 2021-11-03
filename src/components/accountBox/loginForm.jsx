import axios from "axios";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function LoginForm(props) {
  // const { switchToSignup } = useContext(AccountContext);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const LoginForm = () => {
    axios
      .post(
        "http://localhost:8181/auth/login",
        JSON.stringify({
          username: userName,
          password: password,
        })
      )
      .then((secrityData) => {
        console.log(secrityData);
      });
  };
  const handleChangeUserName = (e) => {
    setUserName({ userName: e.target.value });
  };

  const handleChangePassword = (e) => {
    setPassword({ password: e.target.value });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Email" onChange={(e) => handleChangeUserName(e)} />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => handleChangePassword(e)}
        />
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={() => LoginForm()}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        {/* <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink> */}
      </MutedLink>
    </BoxContainer>
  );
}

export default LoginForm;
