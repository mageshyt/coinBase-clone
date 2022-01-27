import Image from "next/image";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import styled from "styled-components";

const Transfer = () => {
  const [amount, setAmount] = useState();

  //   ! Recipient addresses
  const [recipient, setRecipient] = useState("");
  console.log("🧾 -->", recipient);
  return (
    <div className="center flex-col w-full h-full flex-1 ">
      {/* top session */}
      <div className="top__session  flex  flex-1 flex-col">
        <div className="center flex-col">
          <div>
            {/* valuse should not go less then 0 */}
            <FlexInput
              placeholder="0"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amount >= 0 ? amount : 0}
              className="font-medium border-none mb-2 mr-1  bg-transparent outline-none text-right max-w-[45%] text-gray-600 text-[60px]"
            />
            <span className="text-[55px] font-normal text-blue-500">ETH</span>{" "}
          </div>
          <span
            className={
              amount <= 0
                ? "text-sm pointer-events-none text-gray-600 "
                : "hidden"
            }
          >
            Amount is a required field
          </span>
        </div>
      </div>

      {/* Bottom session */}
      <TransferForm className="border-light w-full rounded-lg">
        {/* Row -1 */}
        <Row className="row ">
          <FieldName className="text-md flex-[0.5] pl-8 text-gray-500">
            To
          </FieldName>

          <Icon>
            <FaWallet className="text-gray-500" />
          </Icon>
          <Recipient
            className="text-sm flex-1 mr-1  text-gray-500 outline-none border-none bg-transparent"
            placeholder="Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Row>
        <Divider className="border-light" />
        {/* Row-2 */}
        <Row className="row ">
          <FieldName className="text-md flex-[0.5] pl-8 text-gray-500">
            Pay with
          </FieldName>
          <CoinSelect>
            <Icon>
              <img
                src="https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png"
                alt="logo"
                className="w-8 h-8 object-cover"
              />
            </Icon>
            <CoinName>Ethereum</CoinName>
          </CoinSelect>
        </Row>
        <Divider className="border-light" />
        {/* Button */}
      </TransferForm>
      <Row className="w-full">
        <ContinueButton className="bg-blue-400 w-full p-4 rounded-lg text-center cursor-pointer hover:bg-blue-500">
          Continue
        </ContinueButton>
      </Row>
      {/* Balance */}
      <Row className="flex items-center justify-between w-full text-sm text-gray-500">
        <span>BTC Balance</span>
        <span className="text-gray-500">8 BTC</span>
      </Row>
    </div>
  );
};

export default Transfer;

const Divider = styled.div``;
const CoinName = styled.span``;
const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

const Recipient = styled.input``;

const FlexInput = styled.input`
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const TransferForm = styled.div``;

const Row = styled.div`
  padding: 1rem 0;
`;
const FieldName = styled.span``;

const CoinSelect = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
`;

const ContinueButton = styled.button``;
