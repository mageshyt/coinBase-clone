import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../static/coins.js";
import Coin from "./Coin.js";
import BalanceChart from "./BalanceChart.js";

const Portfolio = ({ WalletAddress, SanityToken, ThirdWebToken }) => {
  const [balance, setBalance] = useState(0);

  const tokenToUsd = {};

  for (const token of SanityToken) {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice);
  }

  useEffect(() => {
    const calculateBalance = async () => {
      const totalBalance = await Promise.all(
        ThirdWebToken.map(async (token) => {
          const balance = await token.balanceOf(WalletAddress);
          return Number(balance.displayValue) * tokenToUsd[token.address];
        })
      );
      console.log(totalBalance);
      setBalance(totalBalance.reduce((a, b) => a + b, 0));
    };
    return calculateBalance();
  }, [ThirdWebToken, SanityToken]);
  return (
    <Wrapper className="flex   flex-1 justify-center">
      <Content>
        <Balance amt={balance} />
        <BalanceChart />
        <PortfolioTable>
          {/* Table items */}
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          {/* divider */}
          <Divider />
          {/* Table */}
          <Table>
            <TableItem>
              <TableRow>
                <div className="flex-[3]">Name</div>
                <div className="flex-[2] ">Balance</div>
                <div className="flex-[1]">Price</div>
                <div className="flex-[1] "> Allocation</div>
                <div className="flex-[0] ">
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
          </Table>
          <Divider />
          <div>
            {coins.map((coin, index) => (
              <div key={index} className="">
                <Coin coin={coin} />
                <Divider />
              </div>
            ))}
          </div>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

const Balance = ({ amt }) => {
  //number to money
  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // format the number
    minimumFractionDigits: 0,
  }).format(amt);

  return (
    <div className="border-light px-[1rem] py-[2rem]">
      {/* Balance */}
      <div className="balance">
        <h2 className="text-sm text-gray-500  ">Portfolio Balance</h2>
        <p className="font-semibold text-lg"> {money} </p>
      </div>
    </div>
  );
};
export default Portfolio;

const Wrapper = styled.div``;
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;
const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`;
const TableItem = styled.div`
  padding: 1rem 2rem;
`;
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;
