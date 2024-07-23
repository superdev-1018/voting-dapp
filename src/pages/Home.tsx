import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { StatusCard } from "../components/cards/StatusCard";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Graph from "../components/Graph";
import { DataTable } from "../components/DataTable";

export default function Home() {
  return (
    <div className="border-box mx-[2%] lg:mx-[5%] xl:mx-[8%]">
      <div className="grid grid-cols-3 gap-5 py-[2%]">
        <div className="col-span-3 lg:col-span-1 m-auto lg:mr-8">
          <Card className=" bg-[#2b2929] flex flex-row justify-center align-top h-full">
            <CardBody className="text-white text-center flex flex-col gap-2 md:gap-8  px-6 py-10">
              <Typography variant="h4" className="font-[Rubik,sans-self] font-normal">
                Engage with confidence, secure payments for Hassle-free
                transactions and dispute resolution. 
              </Typography>
              <Button className="inline-flex mx-auto text-base rounded-xl bg-white text-black z-50 btn-text font-[Rubik,sans-self] gap-2 mt-2 lg:mt-10"><Icon icon="simple-line-icons:plus" className="w-[21px] h-[21px]"/><Link to="/milestones/create">Create Milestone</Link></Button>
              <img src="/assets/wave.svg" alt="wave" className="absolute top-0 w-full left-0"/>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-3 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <div className="col-span-3 sm:col-span-1 xl gap-5">
              <StatusCard state_label="Milestones Pending" state_num={84} total_spent={123400} percent={12} img_src="/assets/icons/ic_pending.svg"/>
              </div>
              <div className="col-span-3 sm:col-span-1 gap-5">
              <StatusCard state_label="Milestones Canceled" state_num={25} total_spent={95600} percent={-5} img_src="/assets/icons/ic_canceled.svg"/>
              </div>
              <div className="col-span-3 sm:col-span-1 gap-5">
              <StatusCard state_label="Total Receivable" state_num={34} total_spent={123400} percent={12} graph="/assets/wave2.png"/>
              </div>
              <div className="col-span-3 sm:col-span-1 gap-5">
              <StatusCard state_label="Milestones Completed" state_num={205} total_spent={1056601} percent={35} img_src="/assets/icons/ic_completed.svg"/>
              </div>
              <div className="col-span-3 sm:col-span-1 gap-5">
              <StatusCard state_label="Milestones Created" state_num={314} total_spent={556601} percent={15} img_src="/assets/icons/ic_created.svg"/>
              </div>
              <div className="col-span-3 sm:col-span-1 gap-5">
              <StatusCard state_label="Milestones Completed" state_num={205} total_spent={1056601} percent={35} graph="/assets/wave.png"/>
              </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white mt-5 rounded-xl shadow-xl">
        <Graph />
      </div>
      <div className="w-full pb-10">
        <DataTable />
      </div>
    </div>
  );
}
