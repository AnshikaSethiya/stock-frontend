import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Stock Price Tracker</h1>
    </HeaderContainer>
  );
};

export default Header;
