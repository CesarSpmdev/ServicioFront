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
            <main style={{ flex: 1 }}>
            </main>
            <footer>

            </footer>
        </div>
    )
}