import { useState } from "react";
import { PersonRegular, PersonAddRegular } from "@fluentui/react-icons";
import qhaluma_colores from "../assets/images/qhaluma_colores.png";
import qhaluma_logo from "../assets/images/qhaluma_logo.png";

const PADDING = "60px";

interface navbarProps {
    scrollActivado: number;
}

export const Navbar = (props: navbarProps) => {
    const [hoverIngresar, setHoverIngresar] = useState<boolean>(false);
    const [hoverRegistrar, setHoverRegistrar] = useState<boolean>(false);

    const esInicio = props.scrollActivado === 0;
    const colorTexto = esInicio ? "#ffffff" : "#1a1a1a";

    const linkStyle = {
        color: colorTexto,
        fontSize: "13px",
        letterSpacing: "0.12em",
        textDecoration: "none",
        cursor: "pointer",
        whiteSpace: "nowrap" as const,
        transition: "color 0.3s ease",
    };

    const botonBaseStyle = {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        border: `1px solid ${colorTexto}`,
        borderRadius: "999px",
        padding: "7px 18px",
        fontSize: "13px",
        letterSpacing: "0.06em",
        cursor: "pointer",
        transition: "background-color 0.2s ease, color 0.2s ease",
    };

    return (
        <div style={{
            height: "110px",
            background: esInicio ? "black" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${PADDING}`,
            position: "sticky",
            top: 0,
            zIndex: 100,
            transition: "background-color 0.3s ease",
        }}>
            <div style={{ display: "flex", gap: "36px", flex: 1 }}>
                <span style={linkStyle}>INICIO</span>
                <span style={linkStyle}>ACERCA DE</span>
            </div>

            <div style={{ flexShrink: 0 }}>
                {esInicio ?
                    <img src={qhaluma_colores} alt="qhaluma" style={{ height: "140px" }} /> :
                    <img src={qhaluma_logo} alt="qhaluma" style={{ height: "140px" }} />
                }
            </div>

            <div style={{ display: "flex", gap: "16px", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <button
                    onMouseEnter={() => setHoverIngresar(true)}
                    onMouseLeave={() => setHoverIngresar(false)}
                    style={{
                        ...botonBaseStyle,
                        background: hoverIngresar ? colorTexto : "transparent",
                        color: hoverIngresar ? (esInicio ? "black" : "white") : colorTexto,
                    }}
                >
                    <PersonRegular fontSize={16} />
                    INICIAR SESIÓN
                </button>

                <button
                    onMouseEnter={() => setHoverRegistrar(true)}
                    onMouseLeave={() => setHoverRegistrar(false)}
                    style={{
                        ...botonBaseStyle,
                        background: hoverRegistrar ? colorTexto : "transparent",
                        color: hoverRegistrar ? (esInicio ? "black" : "white") : colorTexto,
                    }}
                >
                    <PersonAddRegular fontSize={16} />
                    REGISTRARSE
                </button>
            </div>
        </div>
    );
};