// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount } from "wagmi";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Account } from "./components";
import { Navbar } from "./components/nav/Navbar";

const AppLoader = () => (
  <div
    className="flex items-center justify-center flex-col h-screen"
    id="app-loader"
  ></div>
);

export function App() {
  // const { isConnected } = useAccount();

  return (
    <>
      <Navbar />

      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>

      {/* {isConnected && <Account />} */}
    </>
  );
}
