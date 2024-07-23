import React,{useEffect, useState} from "react";
import { Typography, Stepper, Step, Button,Breadcrumbs,Drawer } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import TypeSelect from "./typeSelect";
import StepWizard from "react-step-wizard";
import BasicDetail from "./basicDetail";
import Milestones from "./milestones";
import Contract from "./contract";
import Review from "./review";



export default function CreateMilestone() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [visibleStep, setVisibleStep] = useState(false); 
  const [BreadcrumbsVisible, setBreadCrumbVisible] = useState(false);

  const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const setHidden = () => setVisibleStep(false);
  const setShow = () => setVisibleStep(true);
  const setBreadCrumbInVisible = ()=>setBreadCrumbVisible(true);
  useEffect(()=>{
      if(activeStep==2 || activeStep==3 || activeStep==4){
        setBreadCrumbVisible(true);
      }
  },[activeStep])
  return (
    <div className={` p-5 m-4 md:mx-36 ${!visibleStep?"pt-10":""}`}>
      <div className={`flex flex-row flex-wrap justify-between pt-6 pb-4 mx-auto ${visibleStep?"":"hidden"}`}>
          <Breadcrumbs separator=">" className={`mx-10 ${BreadcrumbsVisible ? "":"invisible"}`}>
          <Link to="/">Milestones</Link>
          <Link to="/">Create Milestones</Link>
          <Link to="/">Pay Fixed Price</Link>
        </Breadcrumbs>
        <div className="w-1/4 ">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>1</Step>
            <Step onClick={() => {setActiveStep(1);setBreadCrumbVisible(true);}}>2</Step>
            <Step onClick={() => setActiveStep(2)}>3</Step>
            <Step onClick={() => setActiveStep(3)}>4</Step>
          </Stepper>
        </div>
      </div>

      <StepWizard className="shadow-2xl rounded-2xl flex flex-col items-center text-center bg-white min-h-[700px]">
        <TypeSelect setShowSetp={setShow}/>
        <BasicDetail handleNext={handleNext} handlePrev={handlePrev} setHiddenStep={setHidden}/>
        <Milestones handlePrev={handlePrev} handleNext={handleNext} setBreadCrumb={setBreadCrumbInVisible} opendrawer={openDrawer}/>
        <Contract handlePrev={handlePrev} handleNext={handleNext}/>
        <Review handlePrev={handlePrev} handleNext={handleNext}/>
      </StepWizard>



      <Drawer open={open} onClose={closeDrawer} className="p-4"  placement="right">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>

        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </div>
  );
}
