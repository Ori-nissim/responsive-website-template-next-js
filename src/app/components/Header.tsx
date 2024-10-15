"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";

export default function Header() {

    const [isMenuShown, setMenuShown] = useState(false)

    // Toggle function to show/hide the menu fdfd
    const toggleMenu = () => {
        setMenuShown(!isMenuShown);
    };

    return (
        <nav className="bg-gray-200 px-4 py-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl text-gray-600 font-bold">Website Title</h1>
                <ul className="space-x-4 hidden sm:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/link1">link1</a></li>
                    <li><a href="/link2">link2</a></li>
                    <li><a href="/link3">link3</a></li>

                </ul>
                <ul className="flex space-x-4 m-r-4 hidden sm:flex">
                    <li><a className="rounded-md bg-blue-300 border p-2 font-bold" href="/log-in">Log In</a></li>
                    <li><a href="/sign-up">Sign Up</a></li>
                </ul>
                <BurgerMenu toggleMenu={toggleMenu} />
            </div>
            {isMenuShown && <DropDownMenu />}
        </nav>
    );
}
