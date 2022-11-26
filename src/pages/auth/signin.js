import { getCsrfToken, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const session = useSession();
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const result = await getCsrfToken();
      if (!result) {
        throw new Error('Can not sign in without a CSRF token');
      }
      setCsrfToken(result);
    }

    /*
      Wait until session is fetched before obtaining csrfToken
      to prevent synchronization issues caused by both
      /api/auth/session and /api/auth/csrf setting the cookie.
      Only happens in dev environment.
    */
    if (session.status !== 'loading') {
      fetchCsrfToken();
    }
  }, [session.status]);
  return (
    <section className="relative py-36 bg-black overflow-hidden">
      <Image
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="/gradient2.svg"
        alt="background gradient"
        width="900"
        height="900"
      />

      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-8 p-12 max-w-xl mx-auto border border-white rounded-4xl">
          <h2 className="mb-3 text-5xl text-white text-center font-semibold leading-tight">
            Welcome back!
          </h2>
          <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-white">
            As usual, please proceed to the sign-in form below.
          </p>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label className="text-white">
              E-mail
              <input
                name="email"
                type="text"
                className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
                pattern="\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z"
              />
            </label>
            <label className="text-white">
              Password
              <input
                name="password"
                type="password"
                className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
                pattern="^(?=.*\d).{4,8}$"
              />
            </label>
            <br />
            <button
              type="submit"
              className="py-4 px-9 w-full text-white font-semibold border border-yellow-700 rounded-xl shadow-4xl focus:ring focus:ring-yellow-300 bg-yellow-600 hover:bg-yellow-700 transition ease-in-out duration-200"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
