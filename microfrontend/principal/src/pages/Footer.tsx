import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import whatsapp from "../assets/images/whatsapp.png";

export const Footer = () => {
    const redes = [
        { nombre: "Instagram", url: "https://instagram.com/qhaluma", logo: instagram },
        { nombre: "Facebook", url: "https://facebook.com/qhaluma", logo: facebook },
        { nombre: "Youtube", url: "https://Youtube.com/@qhaluma", logo: youtube },
        { nombre: "WhatsApp", url: "https://wa.me/51999999999", logo: whatsapp },
    ];

    return (
        <footer
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "48px 40px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: 0, fontSize: "22px", letterSpacing: "0.02em" }}>QHALUMA</h2>
                <p style={{ margin: "6px 0 0", color: "#9aa1ae", fontSize: "13px", letterSpacing: "0.08em" }}>
                    SALUD · KAWSAY · JAKAÑA
                </p>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
                {redes.map((red) => (
                    <a
                        key={red.nombre}
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={red.nombre}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "36px",
                            height: "36px",
                        }}
                    >
                        <img
                            src={red.logo}
                            alt={red.nombre}
                            style={{
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </a>
                ))}
            </div>

            <div
                style={{
                    borderTop: "1px solid #2c313d",
                    paddingTop: "18px",
                    textAlign: "center",
                    fontSize: "12.5px",
                    color: "#9aa1ae",
                }}
            >
                © {new Date().getFullYear()} Qhaluma. Todos los derechos reservados.
            </div>
        </footer>
    );
};