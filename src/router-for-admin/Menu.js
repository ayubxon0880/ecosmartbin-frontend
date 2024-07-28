import React from "react";
import * as IoIcons from "react-icons/io";
import {PiChalkboardTeacherBold} from "react-icons/pi";
import {FiUsers} from "react-icons/fi";
import {FaMoneyCheckDollar} from "react-icons/fa6";
import {SiTestcafe} from "react-icons/si";
import {SiGooglenews} from "react-icons/si";
import {NavbarDataForAdmin} from "../components/NavbarData";

const Menu = () => {
    return (
        <>
            <div className="home">
                <div className={"container"}>
                    <div className={"block-container"}>
                        {
                            NavbarDataForAdmin.map((item) => {
                                return (
                                    <>
                                        <a href={item.path} className={"grid-item"}>
                                            {item.icon}
                                            <p>{item.title}</p>
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;