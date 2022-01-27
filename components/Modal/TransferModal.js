import React, { useState, useRef, createRef } from "react";
import CoinSelector from "./CoinSelector";
import Receiver from "./Receiver";
import Transfer from "./Transfer";
import TransferStatus from "./TransferStatus";

const TransferModal = ({ SanityToken, thirdWebToken, walletAddress }) => {
  const [active, setActive] = useState("send");
  const [selectedSanityToken, setSanityToken] = useState(SanityToken[0]);

  // ! for selected modal
  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedSanityToken}
            setAction={setActive}
            thirdWebToken={thirdWebToken}
            walletAddress={walletAddress}
          />
        );
      case "select":
        return (
          <CoinSelector
            setSelectedToken={setSanityToken}
            selectedToken={selectedSanityToken}
            setAction={setActive}
            thirdWebToken={thirdWebToken}
            walletAddress={walletAddress}
            sanityToken={SanityToken}
          />
        );

      case "receive":
        return (
          <Receiver
            setAction={setActive}
            selectedToken={selectedSanityToken}
            walletAddress={walletAddress}
          />
        );
      case "transferring":
        return <TransferStatus status={active} />;
      case "transferred":
        return <TransferStatus status={active} />;
      default:
        return <h2>send</h2>;
    }
  };
  return (
    <div className="h-[35rem] flex flex-col  border-light w-[28rem] text-gray-50  ">
      <div className="flex h-[5rem]   justify-evenly items-center ">
        <p
          onClick={() => setActive("send")}
          className={
            active === "send" ? "option text-blue-400" : "option border-light"
          }
        >
          Send
        </p>
        <p
          onClick={() => setActive("receive")}
          className={
            active === "receive"
              ? "option hover:bg-[#111214] text-blue-400"
              : "option hover:bg-[#111214]  border-light"
          }
        >
          Receive
        </p>
      </div>
      {/* main modal */}
      <div className="flex-1 p-4">{selectedModal(active)}</div>
    </div>
  );
};

export default TransferModal;
