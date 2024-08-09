import React from 'react';
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

const UserPage = async () => {

    const allUsers = await getAllUsers()

    return (
        <div>
            {
                allUsers.map(value => <div key={value.id}><Link href={{pathname: '/users/' + value.id, query: {data: JSON.stringify(value)}}}>{value.username}</Link></div>)
            }
        </div>
    );
};

export default UserPage;