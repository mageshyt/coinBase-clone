import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
const Receiver = ({ setAction, selectedToken, walletAddress }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  // ! to handel copy
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
  };
  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);
  return (
    <Wrapper className={"h-full"}>
      <Main className={"border-light h-full  rounded-lg flex flex-col"}>
        <QRContainer className="grid place-items-center flex-[1]">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt=""
          />
        </QRContainer>
        <Divider />
        {/* About Coin */}
        <Row>
          <CoinSelectList>
            <Icon className="h-8 w-8 grid place-items-center rounded-full overflow-hidden ">
              <img src={imageUrl} alt={selectedToken.name} />
            </Icon>
            <span className="ml-4 text-xl text-white ">
              {selectedToken.name}
            </span>
          </CoinSelectList>
        </Row>
        <Divider />
        {/* Crypto Adresses */}
        <Row>
          <div className="flex flex-col w-full">
            <span className="mb-2 text-white">
              {selectedToken.symbol} Address
            </span>
            {/* for address and copy it */}
            <div className="flex items-center justify-between w-full">
              <span className="text-gray-400 text-xs">{walletAddress}</span>
              <CopyButton onClick={copyAddress}>
                {!copied ? (
                  <BiCopy className="text-white text-lg" />
                ) : (
                  <FaCheck className="text-green-400 text-lg" />
                )}
              </CopyButton>
            </div>
          </div>
        </Row>
      </Main>
    </Wrapper>
  );
};

export default Receiver;

const Wrapper = styled.div``;
const Main = styled.div``;
const QRContainer = styled.div``;
const CopyButton = styled.button``;
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: #8a919e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CoinSelectList = styled.div`
  height: 100%;
  display: flex;
  flex: 1.3;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
