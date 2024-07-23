import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input
} from "@material-tailwind/react";

export default function Index() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full lg:w-9/12 bg-black">
        <div className="w-full">
          <div className="flex flex-row justify-between items-center p-3 lg:p-10">
            <div className="flex flex-row gap-2 ml-5">
              <Link to="/" className="active:opacity-75">
                <img
                  src="/assets/tahir/banner-1.png"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
              <Link to="https://t.me/Qanonsolanaportal" className="active:opacity-75">
                <img
                  src="/assets/tahir/banner-2.png"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <Link to="https://x.com/Qanonsolana?s=09" className="active:opacity-75">
                <img
                  src="/assets/tahir/banner-3.png"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>
            <div>
              <Button className="m-0 p-0">
                <img
                  src="/assets/tahir/Link.png"
                  className="w-[128px] lg:w-[196px] h-[40px] lg:h-[68px]"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-36 py-16">
            <img
              src="/assets/tahir/slogan.png"
              className="w-1/2 xl:w-[399px]"
            />
            <img
              src="/assets/tahir/right-bg.png"
              className="w-1/2 xl:w-[399px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="w-max-[1200px] flex justify-center">
            <div className="w-full lg:w-[681px] h-full flex flex-col justify-center p-3 lg:p-5">
              <div className="mt-14 lg:mt-28 flex justify-center my-12">
                <Button className="p-0 m-0">
                  <img
                    src="/assets/tahir/pfp_maker.png"
                    className="w-[325px]"
                  />
                </Button>
              </div>
              <div className="w-full w-max-[681px] h-min-[372px] flex justify-center items-center">
                <Card className="w-[330px] sm:w-[342px] h-[332px] items-center">
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-5 text-center"
                    >
                      Put your Mask on!
                    </Typography>
                    <div className="w-[302px] h-[152px] border border-gray-300 rounded-xl"></div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1 relative">
                        <Button className="">Upload Image</Button>
                        
                      </div>
                      <div className="col-span-1">
                        <Button className="bg-[#800000]">Finish the Job</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="my-12 flex justify-center">
                <Button className="m-0 p-0">
                  <img
                    src="/assets/tahir/banner_maker.png"
                    className="w-[325px]"
                  />
                </Button>
              </div>
              <div className="w-full w-max-[681px] h-min-[372px] flex justify-center items-center">
                <Card className="w-[330px] sm:w-[342px] h-[332px] items-center">
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-5 text-center"
                    >
                      Modify your banner!
                    </Typography>
                    <div className="w-[290px] sm:w-[302px] h-[152px] border border-gray-200 rounded-xl"></div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1">
                        <Button className="">Upload Image</Button>
                      </div>
                      <div className="col-span-1 flex items-stretch">
                        <Button className="bg-[#800000] w-full">Save</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div className="my-12">
            <Typography className=" text-center text-lg text-gray-100">
              <span className="flex flex-wrap justify-center">Bbaj9k5S1Us2RepTMrejjaPYD tLdmqGNZT11puQCpump</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
