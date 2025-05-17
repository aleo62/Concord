export default function TitleBar() {
    return (
        <nav className="title-bar">
            <h1 className="text-md font-semibold">Concord</h1>
            <ul className="text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                <button
                    onClick={() => window.electron.sendFrameAction("MINIMIZE")}
                    className="title-bar-button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path d="M20 14H4v-2h16v2z" />
                    </svg>
                </button>
                <button
                    onClick={() => window.electron.sendFrameAction("MAXIMIZE")}
                    className="title-bar-button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
                    </svg>
                </button>
                <button
                    onClick={() => window.electron.sendFrameAction("CLOSE")}
                    className="title-bar-button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
            </ul>
        </nav>
    );
}
