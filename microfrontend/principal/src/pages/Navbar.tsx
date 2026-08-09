import { PersonCircleFilled } from "@fluentui/react-icons";
import qhaluma_logo_navbar from "../assets/images/qhaluma_logo_navbar.png";


export const Navbar = () => {

    return (
        <div style={{
            height: "5%",
            background: "#ffffff",
            display: "flex",
            padding: "10px",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <div>
                <img src={qhaluma_logo_navbar} alt="qhaluma_logo" style={{ height: "100%" }} />
            </div>
            <div>
                <PersonCircleFilled fontSize={32} />
                <span style={{ color: "Black" }}>Login</span>
            </div>
        </div>
    )
}