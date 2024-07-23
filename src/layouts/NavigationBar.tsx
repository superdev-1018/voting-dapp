import { useState, useEffect } from "react";
import { Drawer } from "@material-tailwind/react";
import CustomIconButton from "../components/buttons/CustomIconButton";
import DropdownButton from "../components/buttons/DropdownButton";
import { Icon } from "@iconify/react";
import SidebarComponent from "../components/SidebarComponent";

// -----------------------------------------------------------------------------------------

interface INavitem {
  id: number;
  label: string;
  icon: string;
}

const navList: INavitem[] = [
  {
    id: 1,
    label: "Ticket",
    icon: "/assets/icons/ic_ticket.svg",
  },
  {
    id: 2,
    label: "APIs",
    icon: "/assets/icons/ic_api.svg",
  },
  {
    id: 3,
    label: "Settings",
    icon: "/assets/icons/ic_settings.svg",
  },
  {
    id: 4,
    label: "Notification",
    icon: "/assets/icons/ic_notification.svg",
  },
  {
    id: 5,
    label: "Profile",
    icon: "/assets/icons/ic_profile.svg",
  },
];
export default function NavigationBar() {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [mdScreen , setMdScreen] = useState(false);
  const closeDrawer = () => {
    setVisibleDrawer(false);
  };

  useEffect(()=>{
    if(window.screen.width <= 960){
      setMdScreen(true)
    }else{setMdScreen(false)}
  },[window.screen.width]);

  return (
    <div className="flex flex-row rounded-none min-w-full bg-[#FFFFFF] box-border sticky top-0 z-50 shadow-md min-h-64">
      <div className=" flex items-center justify-between text-blue-gray-900 w-full box-border h-[64px] lg:h-[75px]">
        <div className="h-full flex flex-row-reverse items-center first-letter px-5 lg:pl-10">
            { !mdScreen ? (<img src="/assets/light-logo.svg" alt="logo" style={{width:"55px",height:'55px', marginLeft: "3px"}}/>)
              :(<img src="/assets/light-logo.svg" alt="logo" style={{width:"42px",height:'42px',marginLeft: "3px"}}/>)}
          <div
            className="block xl:hidden text-xl p-2" style={{marginRight:"6px"}}
            onClick={() => setVisibleDrawer(true)}
          >
            <Icon icon="eva:menu-2-fill" />
          </div>
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row gap-[24px] p-6 lg:pr-10 h-full">
          {navList.map((item, index) => {
            if (index == 3) {
              return (
                <DropdownButton
                  label={item.label}
                  icon={item.icon}
                  key={index}
                />
              );
            } else {
              return (
                <CustomIconButton
                  label={item.label}
                  icon={item.icon}
                  key={index}
                />
              );
            }
          })}
        </div>

        <div className="flex flex-row lg:hidden p-5 lg:p-0">
          <DropdownButton label="Notification" icon="/assets/icons/ic_notification.svg" hiddenLabel={true}/>
          <CustomIconButton
            label="Profile"
            icon="/assets/icons/ic_profile.svg"
            hiddenLabel={true}
          />
        </div>
      </div>

      <Drawer
        open={visibleDrawer}
        onClose={closeDrawer}
        className="bg-[#FFFFFF] max-w-[8.6rem] p-0 m-0 border-0"
        size={137.6}
      >
        <SidebarComponent></SidebarComponent>
      </Drawer>
    </div>
  );
}
