// import { returnFeed } from '@services/authorization';
import fetch from 'isomorphic-unfetch';
// import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const router = useRouter();
  const handleLogin = async (event) => {
    // create or validate user
    // redirect to '/'

    event.preventDefault();
    const { email, password } = event.target.elements;
    const response = await fetch('/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (response.ok) {
      // redirect to homepage
      router.push('/');
    }
  };

  return (
    <>
      <div> </div>
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
              You shall be registered!
            </h2>
            <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-white">
              As an Ilvermorny student, you must be registered in order to
              partake in any of the school activities, including the Sorting
              Ceremony. Please fill out the form below to register yourself
              immediately.
            </p>

            <form onSubmit={handleLogin}>
              <label htmlFor="email" className="text-white">
                Your e-mail address
                <input
                  name="email"
                  className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
                  placeholder="example@email.com"
                  pattern="\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z"
                />
              </label>

              <label htmlFor="password" className="text-white">
                Your password
                <input
                  name="password"
                  className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-yellow-500 placeholder-gray-500 rounded"
                  pattern="^(?=.*\d).{4,8}$"
                />
              </label>

              <br />
              <br />
              <button className="py-4 px-9 w-full text-white font-semibold border border-yellow-700 rounded-xl shadow-4xl focus:ring focus:ring-yellow-300 bg-yellow-600 hover:bg-yellow-700 transition ease-in-out duration-200">
                Register
              </button>
            </form>
            {/* <form>
              <div className="flex flex-wrap justify-between -m-2 mb-4">
                <div className="w-auto p-2">
                  <div className="flex items-center">
                    <input
                      className="w-4 h-4"
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                    />
                    <label
                      className="ml-2 text-sm text-white font-medium"
                      htmlFor="default-checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <Link
                    className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                    href="/"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form> */}
          </div>
          <p className="text-white text-center font-medium">
            <span>Already have an account? </span>

            <Link
              className="text-yellow-600 hover:text-yellow-700"
              href="/auth/signin"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
