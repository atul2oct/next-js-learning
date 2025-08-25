import Link from "next/link";


export default function ProjectsList  ()  {
  return (
    <main>
        <h1>
            ProjectsList
        </h1>

        <ul>
            <li>
                <Link href='/projects/jobit'>
                    Job It
                </Link>
            </li>
            <li>
                <Link href='/projects/current'>
                    Car Rent
                </Link>
            </li>
            <li>
                <Link href='/projects/hipnode'>
                    Hip Node
                </Link>
            </li>
        </ul>
    </main>
  )
}
