import {
    Typography,
    Button,
    Chip,
    Radio 
  } from "@material-tailwind/react";
  import { Icon } from "@iconify/react";
  import { Link } from "react-router-dom";
  import CustomProgress from "../../../components/CustomProgress";

  
  export default function Review(props: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center flex-wrap p-4 md:p-0 gap-4">
          <Typography
            variant="h4"
            className="font-bold pt-10 font-[Rubik,sans-self] text-2xl"
          >
            Review
          </Typography>
          <Typography className="font-bold text-[#64748b] font-[Rubik,sans-self] text-base">
          Next step is to select a funding source proceed to make payments
          </Typography>
        
        <div className="flex flex-col flex-wrap gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 text-start">
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">From</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">Jon Massimo <span className="text-[#64748b] font-normal">(MG Global)</span></Typography>
                 </div>
                 <div className="col-span-1 text-start">
                    <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">To</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">Matthew Olamide</Typography>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 text-start">
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Issued Date</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">Sun Jun 30 2024</Typography>
                 </div>
                 <div className="col-span-1 text-start">
                    <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Phases</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">4 Milestones (72 Hours)</Typography>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 text-start">
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Milestone Status</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black"><Chip variant="ghost" value="new" className="w-20"/></Typography>
                 </div>
                 <div className="col-span-1 text-start">
                    <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Contract ID</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">#387D4   View</Typography>
                 </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 text-start">
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Milestone Amount</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">$15000</Typography>
                 </div>
                 <div className="col-span-1 text-start">
                    <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Milestone Progress</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black"><CustomProgress progress={20} /></Typography>
                 </div>
            </div>
            <hr></hr>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 text-start">
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Total Amount + Taxes</Typography>
                    <Typography variant="h3" className="font-[Rubik,sans-self] text-black">$15800</Typography>
                 </div>
                 <div className="col-span-1 text-start">
                    <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Status</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black">
                    <Chip
                        variant="ghost"
                        size="sm"
                        value="Awaiting"
                        icon={
                        <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-[#f6a722] content-['']" />
                        }
                        className="bg-[#fef3c7] text-[#f6a722] w-28"
                    />
                    </Typography>
                 </div>
            </div>

            <div className="w-full text-start gap-16">
                <div>
                   <Typography className="text-base font-[Rubik,sans-self] text-[#64748b]">Unique Url</Typography>
                    <Typography variant="h6" className="text-base font-[Rubik,sans-self] text-black flex flex-row flex-wrap items-center">
                        https://www.safeli.io/jon-massimo/xP5LGLZ70R7ZDlO3/contract?387D4
                        <Button variant="text" className="rounded-full p-2 m-0"><img src="/assets/icons/ic_copy.svg" /></Button>
                    </Typography>
                 </div>
            </div>
            
        </div>

          <div className="my-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:min-w-[500px]">
              <div className="col-span-1 xs:m-4 md:m-2">
                <Button className=" w-full bg-gray-50" size="lg" variant="outlined" onClick={() => {
                  props.previousStep();
                  props.handlePrev();
                }}>Back</Button>
              </div>
              <div className="xs:m-4 md:m-2 col-span-1">
                <Button className="w-full" size="lg"><Link to="/milestone/detail">Continue</Link></Button>
              </div>
            </div>
        </div>
        </div>
    );
  }
  