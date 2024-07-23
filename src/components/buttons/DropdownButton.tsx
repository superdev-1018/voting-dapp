import {
    Button, Popover,
    PopoverHandler,
    PopoverContent, List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    IconButton,
    ListItemSuffix
} from '@material-tailwind/react';
import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

interface IPropsOfIconBtnComponent {
    className?: string;
    children?: ReactNode | string;
    [key: string]: any;
    label?: string;
    icon?: string;
    hiddenLabel?:boolean;
}

export default function DropdownButton({ className = '', label = "Ticket",hiddenLabel=false, icon = "fas fa-heart", children, ...others }: IPropsOfIconBtnComponent) {
    return (
        <Popover placement="bottom-start">
            <PopoverHandler>

                <div className='flex flex-col justify-center text-center'>
                <div className='absolute z-50'><span className="rounded-full text-xs font-medium content-[''] leading-none grid place-items-center bg-red-500 text-white min-w-[20px] min-h-[20px] absolute z-50 notification-badge">2</span></div>
                    <div>
                        <Button
                            variant="text"
                            className={`rounded-full text-center text-xl shadow-none hover:shadow-none p-[6px] ${className}`}
                            {...others}
                        >
                            
                            <img src={icon} style={{width:"26px",height:"26px"}}/>
                        </Button>
                    </div>
                    <div className='text-[#64748b] text-[12.8px] ' style={{fontFamily:"Rubik,sans-self"}}>
                        {!hiddenLabel ?label:null}
                    </div>
                </div>
            </PopoverHandler>
            <PopoverContent className='m-0 p-0 z-50'>
                <Card className="w-96 left-100">
                    <div className='text-center border-bottom-1 pt-4 pb-1 pl-3 pr-3 border bottom-1'>
                        <div className='font-bold text-lg float-left pt-2'>
                            Notification
                        </div>
                        <div className='float-right'>
                            <IconButton variant="text" className="rounded-full text-xl">
                                <Icon icon="ic:baseline-close" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex w-max gap-4 pt-2">
                        <Button variant="filled" className='rounded-full ml-5 pt-2 pb-2 text-[#2563eb] bg-[#eff6ff]'>All Notification</Button>
                        <Button variant="filled" className='rounded-full pt-2 pb-2 bg-[#F9FAFB] text-[#64748b]'>Unread</Button>
                    </div>
                    <p className=' ml-5 mt-4 text-sm text-[#64748b] font-bold'>Today</p>
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Software Engineer @ Material Tailwind
                                </Typography>
                            </div>
                            <ListItemSuffix>
                                <IconButton variant="text" color="blue-gray" className='text-center'>
                                    <span>8:15</span>
                                    <div className='w-2.5 h-2.5 bg-[#ed4f9d] rounded-full ml-3 mt-2'></div>
                                </IconButton>
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Alexander
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Backend Developer @ Material Tailwind
                                </Typography>
                            </div>
                            <ListItemSuffix>
                                <IconButton variant="text" color="blue-gray" className='text-center'>
                                    <span>8:45</span>
                                    <div className='w-2.5 h-2.5 bg-[#ed4f9d] rounded-full ml-3 mt-2'></div>
                                </IconButton>
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Emma Willever
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    UI/UX Designer @ Material Tailwind
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Software Engineer @ Material Tailwind
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Emma Willever
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    UI/UX Designer @ Material Tailwind
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </PopoverContent>
        </Popover>





    )
}