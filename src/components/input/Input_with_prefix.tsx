import { Icon } from "@iconify/react";
export default function InputWithPrefix() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <Icon icon="formkit:email" className="text-gray-500" />
      </div>
      <input
        type="text"
        id="input-group-1"
        className="bg-gray-50 border border-gray-300  text-lg rounded-lg block w-full ps-10 p-2.5  "
        placeholder="Email"
      />
    </div>
  );
}
