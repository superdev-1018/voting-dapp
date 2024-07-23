import { Button } from '@material-tailwind/react';
import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

interface IPropsOfIconBtnComponent {
    className?: string;
    children?: ReactNode | string;
    [key: string]: any;
    label?:string;
    icon ?:string;
    hiddenLabel?:boolean
  }

export default function CustomIconButton({ className = '',label="Ticket",hiddenLabel=false, icon="fas fa-heart" , children, ...others}: IPropsOfIconBtnComponent) {
  return (
    <div className='flex flex-col justify-center text-center'>
        <div>
            <Button
            variant="text"
            className={`rounded-full text-center text-2xl normal-case  shadow-none hover:shadow-none p-[5px] ${className}`}
            {...others}
            style={{fontFamily:"Rubik"}}
            >
                    <img src={icon} style={{width:"25px",height:"25px"}}/>
            </Button>
        </div>
        <div className='text-[#64748b] text-[12.8px]'  style={{fontFamily:"Rubik,sans-self"}}>
            {!hiddenLabel?label:null}
        </div>
    </div>
  )
}

