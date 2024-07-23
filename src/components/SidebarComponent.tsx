import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, ListItem, IconButton } from "@material-tailwind/react";
import { usePathname } from "../hooks";
import OutlinedButton from "../components/buttons/OutlinedButton";
import { topRouteConfig } from "../routeConfig";
import { bottomRouteConfig } from "../routeConfig";

export default function SidebarComponent() {
  // const currentPath = usePathname();
  // const pathPrefix = currentPath.split("/")[1];
  const [pathname, setPath] = useState<string>("/");
  const [activeBtn, setActiveBtn] = useState<string>("");
  const pathList: string[] = [
    "/",
    "/milestones",
    "/milestones/create",
    "/milestones/received",
    "/milestones/detail",
    "/milestones/review",
    "/milestonelist",
    "/messages",
    "/contacts",
    "/support",
    "/logout",
  ];
  useEffect(() => {
    let check = pathList.indexOf(pathname);
    if (check >= 0) {
      setActiveBtn(pathname);
    }
  }, [pathname]);

  return (
    <Card
      className="h-[calc(100vh-4.5rem)] w-full max-w-[8.6rem] shadow-xl shadow-blue-gray-900/5 border-r-2 border-dotted bg-[#FFFFFF]"
      style={{ borderRadius: "0" }}
    >
      <nav className="flex flex-col flex-wrap font-sans text-base font-normal text-blue-gray-700 border-box pt-4 px-2">
        {topRouteConfig.map((item, index) => (
          <ListItem className="hover:bg-transparent p-3 pb-1" key={index}>
            <Button
              variant="outlined"
              ripple={false}
              className={`btn-text border-box p-3 w-full border-gray-400 active:border-black active:opacity-100 hover:bg-transparent  px-3 py-3 shadow-none text-gray-400 relative overflow-hidden ${
                item.path == activeBtn ? "border-black text-black" : null
              }`}
              onClick={() => setPath(item.path)}
            >
              <div className={`absolute bg-[#2b2929] rounded-full opacity-100 bottom-[-15px] right-[-14px] z-50 w-[30px] h-[30px] ${item.path==activeBtn? "":"hidden"}`}></div>
              <Link to={item.path}>
                <OutlinedButton
                  label={item.label}
                  icon={item.icon}
                  className={item.path == activeBtn ? "text-black" : ""}
                />
              </Link> 
            </Button>
          </ListItem>
        ))}
        <div className="pt-5 pb-36">
          <hr></hr>
        </div>
        {bottomRouteConfig.map((item, index) => (
          <ListItem className="hover:bg-transparent p-3 pb-1" key={index}>
            <Button
              variant="outlined"
              ripple={false}
              className={`btn-text border-box p-3 w-full border-gray-400 active:border-black active:opacity-100 hover:bg-transparent  shadow-none text-gray-400 relative overflow-hidden ${
                item.path == activeBtn ? "border-black text-black" : null
              }`}
              onClick={() => setPath(item.path)}
            >
              <div className={`absolute bg-[#2b2929] rounded-full opacity-100 bottom-[-15px] right-[-14px] z-50 w-[30px] h-[30px] ${item.path==activeBtn? "":"hidden"}`}></div>
              <Link to={item.path}>
                <OutlinedButton
                  label={item.label}
                  icon={item.icon}
                  className={item.path == activeBtn ? "text-black" : ""}
                />
              </Link>
            </Button>
          </ListItem>
        ))}
      </nav>
    </Card>
  );
}
