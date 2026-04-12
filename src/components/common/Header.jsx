import ThemeControllerDropdown from "./ThemeControllerDropdown.jsx";
import ThemeControllerSwap from "./ThemeControllerSwap.jsx";

function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
                <a className="btn btn-ghost text-xl">al.capitan</a>
            </div>
            <div className="flex-1"></div>
            <div className="flex-none">
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