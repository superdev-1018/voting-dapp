import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs,Button,Alert,IconButton, Typography,Chip,Avatar,Rating } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import CustomProgress from "../../components/CustomProgress";
import CustomSelect from "../../components/input/CustomSelect";
import CustomTimeline from "../../components/CustomTimeline";

export default function MilestoneDetail() {
    const [open, setOpen] = useState(true);

    return (
        <div className="`m-4 md:mx-16 lg:mx-36 mb-8">
            <Breadcrumbs separator=">" className="my-5">
                <Link to="/">Milestone</Link>
                <Link to="/">Payable</Link>
                <Link to="/">Details</Link>
            </Breadcrumbs>
            <Alert
        
                open={open}
                icon={<div className="text-[#F6A722] flex flex-row items-center"><Icon icon="material-symbols:warning-outline" className="text-lg mr-2" ></Icon>Action Required:</div>}
                onClose={() => setOpen(false)}
                className="bg-[#FFFAEE] shadow-lg text-[#64748B] text-sm"
            >
                You have a new dispute from Matthew, click the dispute button to review.
            </Alert>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-8" dir="ltr">
                <div className="col-span-5 rounded-2xl bg-[#FFFFFF] p-8 shadow-lg">
                    <div className="flex flex-wrap justify-between">
                        <Typography variant="h5" className="font-[Rubik, sans-self] flex items-center">Milestone</Typography>
                        <div className="flex flex-row flex-wrap">
                            <Button className="flex items-center gap-3 text-base p-2 font-[Rubik,sans-self]" variant="text">
                                Note (2)
                            </Button>
                            <Button className="flex items-center gap-3 text-base p-2 font-[Rubik,sans-self]" variant="text">
                                <Icon icon="simple-line-icons:plus"></Icon>Add Attachment
                            </Button>
                            <Button className="flex items-center gap-3  text-base p-2 font-[Rubik,sans-self] text-red-400" variant="text">
                                <Icon icon="material-symbols-light:delete-outline"></Icon>Terminate
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-start gap-3 pt-3">
                        <Button className="flex items-center p-2 text-sm font-[Rubik,sans-self]" variant="filled">
                            Milestone 1
                        </Button>
                        <Button className="flex items-center p-2 text-sm font-[Rubik,sans-self]" variant="outlined">
                            Milestone 2
                        </Button>
                        <Button className="flex items-center p-2 text-sm font-[Rubik,sans-self]" variant="outlined">
                            Milestone 3
                        </Button>
                        <Button className="flex items-center p-2 text-sm font-[Rubik,sans-self]" variant="outlined">
                            Milestone 4
                        </Button>
                        <Button className="flex items-center p-2 text-sm font-[Rubik,sans-self]" variant="outlined">
                            Milestone 5
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        <div className="col-span-1">
                            <Typography className="font-[Rubik,sans-self]">Milestone Title</Typography>
                            <Typography variant="h6">Web Development</Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography className="font-[Rubik,sans-self]">Milestone Progress</Typography>
                            <Typography variant="h6"><CustomProgress progress={80}/></Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography className="font-[Rubik,sans-self]">Contact</Typography>
                            <Typography variant="h6">View Contract</Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography className="font-[Rubik,sans-self]">Start Date</Typography>
                            <Typography variant="h6">Sun Jun 30 2024</Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography className="font-[Rubik,sans-self]">Status</Typography>
                            <Typography variant="h6">
                            <Chip
                                variant="ghost"
                                size="sm"
                                value="Paid"
                                icon={
                                <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-[#0066ff] content-['']" />
                                }
                                className="bg-[#e7effc] text-[#0066ff] w-16"
                            />
                            </Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography >Contact ID</Typography>
                            <Typography variant="h6">#387D4</Typography>
                        </div>
                    </div>
                    <div className="font-[Rubik,sans-self] mt-4">
                        <Typography className="font-[Rubik,sans-self]" variant="h5">Milestone Description</Typography>
                        <Typography className="font-[Rubik,sans-self]">
                            We need you as a Frontend Developer to review our prototype and suggest improvements. This project is a responsive web application designed to run on a desktop, tablet and mobile phone.
                        </Typography>
                    </div>                
                </div>
                <div className="col-span-2 rounded-2xl bg-white user-info-card p-3 shadow-lg">
                    <div className="float-right">
                        <Button variant="filled" className="bg-white p-3"><Icon icon="mage:dots" className="text-black"></Icon></Button>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 gap-1">
                        <Avatar src="/assets/user.png" alt="avatar" size="xxl"/>
                        <Typography className="font-[Rubik,sans-self] text-base font-bold">Matthew Olamide</Typography>
                        <Typography className="font-[Rubik,sans-self] text-base ">@matthewOlamide</Typography>
                    </div>
                    <div className="flex flex-row flex-wrap justify-between p-3">
                        <Typography className="font-[Rubik,sans-self] text-base">Sun Jun 30 2024</Typography>
                        <Typography className="flex items-center"><Rating value={4}/><span className="font-[Rubik,sans-self] text-lg font-bold">4.5</span></Typography>
                    </div>
                    <hr></hr>
                    <div className="flex flex-col flex-wrap gap-0">
                        <div className="flex flex-wrap flex-row justify-between pt-3">
                            <Typography className="font-[Rubik,sans-self] text-[#64748b] font-semibold">Contact Info</Typography>
                            <img src="/assets/icons/ic_verify.svg" className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-wrap flex-row justify-between pt-3">
                            <Typography className="font-[Rubik,sans-self] text-[#64748b] font-semibold">Contact Info</Typography>
                            <img src="/assets/icons/ic_verify.svg" className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-wrap flex-row justify-between pt-3">
                            <Typography className="font-[Rubik,sans-self] text-[#64748b] font-semibold">ID Verification</Typography>
                            <img src="/assets/icons/ic_verify.svg" className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center gap-2 pt-3">
                            <Button variant="filled" className="w-[47%] m-0 p-0">View Detail</Button>
                            <Button variant="outlined" className="w-[47%] flex flex-row items-center justify-center gap-3"><Icon icon="bi:chat-dots"></Icon>Chat</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex flex-row justify-between flex-wrap">
                    <Typography className="font-[Rubik,sans-self]" variant="h5">Timeline</Typography>
                    <CustomSelect items={["Sort By: Recent","Sort By:Toppest"]}></CustomSelect>
                </div>
                <div className="flex justify-center flex-wrap">
                    <CustomTimeline />
                </div>
            </div>
        </div>
    );
}
