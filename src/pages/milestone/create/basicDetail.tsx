import {
  Typography,
  Button,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import CustomSelect from "../../../components/input/CustomSelect";
import CustomInput from "../../../components/input/CustomInput";
import CustomNumInput from "../../../components/input/CustomNumInput";
import CustomTextarea from "../../../components/input/CustomTextarea";

export default function BasicDetail(props: any) {
  return (
    <div className="w-full h-full flex flex-col flex-wrap p-4 md:p-0">
      <Typography variant="h4" className="font-bold pt-10 font-[Rubik,sans-self] text-2xl">
        Basic Details
      </Typography>
      <Typography className="font-bold text-[#64748b] font-[Rubik,sans-self] text-base">
        First step is to fill out the basic details of this contract.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        <div className="col-span-1">
           <CustomSelect title="Number of Milestones" items={[5, 6, 7, 8, 9, 10]} />
        </div>
        <div className="col-span-1">
          <CustomSelect title={"Currency"} items={["USD", "EUR", "CNY"]} />
        </div>
        <div className="col-span-1">
          <CustomNumInput title="Total Amount"/>
        </div>
        <div className="col-span-1">
          <CustomInput title={"Company Name"}/>
        </div>
        <div className="col-span-1">
          <CustomInput title={"Client Name"} />
        </div>
        <div className="col-span-1">
          <CustomInput title={"Contract Name"} placeholder="MO Global" />
        </div>
      </div>
      <div className="my-5">
        <CustomInput title="Project Title" width="w-full"  placeholder="Website Development" />
      </div>
      <div className="my-5">
        <CustomTextarea title="Project Title" placeholder="We need you as a Frontend Developer to review our  prototype and suggest improvements." />
      </div>
      <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="col-span-1 xs:m-4 md:m-2">
            <Button className=" w-full bg-gray-50" size="lg" variant="outlined" onClick={() => {
              props.previousStep();
              props.handlePrev();
              props.setHiddenStep();
            }}>Back</Button>
          </div>
          <div className="xs:m-4 md:m-2 col-span-1">
            <Button className="w-full" size="lg" onClick={() => {
              props.nextStep();
              props.handleNext();
            }}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
