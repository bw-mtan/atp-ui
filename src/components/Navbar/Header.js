import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Tabs,
    Tab
} from "../../scripts/js/vendor/ui-core";
import {
    SearchFilledIcon,
    NotificationsOutlinedIcon,
    LogoutFilledIcon,
} from "../../scripts/js/vendor/ui-core";
import { IconButton } from "@mui/material";
const Header = () => {
    // states/constants
    const [setTab, setSelectedTab] = useState(0);
    const navigate=useNavigate();
    const menus=['/', '/assets', '/contracts', '/whitelist', '/transactions'];

    const logo = (
        <span className="logo">
            <a href="/">
                <img src={require("./DBLogo.svg")} width="32" height="32" alt="logo" />
            </a>
        </span>
    );
    const selectTab = (e, newValue) => {
        setSelectedTab(newValue);
        navigate(menus[newValue]);
    }
    return (
        <div className="topNavigation">
            <div className="topNavStates">
                <div className="dbLogo">
                    {logo}
                    <Tabs
                        onChange={selectTab}
                        value={setTab}
                    >
                        <Tab label="Dashboard" />
                        <Tab label="Assets" />
                        <Tab label="Smart Contracts" />
                        <Tab label="WhiteList" />
                        <Tab label="Transactions" />
                    </Tabs>
                </div>
                <div className="rightMenu">
                    <div className="iconButton">
                        <SearchFilledIcon
                            style={{ width: "24px", height: "24px", color: "FFFFFF" }}
                        />
                    </div>
                    <div className="iconButton">
                        <NotificationsOutlinedIcon
                            style={{ width: "24px", height: "24px", color: "FFFFFF" }}
                        />
                    </div>
                    <div className="iconButton">
                        <IconButton size="small">
                            <LogoutFilledIcon
                                style={{ width: "24px", height: "24px", color: "FFFFFF" }}
                            />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
