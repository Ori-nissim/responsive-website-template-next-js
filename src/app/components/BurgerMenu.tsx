"use client";
                                    // destructure      expected function prototype
export default function BurgerMenu({ toggleMenu }: { toggleMenu: () => void }) {

  
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="text-blue-500 cursor-pointer sm:hidden"
        onClick={toggleMenu}
    >
        <rect x="4" y="6" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="16" width="16" height="2" />
    </svg>
}