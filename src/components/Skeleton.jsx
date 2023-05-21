import React from "react";

export default function Skeleton() {

    return <div className="container my-4 mx-auto text-gray-800">

        <div className="flex animate-pulse gap-4 flex-col md:flex-row">

            <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
                <div className="flex items-center justify-center gap-2"> 
                
                    <span className="h-4 w-8 bg-gray-200"></span>

                    <span className="h-4 w-32 bg-gray-200"></span>
                    
                </div>

                <div className="flex flex-col flex-1 gap-4 pb-8">

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>
                    
                </div>

            </div>

            <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
                <div className="flex items-center justify-center gap-2"> 
                
                    <span className="h-4 w-8 bg-gray-200"></span>

                    <span className="h-4 w-32 bg-gray-200"></span>
                    
                </div>

                <div className="flex flex-col flex-1 gap-4 pb-8">

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>
                    
                </div>

            </div>

            <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
                <div className="flex items-center justify-center gap-2"> 
                
                    <span className="h-4 w-8 bg-gray-200"></span>

                    <span className="h-4 w-32 bg-gray-200"></span>
                    
                </div>

                <div className="flex flex-col flex-1 gap-4 pb-8">

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>

                    <div className="h-24 bg-gray-200 p-2 gap-2"></div>
                    
                </div>

            </div>

        </div>

    </div>

}