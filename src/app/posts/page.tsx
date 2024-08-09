import React from 'react';
import {getAllPosts} from "@/services/api.service";
import Link from "next/link";

const PostPage = async () => {

    const allPosts = await getAllPosts()

    return (
        <div>
            {
                allPosts.map(value => <div key={value.id}><Link href={{pathname:'/posts/' + value.id, query:{data:JSON.stringify(value)}}}>{value.title}</Link></div>)
            }
        </div>
    );
};

export default PostPage;