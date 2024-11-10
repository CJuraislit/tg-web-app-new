import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegarm";
import Avatar from "../Avatar/Avatar";
// import Button from "../Button/Button";
import "./Header.css"
import {TonConnectButton} from "@tonconnect/ui-react";
const Header = () => {
    const {tg, user} = useTelegram()

    useEffect(() => {
        tg.ready();
    },[tg]);
    // const username = user.username

    return (
        <>
            <div className={"user_container"}>
                <Avatar />
                <div className={"user_container_info"}>
                    <div>{"@" + user?.username}</div>
                    {/*<Button text={"Connect Wallet"}></Button>*/}
                    <TonConnectButton />
                </div>
            </div>
        </>

    );
};

export default Header;
