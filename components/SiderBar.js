import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import coinbaseLogo from "../assets/cb-logo.png";
import { navItems } from "../static/navItems";
const SiderBar = () => {
  const [active, SetActive] = useState(navItems[0].title);
  return (
    <Wrapper>
      <div className="my-[1.5rem]">
        <Logo>
          <Image src={coinbaseLogo} alt="coinbase logo" />
        </Logo>
      </div>
      {/* navItem container */}
      <NavItemContainer className="mt-[3rem] cursor-pointer">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            onClick={() => SetActive(item.title)}
            className={active === item.title ? "text-blue-500" : ""}
          >
            <NavIcon>{item.icon}</NavIcon>
            {/* title */}
            <p className="text-[18px]">{item.title}</p>
          </NavItem>
        ))}
      </NavItemContainer>
    </Wrapper>
  );
};

export default SiderBar;

const Wrapper = styled.div`
  height: 100vh;
  width: calc(22rem - 16px - 16px);
  border-right: 1px solid #282b2f;
  padding: 0 1rem;
`;
const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;
const NavItemContainer = styled.div``;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  &:hover {
    background-color: #141519;
  }
`;
const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;
