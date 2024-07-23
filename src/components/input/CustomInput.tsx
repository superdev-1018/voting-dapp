import {
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function CustomInput({ title, placeholder }: any) {
  return (
    <div className="">
      <Typography className="text-start font-bold">{title}</Typography>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="h-12 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5  dark:bg-gray-700 dark:border-gray-600  dark:focus:border-blue-500 after:0"
          required
        />
      </div>
    </div>
  );
}
