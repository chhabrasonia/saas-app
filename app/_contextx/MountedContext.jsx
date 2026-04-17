"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MountedContext = createContext(null);

function MountedProvider({ children = <></> }) {
    const [mounted, setMounted] = useState(false);
    
    const init = async () => {
        // Logic goes here... (if any)

        setMounted(true)
    };


    useEffect(() => {
        init();
    }, []);

    const contextValue = useMemo(
        () => ({
            mounted,
            setMounted,
        }),
        [mounted, setMounted]
    );

    return <MountedContext.Provider value={contextValue}>{children}</MountedContext.Provider>;
}

function useMounted() {
    const context = useContext(MountedContext);

    if (!context) {
        throw new Error("useMounted must be used within a MountedProvider.");
    }

    return context;
}

export { MountedProvider, useMounted };
