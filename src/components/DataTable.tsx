import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Select,
  Option,
  Checkbox,
  Progress,
} from "@material-tailwind/react";
import { Select as HeadlessuiSelect } from "@headlessui/react";
import { Icon } from "@iconify/react";

const TABLE_HEAD = [
  "check",
  "Name/Project",
  "Amount",
  "Date Sent",
  "Progress Rate",
  "Status",
];

const TABLE_ROWS = [
  {
    img: "/assets/avatars/avatar_6.jpg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/assets/avatars/avatar_5.jpg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/assets/avatars/avatar_1.jpg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/assets/avatars/avatar_2.jpg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/assets/avatars/avatar_8.jpg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export function DataTable() {
  const [check, setAllCheck] = useState<boolean>(false);
  return (
    <Card className="w-full mt-5 rounded-2xl overflow-x-scroll">
      <CardBody className="p-0 m-0">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center p-5 bg-[#f8fafc]">
          <div className="p-2">
            <Typography variant="h5" color="blue-gray" className="font-[Rubik,sans-self] text-xl">
              Transactions History
            </Typography>
          </div>
          <div className="flex w-48">
            <Select defaultValue="1" label="Sort">
              <Option value="1">Short By : <b>Recent</b></Option>
              <Option value="2">Short By: <b>Toppset</b></Option>
            </Select>
          </div>
        </div>

        <table className="w-full min-w-max table-auto text-left overflow-x-scroll box-border">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => {
                if (head == "check")
                  return (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm font-[Rubik,sans-self] font-bold text-[#64748b]"
                    >
                      <Checkbox crossOrigin={undefined} onClick={()=>setAllCheck(!check)}/>
                    </th>
                  );
                else
                  return (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 font-[Rubik,sans-self] font-bold text-sm text-[#64748b]"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  );
              })}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-1"
                  : "p-1 border-b border-blue-gray-50";

                return (
                  <tr key={name} className={`hover:bg-gray-100 ${check?"bg-cyan-200":""}`}>
                    <td className={classes} style={{ width: "50px" }}>
                      <div>
                        <Checkbox crossOrigin={undefined} checked={check?true:false}/>
                      </div>
                    </td>
                    <td className={`w-1/3 ${classes}`}>
                      <div className="flex items-center">
                        <Avatar
                          src={img}
                          alt={name}
                          size="sm"
                          variant="rounded"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain mr-2"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold font-[Rubik,ansa-self]"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={`text-left ${classes}`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-[Rubik,sans-self] font-bold text-black text-base"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={`w-1/4 ${classes}`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-[Rubik,sans-self] font-[14.4px] text-[#64748b]"
                      >
                        {date}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <div className="w-3/5">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography color="blue-gray" variant="h6">
                            47%
                          </Typography>
                        </div>
                        <Progress value={50} color="green" />
                      </div>
                    </td>

                    <td className={` text-end ${classes}`}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center flex-row justify-end border-t border-blue-gray-50 p-4">
        <Typography className="mr-5">Rows per Page: </Typography>
        <HeadlessuiSelect name="status" aria-label="Project status" className="mr-5">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </HeadlessuiSelect >
        <Typography className="mr-5">6–10 of 24</Typography>
        <IconButton variant="text">
            <Icon icon="simple-line-icons:arrow-left"/>
      </IconButton>
      <IconButton variant="text">
            <Icon icon="simple-line-icons:arrow-right"/>
      </IconButton>
      </CardFooter>
    </Card>
  );
}
