import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {PiChalkboardTeacherBold} from "react-icons/pi";


export const NavbarDataForAdmin = [
    {
        title: "Menu",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        title: "Add news",
        path: "/news-form",
        icon: <PiChalkboardTeacherBold/>,
        cName: "nav-text",
    },
    {
        title: "Add member",
        path: "/member-form",
        icon: <PiChalkboardTeacherBold/>,
        cName: "nav-text",
    },
    {
        title: "Members",
        path: "/members",
        icon: <IoIcons.IoIosPeople/>,
        cName: "nav-text",
    },
    {
        title: "News",
        path: "/news",
        icon: <IoIcons.IoLogoDesignernews/>,
        cName: "nav-text",
    },
];
