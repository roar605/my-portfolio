import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import codingRohit from "../assets/computer.png";

function Hero() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="flex p-4">
      {/* for my description */}
      <div className="w-[50%]">
        <h1>Rohit Kumar Singh</h1>
      </div>

      {/* for the image */}
      <div className="flex justify-center">
        <img src={codingRohit} width={400}></img>
      </div>
    </div>
   
  )
}

export default Hero