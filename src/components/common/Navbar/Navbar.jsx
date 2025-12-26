"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Image from "next/image";
import logo from '@/assets/images/logos/logo.svg'

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Why Choose Us", href: "/chooseUs" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <Link href="/"><Image src={logo} alt="logo" /></Link>
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
