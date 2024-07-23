import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Blank from "./pages/Blank";

// ----------------------------------------------------------------------------------

const LandingLayout = lazy(() => import("./layouts"));
const AuthLayout = lazy(() => import("./layouts/auth_layout/AuthLayout"));
const Home = lazy(() => import("./pages/Home"));
const CreateMilestone = lazy(() => import("./pages/milestone/create"));
const CreateMilestoneDetail = lazy(() => import("./pages/milestone/create/basicDetail"));
const MilestoneDetail = lazy(()=>import("./pages/milestone/milestoneDetail"));
const Login = lazy(()=>import("./pages/auth/login"));
const Register = lazy(()=>import("./pages/auth/register"));
const ForgotPassword = lazy(()=>import("./pages/auth/forgotPass"));
const MilestoneList = lazy(()=>import("./pages/milestone/milestoneList"));
const Index = lazy(()=>import("./pages/index"));
// ----------------------------------------------------------------------------------

export default function Routes() {
  // return useRoutes([
  //   {

  //     element: <LandingLayout />,
  //     path: "/",
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/milestones/create",
  //         element: <CreateMilestone />,
  //       },
  //       {
  //         path: "/milestone/detail",
  //         element: <MilestoneDetail />,
  //       },
  //       {
  //         path: "/milestonelist",
  //         element: <MilestoneList />,
  //       },
  //       {
  //         path: "404",
  //         element: <Blank />,
  //       },
  //       {
  //         path: "*",
  //         element: <Navigate to="/404" replace />,
  //       },
  //     ],
  //   },
  //   {
  //     element: <AuthLayout />,
  //     path: "/",
  //     children: [
  //       {
  //         path: "/login",
  //         element: <Login />,
  //       },
  //       {
  //         path: "/register",
  //         element: <Register />,
  //       },
  //       {
  //         path: "/forgot-pass",
  //         element: <ForgotPassword />,
  //       },
  //     ],
  //   }
  // ]);

  return useRoutes([
    {
      path:"/",
      element:<Index/>
    }
  ])
}
