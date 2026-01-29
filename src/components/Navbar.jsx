import {cn} from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [ // Navigation items for the Navbar
    {name: "Home", href: "#Shubham"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => { // Navbar component
    const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Update state based on scroll position
        }

        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }, []);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a>
                    <span>
                        <span className="text-glow"> Shubham </span> Portfolio
                    </span>
                </a>
            </div>
        </nav>
    );
};