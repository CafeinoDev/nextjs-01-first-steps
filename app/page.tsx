import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24 items-center">
      <span className="text-5xl">Hello world</span>
      <Link href={`/about`}>About page</Link>
    </main>
  );
}

