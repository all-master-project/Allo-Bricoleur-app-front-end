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

export function LoginForm() {
  const onChangeHandler = (e) => {
    // setregistration({ [e.target.name]: e.target.value });
  };

  const registration = {
    username: "",
    password: "",
  };
  const succesLogin = {
    usernameS: "user",
    passwordS: "user",
  };
  // const onSubmitHandler = (e) => {
  //   {
  //     console.log(registration);
  //     succesLogin.username == registration.username &&
  //       succesLogin.password == registration.password &&
  //       this.props.history.push("/");
  //   }
  // };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          name="username"
          placeholder="Email"
          onChange={(e) => {
            // onChangeHandler;
          }}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            // onChangeHandler;
          }}
        />
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={(e) => this.onSubmitHandler(e)}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#">sign up</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
export default LoginForm;
