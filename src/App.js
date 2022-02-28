import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
    
    const usuarios = ["Yunka", "Chocobar"]
    return (
        <>
            <Header />
            <Main
                nombre="Yunka"
                apellido="Chocobar"
                edad={26}
                usuarios={usuarios}
            />
            <Footer />
        </>
    )
}

export default App