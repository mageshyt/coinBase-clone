import { useWeb3 } from "@3rdweb/hooks";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";
import Dashboard from "./Dashboard";
export default function Home() {
  // ! for connecting to our third web account
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper className="center h-screen min-w-full bg-[#0a0b0d] text-white  ">
      {address ? (
        <Dashboard address={address} />
      ) : (
        <ConnectWallet connectWallet={connectWallet} />
      )}
    </Wrapper>
  );
}

// ! Styled Components
const Wrapper = styled.div``;
