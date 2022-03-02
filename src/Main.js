const Main = ({greeting, picture}) => {

    return (
        <main className="container">
            <h1>{greeting}</h1>
            <p><img src={picture} alt="picture" /></p>
        </main>
    );
}

export default Main