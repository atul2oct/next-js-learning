import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center text-3xl font-semibold">
      <Link href='projects/list'>
        <h1 className="border-b-2 py-2">Click to see Porject List</h1>
      </Link>
      <h1>Home</h1>
    </main>
  );
}
