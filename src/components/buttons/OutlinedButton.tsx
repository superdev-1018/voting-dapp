import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";

interface IPropsOfIconBtnComponent {
  className?: string;
  children?: ReactNode | string;
  [key: string]: any;
  label?: string;
  icon?: string;
}

export default function OutlinedButton({
  className = "",
  label = "Ticket",
  icon = "fas fa-heart",
  children,
  ...others
}: IPropsOfIconBtnComponent) {
  return (
    <div
      className={`flex flex-col justify-center text-center items-center gap-2 py-2 overflow-clip`} style={{fontFamily:"Rubik,sans-serif"}}
    >
      <div className="text-[28px]">
        <Icon icon={icon} />
      </div>
      <div className="text-[14px]">
        {label}
      </div>
    </div>
  );
}
