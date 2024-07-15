// src/components/Layout/Layout.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

interface LayoutProps {
  children: ReactNode;
}

const ContLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default ContLayout;
