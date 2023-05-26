import React from "react";

export default function Modal(props) {

    return <div className="bg-[#6666] absolute top-0 left-0 flex items-center justify-center w-full h-screen z-10">

        <div className="bg-white flex flex-col gap-4 p-4 md:w-[480px] w-full rounded-sm">

            <div className="flex gap-2 items-center justify-center"> { props.header } </div>

            <div> { props.content } </div>

        </div>

    </div>

}