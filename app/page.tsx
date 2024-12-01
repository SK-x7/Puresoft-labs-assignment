import Link from "next/link";

export const metadata = {
  title: "Welcome | Puresoft Assignment",
};

export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex flex-col justify-start items-center gap-7 mt-32">
        <h1 className="font-sans text-3xl">Welcome in,here👋</h1>
        <Link
          href="/dashboard"
          className="bg-blue-400 hover:bg-blue-500 py-3 px-4 rounded-2xl mx-auto"
        >
          Go to Dashboard
        </Link>
      </section>
    </main>
  );
}
