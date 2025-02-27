import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-light px-3">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <Image src="/next.svg" alt="Logo" width={100} height={30} />
            </a>

            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              {/* Search Bar (Center) */}
              <form className="d-flex mx-auto w-50">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>

              {/* Right Side: Notifications & User */}
              <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
                <li className="nav-item">
                  <button className="btn position-relative">
                    <Image
                      src="/bell.png"
                      alt="Notifications"
                      width={34}
                      height={34}
                    />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      3
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Page Content */}
        <div className="container">{children}</div>

        {/* Footer */}
        <footer className="mt-5 border-top pt-3 text-center">
          © 2025 MyApp
        </footer>
      </body>
    </html>
  );
}
