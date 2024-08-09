import React from 'react';

const PostPage = ({searchParams}:any) => {
    const post = JSON.parse(searchParams.data)

    return (
        <div>
            {post.body}
        </div>
    );
};

export default PostPage;