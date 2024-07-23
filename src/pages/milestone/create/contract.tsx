import {
    Typography,
    Button,
    Chip,
    Radio 
  } from "@material-tailwind/react";
  import { Icon } from "@iconify/react";
  import Ckeditor from "../../../components/Ckeditor";

  
  export default function Contract(props: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center flex-wrap p-4 md:p-0">
          <Typography
            variant="h4"
            className="font-bold pt-10 font-[Rubik,sans-self] text-2xl"
          >
            Milestones
          </Typography>
          <Typography className="font-bold text-[#64748b] font-[Rubik,sans-self] text-base">
          Next step is to create as many milestones as you want!
          </Typography>
  
          <div className="flex flex-row flex-wrap items-center gap-2 mt-5 justify-center">
            <Chip value="Milestone 1" color="green"/><Icon icon="solar:alt-arrow-right-linear" />   
            <Chip value="Milestone 2" color="green"/><Icon icon="solar:alt-arrow-right-linear" />   
            <Chip value="Milestone 3" color="cyan"/><Icon icon="solar:alt-arrow-right-linear" />   
            <Chip value="Milestone 4" variant="ghost"/><Icon icon="solar:alt-arrow-right-linear" />   
            <Chip value="Milestone 5" variant="ghost"/>  
          </div>
        
            <div className="flex flex-row gap-4 my-4 justify-center">
                <Radio name="type" label="Use Auto Generated Contract" defaultChecked crossOrigin={undefined} />
                <Radio name="type" label="Upload Custom Contract"  crossOrigin={undefined} />
                <Radio name="type" label="Use a Template"  crossOrigin={undefined} />
            </div>

          <div className="mx-3 flex flex-wrap">
           <Ckeditor />
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
  