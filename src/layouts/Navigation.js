import { NavLink } from "react-router-dom";

const list = [
  { name: "Home", path: "/", iconClass: "fa-solid fa-house-user" },
  { name: "Form", path: "/form", iconClass: "fa-solid fa-utensils" },
  { name: "My orders", path: "/orders", iconClass: "fa-solid fa-basket-shopping" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>
        {item.iconClass !== " " ? <i class={item.iconClass}></i> : null} {item.name}
      </NavLink>
    </li>
  ));
  return <ul className="nav">{menu}</ul>;
};

export default Navigation;
