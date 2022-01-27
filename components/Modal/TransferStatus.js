import React from "react";
import { SpinnerCircularFixed } from "spinners-react";
import logo from "../../assets/loading.gif";

const TransferStatus = ({ status }) => {
  return (
    <div className="h-full w-full center text-2xl">
      {status === "transferring" && (
        <div className="text-red-300 center flex-col space-y-3 ">
          <SpinnerCircularFixed
            size={150}
            thickness={120}
            speed={100}
            color="#08d9d6"
            secondaryColor="#121212"
          />
          <span className="text-[#08d9d6]">transfer In Progress.......</span>
        </div>
      )}
      {status === "transferred" && (
        <div className="text-green-400">Transfer Complete ✅ </div>
      )}
    </div>
  );
};

export default TransferStatus;
