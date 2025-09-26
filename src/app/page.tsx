import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-grey-100 via-grey-200 to-grey-300 p-8">
      <h1 className="text-4xl font-extrabold text-white-700 mb-10 text-center drop-shadow-md">
        👼 Welcome to the Menu 👼
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        <LinkButton href="/post" label="📄 Posts (Server Component)" />
        <LinkButton href="/user" label="👩‍💻 Users (Client Component)" />
        <LinkButton href="/post-client" label="🤒 Posts (Client + Zustand)" />
        <LinkButton href="/comments/1" label="💬 Comments Post 1" />
        <LinkButton href="/comments/8" label="💬 Comments Post 8" />
        <LinkButton href="/comments/10" label="💬 Comments Post 10" />
        <LinkButton href="/comments/79" label="💬 Comments Post 79" />
      </div>
    </main>
  );
}

type LinkButtonProps = {
  href: string;
  label: string;
};

function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="block w-full text-center bg-grey-500 text-white hover:bg-grey-400 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out tracking-wide"
    >
      {label}
    </Link>
  );
}
