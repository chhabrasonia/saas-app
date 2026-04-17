"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Navbar from "./Navbar";

const Header = ({ data: { navigation, logo } }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="px-8 text-sm relative bg-white">
            <div className="flex items-center justify-between h-16">

                {/* Logo */}
                <div className="w-[130px]">
                    <Image
                        src={logo?.url}
                        width={130}
                        height={24}
                        alt={logo?.alt || "logo"}
                        className="w-full h-auto"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:block">
                    <Navbar navItems={navigation} />
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex gap-3">
                    <Button size="md">Book a Demo</Button>
                    <Button variant="outline" size="md">
                        Start Free Trial
                    </Button>
                </div>

                {/* Mobile button (SVG instead of lucide) */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen((p) => !p)}
                >
                    {mobileOpen ? (
                        <span className="text-xl">✕</span>
                    ) : (
                        <span className="text-xl">☰</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50">
                    <Navbar
                        navItems={navigation}
                        isMobile
                        onNavigate={() => setMobileOpen(false)}
                    />

                    <div className="p-5 flex flex-col gap-3 border-t">
                        <Button size="md" className="w-full">
                            Book a Demo
                        </Button>
                        <Button variant="outline" size="md" className="w-full">
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;