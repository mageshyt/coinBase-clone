import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Dashboard = ({ address }) => {
  return (
    <Wrapper className="flex h-screen w-screen bg-[#0a0b0d] text-white">
      {/* header need to be in top */}
      <div className="flex-1">
        
        <Header />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;
