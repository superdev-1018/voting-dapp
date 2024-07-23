import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function AuthMain({children}:any) {
  return (
    <div className="flex justify-center lg:grid grid-cols-2">
            <div className="hidden lg:block md:col-span-1 bg-[#2B2929] p-12">
                <div className="flex flex-row flex-wrap items-center gap-3">
                    <img src="/assets/logo.svg" className="w-12 h-12"></img>
                    <Typography variant="h3" className="font-[Rubik,sans-self] text-white">Safeli</Typography>
                </div>
                <div className="w-full h-full">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-full w-full p-8" autoplay={true}>
                        {[1,2,3].map(()=>(<SwiperSlide className="h-full w-full">
                            <div className="h-full flex flex-wrap flex-col justify-center text-center pb-12 bg-[#2B2929]">
                                <img src="/assets/Illustration.png" className="object-contain p-8"/>
                                <Typography variant="h3" className="text-white font-[Rubik,sans-self]">Customizable Multipurpose Dashboard</Typography>
                                <Typography className="text-white font-[Rubik,sans-self]">Everything you need in an easily customizable dashboard.</Typography>
                            </div>   
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <div className=" col-span-2 lg:col-span-1">
                {children}
            </div>
        </div>
  );
}
