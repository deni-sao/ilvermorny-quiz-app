import { HouseSharp } from '@material-ui/icons';
// import Script from 'next/script';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

// import Login from './login';

export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <>
      <section
        className="py-28 bg-black bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden"
        // style="background-image: url('flaro-assets/images/blog/bg.jpeg');"
        style={{
          backgroundImage: `url("/other_ilvermorny.jpg")`,
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="px-12 pt-12 pb-9 md:max-w-xl bg-black bg-opacity-80 rounded-4xl">
            <p className="mb-7 font-sans max-w-max px-3 py-1.5 text-sm text-white font-semibold uppercase border border-gray-700 rounded-md">
              Magic-News
            </p>
            <h2 className="mb-4 text-6xl md:text-7xl text-white font-bold font-heading tracking-px-n leading-tight">
              Ilvermorny! The Sorting Ceremony Begins!
            </h2>
            <p className="mb-11 text-lg text-gray-400 font-medium leading-normal">
              We are delighted to announce the Opening of the Sorting Ceremony
              at Ilvermorny School of Witchcraft and Wizardry. Any young witch
              or wizard who is a student of our school is invited to take part!
            </p>
            {status === 'authenticated' ? (
              <Link
                className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-black font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="/quiz"
              >
                Sorting Ceremony
              </Link>
            ) : (
              <Link
                className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-black font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="/signinrequired"
              >
                Sorting Ceremony
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="relative pt-28 pb-36 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <br />

          <h2 className="mb-20 font-heading font-semibold text-center text-6xl sm:text-7xl text-white">
            The Four Houses of Ilvermorny
          </h2>
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/2 xl:w-1/4 p-3">
              <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10">
                <Link href="/houses/pugwudgie">
                  <Image
                    className="mx-auto w-full"
                    src="/pugwudgie.png"
                    alt="Pugwudgie"
                    width="300"
                    height="300"
                  />
                </Link>
                {/* <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-white rounded-md">
                    <h2 className="font-heading font-bold text-lg text-gray-900">
                      Cody Fisher
                    </h2>
                    <p className="text-sm text-gray-600">Co-Founder, CEO</p>
                  </div>
                </div> */}
              </div>
              <br />
              {/* <p className="text-white">Pugwudgie</p> */}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/4 p-3">
              <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10">
                <Link href="/houses/hornedserpent">
                  <Image
                    className="mx-auto w-full"
                    src="/horned-serpent.webp"
                    alt="Horned Serpent"
                    width="300"
                    height="300"
                  />
                </Link>
                {/* <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-white rounded-md">
                    <h2 className="font-heading font-bold text-lg text-gray-900">
                      Eleanor Pena
                    </h2>
                    <p className="text-sm text-gray-600">Co-Founder, CTO</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 p-3">
              <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10">
                <Link href="/houses/thunderbird">
                  <Image
                    className="mx-auto w-full"
                    src="/thunderbird.webp"
                    alt=""
                    width="300"
                    height="300"
                  />
                </Link>
                {/* <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-white rounded-md">
                    <h2 className="font-heading font-bold text-lg text-gray-900">
                      Devon Lane
                    </h2>
                    <p className="text-sm text-gray-600">
                      Chief Marketing Officer
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 p-3">
              <div className="flex flex-col justify-end h-full relative bg-gradient-cyan overflow-hidden rounded-10">
                <Link href="/houses/wampus">
                  <Image
                    className="mx-auto w-full"
                    src="/wampus.webp"
                    alt="Wampus"
                    width="300"
                    height="300"
                  />
                </Link>

                {/* <div className="absolute bottom-0 left-0 w-full p-2.5">
                  <div className="p-5 w-full bg-white rounded-md">
                    <h2 className="font-heading font-bold text-lg text-gray-900">
                      Robert Fox
                    </h2>
                    <p className="text-sm text-gray-600">
                      Senior Software Developer
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
