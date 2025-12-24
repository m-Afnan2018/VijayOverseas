"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Pages", href: "/pages" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <Link href="/">VB</Link>
                </div>

                {/* Links */}
                <nav className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                pathname === link.href
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Link href="/get-started" className="cta-btn">
                    Get Started
                </Link>
            </div>
        </header>
    );
}
