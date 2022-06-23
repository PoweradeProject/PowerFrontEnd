import React from "react";
import styled from "styled-components";

const ContactPage = styled.div`
  width: 100%;
  height: calc(100vh - 91px);
  position: relative;
  background-color: black;
`;

const ContactTitle = styled.p`
  color: white;
  font-size: 55px;
  margin: 0;
  padding: 0;
`;

const Contact = () => {
  return (
    <ContactPage>
      <ContactTitle>CONTACT</ContactTitle>
    </ContactPage>
  );
};
export default Contact;
