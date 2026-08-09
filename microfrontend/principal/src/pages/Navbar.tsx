import { PersonCircleFilled } from "@fluentui/react-icons";
import qhaluma_colores from "../assets/images/qhaluma_colores.png";


export const Navbar = () => {

    return (
        <div style={{
            height: "15%",
            background: "black",
            display: "flex",
            padding: "5px",
            flexDirection: "row",
            justifyContent: "space-around",
        }}>
            <div>

            </div>
            <div>
                <img src={qhaluma_colores} alt="qhaluma_colores" style={{ height: "100%" }} />
            </div>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-around",
                    alignItems: "flex-end",
                    border: "1px solid",
                    borderColor: "black",
                    borderRadius: "10px",
                    padding: "5px"
                }}>
                    {/* <PersonCircleFilled fontSize={28} />
                    <span style={{ color: "Black" }}>Acceder</span> */}
                </div>
            </div>

        </div>
    )
}