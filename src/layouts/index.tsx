import { lazy, useEffect,useState} from "react";
import { Outlet } from "react-router-dom";

// ---------------------------------------------------------------------------------------

const Navbar = lazy(() => import("./NavigationBar"));
const Footer = lazy(() => import("./Footer"));
const Sidebar = lazy(() => import("./Sidebar"));
const Main = lazy(() => import("./Main"));

// ---------------------------------------------------------------------------------------

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col example">
      <Navbar/>
      <div className="bg-[#f7f8f9] flex">
        <div className="max-w-[8.6rem]">
        <Sidebar/>
        </div>
        <div className="w-full h-full">
          <Main>
        <Outlet />
        </Main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
