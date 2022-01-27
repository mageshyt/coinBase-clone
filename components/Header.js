import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import TransferModal from "./Modal/TransferModal";
Modal.setAppElement("#__next");
const Header = ({ walletAddress, SanityToken, thirdWebToken }) => {
  // !route
  const router = useRouter();
  // ! custom style for our modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10,11,13,0.75)",
    },
  };

  return (
    <Wrapper className="flex items-center">
      <Title className="text-[2rem] font-semibold flex-1"> Assests</Title>
      <ButtonContainer className="center">
        <WalletConnected walletAddress={walletAddress} />
        <button className="px-3 h-10  text-lg rounded-lg mr-4 bg-blue-500 font-semibold text-black ">
          Buy / sell
        </button>
        <Link href={"/?transfer=1"}>
          <button className="btn-header ">Send / Receive</button>
        </Link>
      </ButtonContainer>
      <Modal
        //! if the query exit then open the modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal
          SanityToken={SanityToken}
          thirdWebToken={thirdWebToken}
          walletAddress={walletAddress}
        />
      </Modal>
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
