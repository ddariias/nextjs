import React from 'react';
import {getAllComments} from "@/services/api.service";

const CommentsPage = async () => {

    const allComments = await getAllComments()

    return (
        <div>
            {
                allComments.map(value => <div key={value.id}>{value.id}: {value.body}</div>)
            }
        </div>
    );
};

export default CommentsPage;