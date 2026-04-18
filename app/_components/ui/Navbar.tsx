"use client";

import Link from "next/link";
import { useState } from "react";
import { Chevron } from "../ui/Icons";

const Navbar = ({ navItems, isMobile = false, onNavigate }) => {
    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <ul className={`flex ${isMobile ? "flex-col gap-2 p-5" : "gap-6"}`}>
            {navItems?.map((item) => {
                const isOpen = activeId === item.id;
              
                return (
                    <li key={item.id} className="relative">
                        {/* MAIN ITEM */}
                         <div
                            className="flex items-center justify-between gap-2 cursor-pointer py-2"
                            onClick={() => toggle(item.id)}
                        >   
                           {/* If NO children → make it a Link */}
                            {item.children?.length === 0 ? (
                                <Link
                                    href={item.url}
                                    className={`hover:text-primary ${
                                        activeId === item.id ? "text-primary" : "text-gray-700"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <span
                                    className={`hover:text-primary ${
                                        isOpen ? "text-primary" : "text-gray-700"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            )}

                            {/* Chevron only if children exist */}
                            {item.children?.length > 0 && (
                                <span className="md:pt-1">
                                    <Chevron
                                        className={`transition-transform ${
                                            isOpen ? "rotate-180 text-primary" : "text-gray-500"
                                        }`}
                                    />
                                </span>
                            )}
                        </div>

                        {/* DESKTOP DROPDOWN */}
                        {!isMobile &&
                            isOpen &&
                            item.children?.length > 0 && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md z-50">
                                    <ul className="py-4">
                                        {item.children.map((sub) => (
                                            <li 
                                                key={sub.id}
                                                className=" hover:bg-gray-50"
                                            >
                                                <Link href={sub.url} className="px-5 py-3 block group">
                                                    <p className="text-sm font-semibold group-hover:text-primary text-gray-800">
                                                        {sub.title}
                                                    </p>

                                                    {sub.description && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {sub.description}
                                                        </p>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        {/* MOBILE SUBMENU */}
                        {isMobile &&
                            isOpen &&
                            item.children?.length > 0 && (
                                <ul className="pl-4 mt-2 space-y-3">
                                    {item.children.map((sub) => (
                                        <li key={sub.id}>
                                            <Link
                                                href={sub.url}
                                                onClick={onNavigate}
                                                className="block"
                                            >
                                                <p className="text-sm font-medium text-gray-700">
                                                    {sub.title}
                                                </p>

                                                {sub.description && (
                                                    <p className="text-xs text-gray-500">
                                                        {sub.description}
                                                    </p>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Navbar;