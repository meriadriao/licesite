import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-brand-rosy/70 backdrop-blur-md border-b border-brand-warm/50 px-6 py-4 md:px-12 text-brand-dark sticky top-0 z-50">
      <div className="navbar-start flex-1">
        <Link
          href="/"
          className="font-display text-xl md:text-lg uppercase tracking-widest text-brand-burgundy"
        >
          Lice Lima Pele & Cabelo
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 gap-4 text-[15px] font-semibold hidden lg:flex">
          <li>
            <Link
              href="#home"
              className="hover:text-brand-burgundy transition-colors hover:bg-transparent focus:bg-transparent"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="#profissionais"
              className="hover:text-brand-burgundy transition-colors hover:bg-transparent focus:bg-transparent"
            >
              PROFISSIONAIS
            </Link>
          </li>
          <li>
            <Link
              href="/sorteios"
              className="hover:text-brand-burgundy transition-colors hover:bg-transparent focus:bg-transparent"
            >
              SORTEIOS
            </Link>
          </li>
        </ul>

        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-transparent"
          >
            <svg
              className="h-6 w-6 text-brand-burgundy"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-brand-rosy rounded-[12px] z-[1] mt-4 w-52 p-4 shadow-sm border border-brand-warm"
          >
            <li>
              <Link
                href="/"
                className="py-3 text-[15px] font-semibold hover:text-brand-burgundy"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="#profissionais"
                className="py-3 text-[15px] font-semibold hover:text-brand-burgundy"
              >
                PROFISSIONAIS
              </Link>
            </li>
            <li>
              <Link
                href="/sorteios"
                className="py-3 text-[15px] font-semibold hover:text-brand-burgundy"
              >
                SORTEIOS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
