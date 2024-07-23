import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Breadcrumbs, Button, Card,CardBody, Typography} from "@material-tailwind/react";
import { FontContext } from "../../fontContext";

export default function MilestoneList(){
    const fontFamily = useContext(FontContext);
    return(
        <div className="w-full h-full box-border">
            <div className="flex flex-row flex-wrap justify-between mx-auto">
                <Breadcrumbs separator=">">
                    <Link to="/">Milestones</Link>
                    <Link to="/">Create Milestones</Link>
                    <Link to="/">Pay Fixed Price</Link>
                </Breadcrumbs>
                <Button className={`flex flex-row flex-wrap items-center gap-3 normal-case ${fontFamily} text-base`}><Icon icon="simple-line-icons:plus" />Create Milestone</Button>
            </div>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex flex-col">
                    <Card className="box-border px-6 py-8">
                        <CardBody className="flex flex-row  gap-5">
                            <div><img src="/assets/icons/ic_created.svg"></img></div>
                            <div>
                                <Typography>Total Balance</Typography>
                                <Typography variant="h5" className={`${fontFamily} font-bold`}>$154,655</Typography>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}