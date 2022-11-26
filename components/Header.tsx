import { signIn, useSession } from 'next-auth/react';
// import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header className="header sticky top-0 bg-black shadow-xl flex items-center justify-between px-8 py-02 z-40 text-white shadow-black">
      <div className="w-3/12 cursor-pointer font-bold">ILVERMORNY</div>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:text-yellow-500 duration-200 cursor-pointer active">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-b-2 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:text-yellow-500 duration-200 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 border-b-2 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:text-yellow-500 duration-200 cursor-pointer">
            <Link href="/products">Houses</Link>
          </li>
          <li className="p-4 border-b-2 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:text-yellow-500 duration-200 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        {' '}
        {status === 'authenticated' ? (
          <Link href="/api/auth/signout">
            <button className="inline-flex h-9 py-1 px-4 mb-2 items-center text-center text-sm font-bold text-black bg-yellow-500 hover:bg-yellow-600 transition duration-200 rounded-lg">
              Sign Out
            </button>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <button className="inline-flex h-9 py-1 px-4 mb-2 items-center text-center text-sm font-bold text-black bg-yellow-500 hover:bg-yellow-600 transition duration-200 rounded-lg">
              Sign in
            </button>
          </Link>
        )}
        {}
      </div>
      {/* <div className="w-3/12 flex justify-end">
        <Image
          className="cursor-pointer"
          src="/user2.png"
          width="40"
          height="40"
          alt="Login"
          onClick={() => signIn(undefined, { callbackUrl: '/' })}
        />
      </div> */}
    </header>
  );
}
