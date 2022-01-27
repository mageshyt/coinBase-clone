import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { FaCheck } from "react-icons/fa";
const CoinItem = ({
  token,
  setAction,
  selectedToken,
  setSelectedToken,
  thirdWebToken,
  sanityToken,
  sender,
}) => {
  // ! image url amd coin balance
  const [image, setImage] = useState(null);
  const [balance, setBalance] = useState(0);
  //    for balance
  useEffect(() => {
    const getBalance = async () => {
      let activeThirdWebToken = thirdWebToken.find(
        (webToken) => webToken.address === token.contractAddress
      );

      const balance = await activeThirdWebToken.balanceOf(sender);
      setBalance(balance.displayValue.split(".")[0]);
    };

    // ! get image url
    const url = ImageUrlBuilder(client).image(token.logo).url();
    setImage(url);
    return getBalance();
  }, [thirdWebToken, selectedToken]);
  return (
    <Wrapper
      onClick={() => setSelectedToken(token)}
      className={selectedToken.name === token.name ? "bg-[#141519]" : ""}
    >
      <Main className="flex items-center flex-[1]">
        {/* Crypto Icon */}
        <Icon className="grid place-items-center">
          <img src={image} alt={token.name} />;
        </Icon>
        <NameDetails>
          <Name className="cursor-pointer mb-1 text-lg">{token.name}</Name>
          <Symbol className="cursor-pointer text-sm text-gray-400 ">
            {token.symbol}
          </Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {!balance ? (
          <span className="text-gray-400"> Loading...</span>
        ) : (
          <span className="text-gray-400">{balance}</span>
        )}
      </Balance>

      <IsSelected className={!balance ? "hidden" : "block"}>
        {Boolean(selectedToken.contractAddress === token.contractAddress) && (
          <FaCheck />
        )}
      </IsSelected>
    </Wrapper>
  );
};

export default CoinItem;
const Icon = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
  border-radius: 50%;

  overflow: hidden;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  &:hover {
    cursor: pointer;
    background-color: #0e0f14;
  }
`;
const Main = styled.div``;
const NameDetails = styled.div`
  cursor: pointer;
`;

const Name = styled.div``;

const Symbol = styled.div``;

const Balance = styled.div`
  cursor: pointer;
`;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
