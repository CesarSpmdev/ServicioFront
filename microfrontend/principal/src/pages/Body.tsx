import { useEffect, useState } from "react";

export const Body = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div style={{
            backgroundColor: "black",
            height: "75%",
            width: "100%"

        }}>
            <h1
                style={{
                    color: "white", // ← agrega esto
                    transform: visible ? "translateX(0)" : "translateX(-100px)",
                    opacity: visible ? 1 : 0,
                    transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                }}
            >
                Bienvenido a mi página
            </h1>

        </div>
    )
}