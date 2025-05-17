import TitleBar from "./components/TitleBar";

function App() {
    // @ts-ignore
    window.electron.getStaticData("Hello World");
    return (
        <div className="flex flex-col h-screen">
            <TitleBar />
            <main className="flex-1">
                <h1 className="text-3xl font-bold underline">Hello World</h1>
            </main>
        </div>
    );
}

export default App;
