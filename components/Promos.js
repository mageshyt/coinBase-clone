import React from "react";
import styled from "styled-components";
const Promos = () => {
  return (
    <Wrapper className="mt-10  mr-4">
      {/* Card -1 */}
      <Card
        earned="0.00006"
        title="Yield earned"
        promo="Earn up to 2.84% APY on your crypto"
      />
      {/* Card -2 */}

      <Card
        title="Learn and Earn "
        promo="Earn up to 2.84% APY on your crypto"
      />
    </Wrapper>
  );
};

export default Promos;

const Card = ({ title, promo, earned }) => {
  return (
    <div className="border-[1px] mb-4 flex flex-col justify-between border-[#282b2f] h-[11rem] rounded-lg width-[21rem] p-6">
      {/* top */}
      <div className="top">
        {/* title */}
        <h2 className="text-lg font-bold">{title}</h2>
        {/* promo*/}
        <span className="text-sm text-gray-300">{promo} </span>
      </div>
      {/* bottom */}
      <div className="bottom">
        {/* earned amount */}
        {earned ? (
          <div className="flex justify-between mt-5">
            <span className="text-md font-black">$ {earned}</span>
            <span className="text-sm text-gray-500">2.85% APY</span>
          </div>
        ) : (
          <div className=" mt-5 font-bold ">
            <span className="text-sm text-blue-600 cursor-pointer">
              Verify Identity
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const Wrapper = styled.div``;
