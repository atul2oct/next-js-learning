import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center border-b-2 py-4 bg-slate-200 text-slate-800">
        <nav className="flex justify-between items-center w-3/4">
            <Link href='/'>
                <p className="border-2 rounded-lg px-5 py-2 bg-black text-white hover:bg-white hover:text-black">Next.Js</p>
            </Link>
            

            <ul className="w-1/2 flex justify-around items-center">
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/about'>
                    <li>About</li>
                </Link>
                <Link href='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar