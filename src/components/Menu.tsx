import { Link } from "react-router-dom";
import "./Menu.scss";

type MenuProps = {items : {title: string, path: string }[] };

function Menu({ items } : MenuProps) {
  return (
    <header className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="">
            <span>H</span>ome
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.title}>
            <Link to={item.path}>
            {item.title}
            </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Menu;
