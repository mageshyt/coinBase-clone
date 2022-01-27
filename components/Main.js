import React from "react";
import Portfolio from "./portfolio";
import styled from "styled-components";
import Promos from "./Promos";
const Main = ({ WalletAddress, SanityToken, ThirdWebToken }) => {
  return (
    <Wrapper className="overflow-hidden  overflow-y-scroll">
      <Portfolio
        WalletAddress={WalletAddress}
        SanityToken={SanityToken}
        ThirdWebToken={ThirdWebToken}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);

  & div {
    border-radius: 0.4rem;
  }
`;
