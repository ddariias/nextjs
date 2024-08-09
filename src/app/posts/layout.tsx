import React from "react";

type Props = {
    children: React.ReactNode
}

const PostsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
}
export default PostsLayout;