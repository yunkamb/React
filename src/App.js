import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {

    return (
        <>
            <Header />
            <Main
                greeting="Bienvenidos a MercadoPobre"
                picture="https://i.imgflip.com/6745lw.jpg"
            />
            <Footer />
        </>
    )
}

export default App