import Link from "next/link";
const Navbar = () => {
  return (
    <header>
        <nav className="to-blue-400 text-2xl flex justify-between border-b-white">
            <p>Next.js</p>

            <ul className="flex justify-between gap-3">
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/about'>
                    <li>About</li>
                </Link>
                <Link href='/contact'>
                    <li>Contact</li>
                </Link>
                <Link href='/about-us'>
                    <li>About</li>
                </Link>
                <Link href='/us'>
                    <li>Us</li>
                </Link>
            </ul>
        </nav>
    
    </header>
  )
}

export default Navbar