import React, { useState, useRef, createRef } from "react";
import Transfer from "./Transfer";

const TransferModal = () => {
  const [active, setActive] = useState("send");

  // ! for selected modal
  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return <Transfer />;
      case "receive":
        return <h2>receive</h2>;
      default:
        return <h2>send</h2>;
    }
  };
  return (
    <div className="h-[35rem] flex flex-col  border-light w-[27rem] text-gray-50  ">
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
          receive
        </p>
      </div>
      {/* main modal */}
      <div className="flex-1 p-4">{selectedModal(active)}</div>
    </div>
  );
};

export default TransferModal;
