import { Link } from "react-router-dom";

const NavButton = ({routeTo, name}) => (
    <Link className="nav" to={routeTo}>
        <button><p>{name}</p></button>
    </Link>
);

export default NavButton;