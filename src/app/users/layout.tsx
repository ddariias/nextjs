import React from 'react';

type Props ={
    children : React.ReactNode
}

const UsersLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UsersLayout;
