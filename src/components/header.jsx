import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <nav>
            <Link to='/'>Home</Link>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Me</Link>
            </div>
            </nav>
        </header>
    )
}