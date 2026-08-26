import NavLinks from "./NavLinks.jsx";
import LanguageSelector from "./LanguageSelector.jsx";
// import ThemeControllerDropdown from "./ThemeControllerDropdown.jsx";
import ThemeControllerSwap from "./ThemeControllerSwap.jsx";

function Header() {

    return (
        <div className="navbar bg-base-100 shadow-md px-4 lg:px8 relative">
            {/* Menu vertical (téléphone) */}
            <div className="absolute left-4 lg:static lg:flex-none">
                <div className="dropdown lg:hidden">
                    {/* Icone de menu */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow border border-base-200"
                    >
                        <NavLinks />

                        <div className="flex flex-col gap-2 my-2">
                            <div className="divider m-0 h-0.5"></div>
                            <LanguageSelector />
                            <ThemeControllerSwap />
                        </div>
                    </ul>
                </div>
            </div>

            {/* Marque */}
            <div className="flex-1 flex justify-center lg:justify-start">
                <a href="/" className="flex items-center group btn btn-xl btn-ghost px-4 gap-3">
                    <img src="/favicon.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold">alcapitan.me</span>
                </a>
            </div>

            {/* Menu horizontal (ordinateur) */}
            <div className="flex-none hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    <NavLinks />
                </ul>

                <LanguageSelector />
                {/* <ThemeControllerDropdown /> */}
                <ThemeControllerSwap />
            </div>
        </div>
    );
}

export default Header;
