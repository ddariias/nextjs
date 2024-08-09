import React from 'react';
import {getAllUsers} from "@/services/api.service";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const UserPage = ({searchParams}: any)=> {

    const user = JSON.parse(searchParams.data)

    return (
        <div>
            {user.email}
        </div>
    );
};

export default UserPage;