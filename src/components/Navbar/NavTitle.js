import React, { useState } from 'react';
import {
    Menu,
    MenuList,
    MenuItem,
    Grid,
} from "../../scripts/js/vendor/ui-core";
import { ArrowDropDownFilledIcon } from "../../scripts/js/vendor/ui-core";
import './navtitle.css';
const NavTitle = ({title, subtitle}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="NavTitleNavigation">
            <div className="frame">
                <div><span className='navtitle'>{title}</span></div>
                <div>{subtitle}</div>
            </div>
        </div>
    )
};
export default NavTitle;
