import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import SiderBar from "../components/SiderBar";
import Promos from "../components/Promos";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);
const Dashboard = ({ address }) => {
  // ! to get sanity token
  const [sanityToken, setSanityToken] = useState([]);
  // ! need to get Thirdweb Token
  const [thirdWebToken, setThirdWebToken] = useState([]);
  useEffect(() => {
    const getSanityTokenAndThirdWebToken = async () => {
      const coins = await fetch(
        "https://vjgvr3vu.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20symbol%2C%0A%20%20logo%2C%0A%20%20contractAddress%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;

      setSanityToken(sanityTokens);
      // ! sent the fetch request to third web
      setThirdWebToken(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };

    return getSanityTokenAndThirdWebToken();
  }, []);
  // console.log("sanity 👉 ", sanityToken);
  // console.log("thirdweb 👉 🥲 ", thirdWebToken);
  return (
    <Wrapper className="flex   overflow-hidden  h-screen w-screen bg-[#0a0b0d] text-white">
      {/* header need to be in top */}
      <SiderBar />
      <div className="flex-1">
        <Header
          WalletAddress={address}
          ThirdWebToken={thirdWebToken}
          SanityToken={sanityToken}
        />
        <Main
          WalletAddress={address}
          ThirdWebToken={thirdWebToken}
          SanityToken={sanityToken}
        />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;
