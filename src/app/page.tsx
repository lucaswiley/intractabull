import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Intractabull</h1>
      <h2 className="text-gray-300 transition-colors mb-4">Lucas Wiley</h2>
      <Navigation />
      <div className="mt-8 flex justify-center">
        <Link href="https://scoutcities.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/scout.ico"
            alt="Scout Icon"
            width={64}
            height={64}
            priority
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </main>
  )
}
