import React from "react";

function SkeletonSection(props) {

    return <div className="bg-white flex flex-col flex-1 p-4 gap-4">
            
        <div className="flex items-center justify-center gap-2"> 
        
            <span className="h-6 w-8 bg-gray-200"></span>

            <span className="h-6 w-32 bg-gray-200"></span>
            
        </div>

        <div className="flex flex-col flex-1 gap-4 pb-8">

            { props.children }

        </div>
        
    </div>

}

function SkeletonCard() {

    return <div className="bg-gray-200 h-24 p-2 gap-2"></div>

}

export default function Skeleton() {

    return <div className="container my-4 mx-auto text-gray-800">

        <div className="flex animate-pulse gap-4 flex-col md:flex-row">

            <SkeletonSection>
                <SkeletonCard/>
            </SkeletonSection>

            <SkeletonSection>
                <SkeletonCard/>
                <SkeletonCard/>
            </SkeletonSection>

            <SkeletonSection>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
            </SkeletonSection>

        </div>

    </div>

}