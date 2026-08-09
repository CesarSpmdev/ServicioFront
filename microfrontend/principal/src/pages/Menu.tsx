import { Body } from "./Body"
import { Navbar } from "./Navbar"

export const Menu = () => {



    return (
        <div style={{
            height: "100vh",
            width: "100%",
            flexDirection: "column",
            display: "flex",
        }}>
            <Navbar />
            <Body />
            <footer>

            </footer>
        </div>
    )
}