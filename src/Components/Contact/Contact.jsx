import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height 500px;
  margin: 2% 0 2% 0;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 24px;
`;
const StyledInput = styled.input`
  font-size: 24px;
  padding: 7px;
  border-radius: 10px;
  border: solid 2px black;
  outline: none;
`;
const StyledButton = styled.button`
font-size: 24px;
padding: 7px;
border-radius: 10px;
background-color: #fdb515;
width: 240px;
margin: 30px;
outline-style:none;
border: none;
cursor: pointer;
:active {
  background-color: darkorange;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
`;

const StyledButtonBackHome = styled.button`
font-size: 24px;
padding: 7px;
border-radius: 10px;
background-color: #fdb515;
color: black;
width: 240px;
margin: 2% 0 2% 10%;
outline-style:none;
border: none;
cursor: pointer;
:active {
  background-color: darkorange;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
`;

const StyledTextArea = styled.textarea`
  vertical-align: top;
  height: 15em;
  width: 35em;
  margin: 5% 0 5% 0;
  outline: none;
`;

function Contact() {
  const [userData, setUserData] = useState({
    nom: "",
    email: "",
    userMessage: "",
  });
  const [message, setMessage] = useState();

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}contact/sendmessage`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
      });
  };

  return (
    <>
      <Link to="/">
        <StyledButtonBackHome type="button">
          Retour à l&apos;acceuil
        </StyledButtonBackHome>
      </Link>
      <StyledForm action="submit" onSubmit={handleSubmitMessage}>
        <StyledLabel htmlFor="name">Nom :</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="user_name"
          value={userData.nom}
          onChange={(e) =>
            setUserData({
              ...userData,
              nom: e.target.value,
            })
          }
          required
        />
        <StyledLabel htmlFor="mail">e-mail :</StyledLabel>
        <StyledInput
          type="email"
          id="mail"
          name="user_mail"
          value={userData.email}
          onChange={(e) =>
            setUserData({
              ...userData,
              email: e.target.value,
            })
          }
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
          required
        />
        <StyledLabel htmlFor="msg">Message :</StyledLabel>
        <div>
          <StyledTextArea
            id="msg"
            name="user_message"
            value={userData.userMessage}
            onChange={(e) =>
              setUserData({
                ...userData,
                userMessage: e.target.value,
              })
            }
            required
          >
            {" "}
          </StyledTextArea>
        </div>
        {!message ? null : <div className="message">{message}</div>}
        <StyledButton type="submit">Envoyer le message</StyledButton>
      </StyledForm>
    </>
  );
}

export default Contact;
