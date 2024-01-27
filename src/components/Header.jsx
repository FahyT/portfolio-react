import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
