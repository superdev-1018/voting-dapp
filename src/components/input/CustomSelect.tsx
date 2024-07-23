import { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

interface InputProps {
  title?:any;
  items: any[];
}

export default function CustomSelect({items=[1,2,3],title}: InputProps) {
  const [value, setValue] = useState(items[0]);
  return (
      <div className="">
      <Typography className="text-start font-bold">{title}</Typography>
      <Select
        className=" bg-gray-50 border-gray-200  border-2 rounded-xl h-12 hover:!border-black"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        size="lg"
        menuProps={{ className: "m-0 p-0 bg-white" }}
        value={value}
        onChange={(e)=>setValue(e)}
      >
        {items
          ? items.map((item: any, flags: number) => (
              <Option
                key={flags}
                value={item}
                className="rounded-none focus:bg-light-blue-100"
              >
                <div className="flex items-center rounded-none text-lg">
                  {item}
                </div>
              </Option>
            ))
          : null}
      </Select>
      </div>
  );
}
