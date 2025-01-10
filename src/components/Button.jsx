import { NavLink } from "react-router-dom";

export default function Button(props){

    const { link, children } = props;
    const displayText = children === undefined ? 'Button' : children;

    return (
        <NavLink className="px-5 font-sans" to={link}>
            {displayText}
        </NavLink>
    );
}