import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";
const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  thirdWebToken,
  sanityToken,
  walletAddress,
}) => {
  return (
    <Wrapper className="w-full text-xl mb-4 ">
      <Title className="text-blue-500 text-center">Select Assest</Title>
      <CoinList className="flex flex-col">
        {sanityToken.map((token, index) => (
          <CoinItem
            key={index}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdWebToken={thirdWebToken}
            sanityToken={sanityToken}
            token={token}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;
const Wrapper = styled.div``;
const Title = styled.div``;
const CoinList = styled.div``;
