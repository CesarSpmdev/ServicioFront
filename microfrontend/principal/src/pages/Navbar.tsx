import { PersonCircleFilled } from "@fluentui/react-icons";
import qhaluma_colores from "../assets/images/qhaluma_colores.png";
import qhaluma_logo from "../assets/images/qhaluma_logo.png";

interface navbarProps {
    scrollActivado: number;
}

export const Navbar = (props: navbarProps) => {

    return (
        <div style={{
            height: "15%",
            background: `${props.scrollActivado == 0 ? "black" : "#ffffff"}`,
            display: "flex",
            padding: "5px",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "sticky",
            top: 0,
            zIndex: 100,
        }}>
            <div>

            </div>
            <div>
                {props.scrollActivado > 0 ?
                    <img src={qhaluma_logo} alt="qhaluma_logo" style={{ height: "100%" }} /> :
                    <img src={qhaluma_colores} alt="qhaluma_colores" style={{ height: "100%" }} />
                }
            </div>
            <div>
                {/* <div style={{
                    display: "flex",
                    justifyContent: "flex-around",
                    alignItems: "flex-end",
                    border: "1px solid",
                    borderColor: "black",
                    borderRadius: "10px",
                    padding: "5px"
                }}>
                    <PersonCircleFilled fontSize={28} />
                    <span style={{ color: "Black" }}>Acceder</span>
                </div> */}
            </div>

        </div>
    )
}