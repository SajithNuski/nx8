import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    
        <div className="flex flex-col items-center h-screen justify-center gap-4">
          <h1 className="text-3xl font-bold text-emerald-300">Hello this is a test</h1>
          <Link href="/about" className="text-3xl font-bold text-amber-300">
            Hellooooo
          </Link>
        </div>
  );
}
