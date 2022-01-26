import React from "react";
import styled from "styled-components";
const Header = ({ WalletAddress,SanityToken,ThirdWebToken }) => {
  return (
    <Wrapper className="flex items-center">
      <Title className="text-[2rem] font-semibold flex-1"> Assests</Title>
      <ButtonContainer className="flex">
        <WalletConnected walletAddress={WalletAddress } />
        <button className="px-4 py-2 text-lg rounded-lg mr-4 bg-blue-500 font-semibold text-black ">
          Buy / sell
        </button>
        <button className="btn-header ">Send / Receive</button>
      </ButtonContainer>
    </Wrapper>
  );
};

function WalletConnected(walletAddress) {
  const address = walletAddress.walletAddress;
  return (
    <div className="border-[1px] border-[#282b2f] mr-2 px-4 py-2 rounded-full ">
      <h2 className="font-bold text-green-300">Wallet Connected</h2>
      <h3>
        {address.slice(0, 7)}...{address.slice(35)}
      </h3>
    </div>
  );
}
export default Header;

// ! styled Components
const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;

  /* todo  */
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div``;

const ButtonContainer = styled.div``;
