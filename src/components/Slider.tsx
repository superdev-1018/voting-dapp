import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function CustomSlider(props: any) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      grabCursor={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="p-2">
        <Card className="w-full shadow-xl">
          <CardBody>
          <div className="flex flex-row justify-between p-4">
              <Typography variant="h4">Milestone</Typography>
              <div>
                <Button
                  variant="text"
                  className="rounded-full p-2"
                  onClick={props.opendraw}
                >
                  <Icon icon="ci:note-edit" className="text-2xl" />
                </Button>
                <Button variant="text" className="rounded-full p-2">
                  <Icon icon="fluent:delete-24-regular" className="text-2xl text-red-400" />
                </Button>
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between p-4">
                <div>
                    <Typography variant="h6">Milestone1 Name</Typography>
                    <Typography>Milestone Name</Typography>
                    
                </div>
                <div>
                    <Typography variant="h6">Phrase Amount</Typography>
                    <Typography>$ 0</Typography>
                </div>
            </div>
            <div className="p-4">
                <Typography variant="h6">Milestone Description</Typography>
                <Typography>We need you as a Frontend Developer to review our prototype and suggest improvements. This project is a responsive web application designed to run on a desktop,</Typography>
            </div>  
            <div className="p-4">
                <Typography variant="h6">Attachment</Typography>
                <Link to="/" className="flex items-center gap-2">invoice_2024_05_15.pdf <Icon icon="tdesign:link-1" className="text-lg"></Icon></Link>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide >
      <SwiperSlide className="p-2">
        <Card className="w-full shadow-xl">
          <CardBody>
          <div className="flex flex-row justify-between p-4">
              <Typography variant="h4">Milestone</Typography>
              <div>
                <Button
                  variant="text"
                  className="rounded-full p-2"
                  onClick={props.opendraw}
                >
                  <Icon icon="ci:note-edit" className="text-2xl" />
                </Button>
                <Button variant="text" className="rounded-full p-2">
                  <Icon icon="fluent:delete-24-regular" className="text-2xl text-red-400" />
                </Button>
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between p-4">
                <div>
                    <Typography variant="h6">Milestone1 Name</Typography>
                    <Typography>Milestone Name</Typography>
                    
                </div>
                <div>
                    <Typography variant="h6">Phrase Amount</Typography>
                    <Typography>$ 0</Typography>
                </div>
            </div>
            <div className="p-4">
                <Typography variant="h6">Milestone Description</Typography>
                <Typography>We need you as a Frontend Developer to review our prototype and suggest improvements. This project is a responsive web application designed to run on a desktop,</Typography>
            </div>  
            <div className="p-4">
                <Typography variant="h6">Attachment</Typography>
                <Link to="/" className="flex items-center gap-2">invoice_2024_05_15.pdf <Icon icon="tdesign:link-1" className="text-lg"></Icon></Link>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="p-2">
      <Card className="w-full shadow-xl">
          <CardBody>
            <Button variant="text" className="w-full h-[370px] normal-case" ripple={true} onClick={props.opendraw}>
                <div className="flex flex-col justify-center items-center gap-10 max-h-full">
                        <img src="/assets/icons/ic_add.svg" />
                        <Typography variant="h5" className="text-[#64748b] text-lg font-[Rubik,sans-self]">Add MileStone</Typography>
                </div>
            </Button>
          </CardBody>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}
