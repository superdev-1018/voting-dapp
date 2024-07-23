import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function TypeSelect(props:any) {

  const [active, setActive] = useState(true);
  const [className, setClassName] = useState("first");
  useEffect(()=>{
        if(active){
            setClassName("first");
        }
        else{
            setClassName("second")
    }
  },[active]);
  
  return (
      <div className=" items-center">
      <Typography variant="h4" className="font-bold pt-10">
        Create New Milestone
      </Typography>
      <Typography className="font-bold color-[#64748b]">
        Select an appropriate milestone type to begin with
      </Typography>

      <Card className="border-0">
        <List className="border-0 gap-4">
          <ListItem className={`p-0 border border-gray-200 mb-3 ${className=="first"?"bg-gray-50 border-black":""} `} onClick={()=>setActive(true)}>
            <label
              htmlFor="vertical-list-react"
              className="flex w-full cursor-pointer items-center px-5 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-react"
                  icon={<Icon icon="vaadin:check" />}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  crossOrigin={undefined}
                />
              </ListItemPrefix>
                <img src="/assets/icons/ic_created.svg" alt="create" />
                <div className="text-start p-2 max-w-sm">
                    <Typography className="text-[16px] font-bold  font-[Rubik,sans-self] text-black">Pay Fixed Price</Typography>
                    <Typography className="text-[14.4px]  font-[Rubik,sans-self]">Set a definite price before work begins, then pay after delivery.</Typography>
                </div>
            </label>
          </ListItem>
          <ListItem className={`p-0 border border-gray-200  ${className=="second"?"bg-gray-50 border-black":""} `} onClick={()=>setActive(false)}>
            <label
              htmlFor="vertical-list-svelte"
              className="flex w-full cursor-pointer items-center px-5 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-svelte"
                  icon = {<Icon icon="vaadin:check" />}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  crossOrigin={undefined}
                />
              </ListItemPrefix>
              <img src="/assets/icons/ic_time.svg" alt="create" />
              <div className="text-start p-2 max-w-sm">
                <Typography className="text-[16px] font-bold font-[Rubik,sans-self] text-black">Pay Per hour</Typography>
                <Typography className="text-[14.4px]  font-[Rubik,sans-self]">
                  Compensate based on time spent working on your project.
                </Typography>
              </div>
            </label>
          </ListItem>
        </List>
      </Card>
      <Button className="w-full p-5 mt-8 rounded-lg" onClick={()=>{props.nextStep();props.setShowSetp()}}>Proceed</Button>
      </div>
  );
}
