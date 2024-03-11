import React from 'react'
import { FaFileSignature } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";

function card() {
  return (
    <div className=" relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaFileSignature />
        <p className="text-xs leading-tight mt-5 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <div className="footer absolute bottom-0 w-full py-3 px-8 left-0"></div>
            <div className="flex items-center justify-between mb-5">
                <h5>.4mb</h5>
                <span className="w-7 h-5 bg-zinc-200 rounded-full flex items-center justify-center">
                <IoIosDownload size=".9em" color='#000'/>

                </span>
            </div>
    </div>
  )
}

export default card