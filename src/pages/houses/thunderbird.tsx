import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function House() {
  const { data: session, status } = useSession();
  return (
    <section className="py-20 xl:pt-24 xl:pb-28 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                  The Patron: Thunderbird
                </h3>
                <p className="text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">
                  The Thunderbird, according to Pottermore, was named by
                  Chadwick Boot after the mythical bird that creates a storm
                  whenever it flies. The house is said to represent the soul of
                  the witch or wizard that gets sorted into it. The Thunderbird
                  is also said to be one with adventurers.
                </p>{' '}
                <br />
                <p className="text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">
                  The colors of Thunderbird, for example, are gold and red, and
                  the traits that people sorted into Thunderbird are likely to
                  possess — being adventurous, being courageous — are basically
                  the same traits as those in Gryffindor would have.
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap lg:justify-center items-center -mb-2">
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
                  <Link
                    className="inline-block py-3 px-6 mb-2 w-full md:w-auto text-lg leading-7 font-medium text-center text-coolGray-500 bg-coolGray-50 hover:bg-coolGray-100 rounded-md"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
            <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-coolGray-800">
              Thunderbird House
            </h3>

            <p className="text-lg font-medium leading-7 text-coolGray-500">
              Here is the thing: The comparisons between houses in Hogwarts and
              houses in Ilvermorny are going to come up for multiple reasons,
              but they are designed to. According to the short story by Rowling,
              the founders were obsessed with creating a school that would give
              students a similar experience to Hogwarts, so the four houses at
              Ilvermorny are going to match the Hogwarts originals pretty
              closely.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="mx-auto"
              src="/thunderbird.webp"
              alt="Horned Serpent House logo"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
