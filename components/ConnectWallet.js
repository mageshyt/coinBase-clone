import React from "react";
import styled from "styled-components";
const ConnectWallet = ({ connectWallet }) => {
  return (
    <WalletConnect className="center flex-col">
      {/* onclick it will connect to the metaMask wallet*/}
      <button className="btn-connect" onClick={() => connectWallet("injected")}>
        Connect Wallet
      </button>
      <Details className="text-gray-700 font-semibold text-[22px] text-center mt-4">
        You need to Chrome to be
        <br /> able to run this app
      </Details>
    </WalletConnect>
  );
};

export default ConnectWallet;
const WalletConnect = styled.div``;

const Details = styled.div``;
