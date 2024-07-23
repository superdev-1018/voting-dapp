import { Link } from "react-router-dom";
import { Button,Typography } from "@material-tailwind/react";

export default function Blank() {
  return (
    <section className="border-box flex flex-col justify-center items-center max-w-[480px] py-24 mx-auto">
      <Typography variant="h3" className="font-[Rubik,sans-self] pb-6">Sorry, page not found!</Typography>
      <Typography className="text-center font-[Rubik,sans-self] text-[#64748b]">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
      </Typography>
      <div className="p-10 md:p-20">
        <img src="/assets/illustrations/illustration_404.svg" className="h-full w-full" />
      </div>
      <Button variant="filled" className="bg-[#39cef9] px-7 py-4 font-[Rubik,sans-self] font-bold"><Link to="/">Go to Home</Link></Button>
    </section>
  )
}