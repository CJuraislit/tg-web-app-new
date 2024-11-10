import React from 'react';
import {useTelegram} from "../../hooks/useTelegarm";
import "./Avatar.css"

const Avatar = () => {
    const {user} = useTelegram()

    const firstNameLetter = user?.first_name.slice(0,1).toUpperCase()
    const lastNameLetter = user?.last_name?.slice(0,1).toUpperCase()


    return (
    <div className={"avatar"}>
        {firstNameLetter + lastNameLetter}
    </div>
  );
};

export default Avatar;
