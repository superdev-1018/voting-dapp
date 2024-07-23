import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

interface IStatusCardProps{
  state_label?:string,
  state_num?:number,
  total_spent?:number,
  percent?:number
  img_src?:string,
  graph?:string
}

export function StatusCard({state_label,state_num,total_spent,percent,img_src,graph}:IStatusCardProps) {
  return (
    <Card className="h-full justify-center">
      <CardBody className="flex flex-col color-[#0f172a] justify-center px-6 py-8">
        <div className="flex flex-row align-middle gap-2 ">
          <img
            src={img_src}
          />
          <div>
            <p>
              {state_label} <b>{state_num}</b>
            </p>
            <Typography
              variant="h5"
              className="text-[#0f172a] font-bold font-2xl flex flex-wrap"
            >
              <b>${total_spent}</b>
              <span className="font-sm text-[#54ba4a]">+{percent}%</span>
            </Typography>
          </div>
        </div>
        <div>
          <img src={graph}/>
        </div>
      </CardBody>
    </Card>
  );
}
