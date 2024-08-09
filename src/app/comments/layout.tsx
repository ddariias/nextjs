import React from "react";

type Props ={
    children: React.ReactNode
}

const CommentsLayout = ({children}: Props)=>{
    return (
        <div>
            {children}
        </div>

    );
}
export default CommentsLayout;