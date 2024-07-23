import { Icon } from "@iconify/react";
export default function InputWithPreAndBehindfix() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <Icon icon="mdi:lock-outline" className="text-gray-500 text-xl" />
      </div>
      <input
        type="password"
        id="input-group-1"
        className="bg-gray-50 border border-gray-300  text-lg rounded-lg block w-full ps-10 p-2.5"
        placeholder="Password"
      />
      <div className=" absolute end-2.5 bottom-2.5  font-medium rounded-lg text-sm px-4 py-2">
        <Icon icon="iconamoon:eye-off" className="text-gray-500 text-lg" />
      </div>
    </div>
  );
}
