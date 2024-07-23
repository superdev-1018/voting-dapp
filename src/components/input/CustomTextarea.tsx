import {
    Typography,
    Button,
    Input,
    Select,
    Option,
    Textarea
  } from "@material-tailwind/react";
  
  export default function CustomTextarea({ title, width, placeholder }: any) {
    return (
      <div className="">
        <Typography className="text-start font-bold">{title}</Typography>
        <Textarea
        rows={10}
          placeholder={placeholder ? placeholder : ""}
          className=" hover:!border-black border-1   rounded-xl h-14 bg-white text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 "
          labelProps={{
            className: "hidden py-1 text-lg",
          }}
          containerProps={{
            className: `min-w-[${width ? width : "100px"}] h-14 text-lg `,
          }}
        />
      </div>
    );
  }
  