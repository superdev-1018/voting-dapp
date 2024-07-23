import { lazy, useEffect,useState} from "react";
import { Outlet } from "react-router-dom";

// ---------------------------------------------------------------------------------------

const Navbar = lazy(() => import("../NavigationBar"));
const AuthMain = lazy(()=>import("./AuthMain"));
// ---------------------------------------------------------------------------------------

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col example">
      <Navbar/>
      <div className="h-[calc(100vh-4.5rem)] bg-[#f7f8f9] flex">
        <AuthMain>
            <Outlet/>
        </AuthMain>
      </div>
    </div>
  );
}
