import { getCsrfToken, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SignOut() {
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
            You wish to sign out?
          </h2>
          <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-white">
            We will miss you dearly, but alas...
          </p>
          <form method="post" action="/api/auth/signout">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

            <button
              type="submit"
              className="py-4 px-9 w-full text-white font-semibold border border-yellow-700 rounded-xl shadow-4xl focus:ring focus:ring-yellow-300 bg-yellow-600 hover:bg-yellow-700 transition ease-in-out duration-200"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
