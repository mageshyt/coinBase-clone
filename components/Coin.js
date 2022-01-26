import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Coin = ({ coin }) => (
  <Wrapper className="center w-full">
    <div className="center w-full">
      <div style={{ flex: 3 }}>
        <NameCol className="flex  items-center">
          {/* render image icon */}
          <CoinIcon className="w-[1.8rem]  ">
            <Image src={coin.logo} alt={coin.name} />
          </CoinIcon>
          {/* coin name */}
          <div className="ml-1">
            <p className>{coin.name}</p>
            <p className="text-gray-500 text-sm">{coin.sign}</p>
          </div>
        </NameCol>
      </div>
      {/* price */}
      <div className="flex-[2]  ">
        <p className="text-md">
          {"$"}
          {coin.balanceUsd}
        </p>
        <p className="text-gray-500 text-sm">
          {coin.balanceCoin} {coin.sign}
        </p>
      </div>
      <div style={{ flex: 1 }}>
        {/* Coin price */}
        <p className="text-md">$ {coin.priceUsd}</p>
        {/* Coin allocation */}
        <p
          style={{ color: coin.change < 0 ? "#f0616d" : "#26ad75" }}
          className="text-gray-500 text-sm"
        >
          {coin.change > 0 && "+"}
          {coin.change}%
        </p>
      </div>
      <div className="flex-[1] mr-2">{coin.allocation}%</div>
      <div className="flex-[0]">
        <BsThreeDotsVertical />
      </div>
    </div>
  </Wrapper>
);

export default Coin;

const Wrapper = styled.div`
  & > div {
    padding: 1rem 2rem;
  }
`;
const NameCol = styled.div``;
const CoinIcon = styled.div``;
