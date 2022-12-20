import { Link, useLocation } from "react-router-dom";
import { MenuProps } from "../types";
import "./Menu.scss";

function Menu({ items }: MenuProps) {
  const locationUrl = useLocation();

  return (
    <header className="Menu">
      <nav>
        <ul>
          {items.map((item) => (
            <li
              key={item.title}
              className={
                "/" + item.path === locationUrl.pathname ? "active" : ""
              }
            >
              <Link to={item.path}>
                <span>{item.icon}</span>
                <div>{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Menu;
