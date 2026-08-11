import { useReveal } from "../utils/useReveal";

const PADDING = "60px";

export const Body = () => {
    const seccion1 = useReveal<HTMLDivElement>();
    const seccion2Texto = useReveal<HTMLDivElement>();
    const seccion2Imagen = useReveal<HTMLDivElement>();
    const seccion3 = useReveal<HTMLDivElement>();

    return (
        <>
            <div style={{
                backgroundColor: "black",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: `0 ${PADDING}`,
            }}>
                <div
                    ref={seccion1.ref}
                    style={{
                        color: "white",
                        maxWidth: "620px",
                        transform: seccion1.visible ? "translateX(0)" : "translateX(-100px)",
                        opacity: seccion1.visible ? 1 : 0,
                        transition: "all 0.6s ease-out",
                    }}
                >
                    <h1 style={{ fontSize: "52px", margin: 0, lineHeight: 1.1 }}>
                        Tu historial médico, de una vez y para siempre.
                    </h1>
                    <p style={{ fontSize: "18px", color: "#9aa1ae", marginTop: "20px", lineHeight: 1.6 }}>
                        Un solo lugar para tus citas, tus resultados y los de tu familia. Sin carpetas, sin repetir exámenes, sin empezar de cero en cada hospital.
                    </p>
                </div>
            </div>

            <div style={{
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: "60px",
                padding: `100px ${PADDING}`,
            }}>
                <div
                    ref={seccion2Texto.ref}
                    style={{
                        flex: 1,
                        transform: seccion2Texto.visible ? "translateX(0)" : "translateX(-100px)",
                        opacity: seccion2Texto.visible ? 1 : 0,
                        transition: "all 0.6s ease-out",
                    }}
                >
                    <span style={{ fontSize: "13px", color: "#1d7a73", letterSpacing: "0.1em", fontWeight: 600 }}>
                        CÓMO FUNCIONA
                    </span>
                    <h2 style={{ fontSize: "34px", color: "#1a1a1a", marginTop: "8px" }}>
                        Agenda hoy. Documenta hoy mismo.
                    </h2>
                    <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, marginTop: "20px" }}>
                        Programa una cita y Qhaluma te avisa por WhatsApp un día antes y el mismo día, para que ningún control se te escape.
                    </p>
                    <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, marginTop: "14px" }}>
                        Al salir de la consulta, registra lo que pasó ahí mismo: diagnóstico, indicaciones del médico, resultados, radiografías. Todo con fecha y con nombre, listo para el siguiente doctor.
                    </p>
                    <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, marginTop: "14px" }}>
                        Una cuenta, hasta diez personas. Administra la salud de toda tu familia sin abrir diez apps distintas.
                    </p>
                </div>
                <div
                    ref={seccion2Imagen.ref}
                    style={{
                        flex: 1,
                        height: "340px",
                        backgroundColor: "#e5e5e5",
                        borderRadius: "12px",
                        transform: seccion2Imagen.visible ? "translateX(0)" : "translateX(100px)",
                        opacity: seccion2Imagen.visible ? 1 : 0,
                        transition: "all 0.6s ease-out",
                    }}
                >
                    {/* aquí va tu imagen del calendario/app */}
                </div>
            </div>

            <div style={{
                backgroundColor: "#0f1115",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: `100px ${PADDING}`,
            }}>
                <div
                    ref={seccion3.ref}
                    style={{
                        transform: seccion3.visible ? "translateY(0)" : "translateY(40px)",
                        opacity: seccion3.visible ? 1 : 0,
                        transition: "all 0.6s ease-out",
                    }}
                >
                    <span style={{ fontSize: "13px", color: "#1d7a73", letterSpacing: "0.1em", fontWeight: 600 }}>
                        NUESTRA RAZÓN DE SER
                    </span>
                    <h2 style={{ fontSize: "36px", color: "white", marginTop: "12px", maxWidth: "700px" }}>
                        Tu salud no debería vivir en la memoria de una clínica que quizá no vuelvas a visitar.
                    </h2>
                    <p style={{ fontSize: "17px", color: "#9aa1ae", lineHeight: 1.7, maxWidth: "600px", marginTop: "20px" }}>
                        Nació de algo que le pasa a casi todos: llegar a un nuevo médico sin saber qué te dijeron en la última consulta. Qhaluma existe para que esa información sea tuya, esté donde estés, y avance contigo de cita en cita.
                    </p>
                </div>
            </div>
        </>
    );
};