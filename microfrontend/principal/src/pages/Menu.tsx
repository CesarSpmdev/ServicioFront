import { useEffect, useState } from "react";
import { Body } from "./Body"
import { Navbar } from "./Navbar"

export const Menu = () => {

    const [scrollY, setScrollY] = useState<number>(window.scrollY);

    useEffect(() => {
        const handleResize = (): void => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleResize);

        return () => {
            window.removeEventListener("scroll", handleResize);
        };
    }, []);

    

    return (
        <div style={{
            height: "100vh",
            width: "100%",
            flexDirection: "column",
            display: "flex",
        }}>
            <Navbar scrollActivado={scrollY} />
            <Body />
            <footer>

            </footer>
        </div>
    )
}