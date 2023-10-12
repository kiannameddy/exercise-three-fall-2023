import Link from "next/link";

const Header = () => (
    <header className="HeaderWrapper"> 
        <nav className="HeaderContent"> 
            <Link href="/Tokyo">Tokyo</Link>
            <Link href="/New York">New York</Link>
            <Link href="/Paris">Paris</Link>
            <Link href="/Chicago">Chicago</Link>
        </nav>
    </header>
);

export default Header; 