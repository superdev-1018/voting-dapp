import {
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function CustomNumInput({ title,width }: any) {
  return (
    <div className="">
      <Typography className="text-start font-bold">{title}</Typography>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <Icon icon={"flowbite:dollar-outline"} />
        </div>
        <input
          type="number"
          className="h-12 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  dark:focus:border-blue-500 after:0"
          required
        />
      </div>
    </div>
  );
}
