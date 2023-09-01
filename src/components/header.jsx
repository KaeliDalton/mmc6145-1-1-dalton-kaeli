import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <nav>
            <Link to='/' className="link-header">Home</Link>
            <div>
                <Link to='/about' className="link-header">About</Link>
                <Link to='/contact' className="link-header">Contact Me</Link>
            </div>
            </nav>
        </header>
    )
}