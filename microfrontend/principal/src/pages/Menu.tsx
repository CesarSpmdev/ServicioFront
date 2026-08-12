import { useEffect, useState } from "react";
import { Body } from "./Body";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Menu = () => {
    const [scrollY, setScrollY] = useState<number>(window.scrollY);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            width: "100%",
            flexDirection: "column",
            display: "flex",
        }}>
            <Navbar scrollActivado={scrollY} />
            <Body />
            <Footer />
        </div>
    );
};