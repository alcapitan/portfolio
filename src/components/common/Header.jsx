import ThemeControllerDropdown from "./ThemeControllerDropdown.jsx";
import ThemeControllerSwap from "./ThemeControllerSwap.jsx";

function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="flex-1 gap-2">
                <a href="/" className="flex items-center gap-4 group">
                    <img 
                        src="/public/favicon.png" 
                        alt="Logo" 
                        className="w-10 h-10"
                    />
                <span className="text-xl font-bold">
                    alcapitan.me
                </span>
                </a>
            </div>
            <div className="flex-none gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                {/* <ThemeControllerDropdown /> */}
                <ThemeControllerSwap />
            </div>
        </div>
    );
}

export default Header;