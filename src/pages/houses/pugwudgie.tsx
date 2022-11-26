import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function House() {
  const { data: session, status } = useSession();
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28 bg-white"
      // style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-14">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-green-100 font-medium uppercase rounded-9xl">
                  Rich text
                </span> */}
                <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                  The Patron: Pugwudgie
                </h3>
                <p className="text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">
                  The pugwudgie is the patron of Pugwudgie House. At the time of
                  the sorting ceremony, he will step forward and choose the
                  students he sees as fitting to be in his house.
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
            <p className="mb-6 text-lg font-medium leading-7 text-coolGray-500">
              The Pukwudgie is a short gray animal with comically large ears
              that is native to America. It is best known for being fiercely
              independent, mischievous and not overly friendly to nonmagical
              creatures. The beast, which is a distant relative of the European
              goblin - which, some might remember, ran Gringotts in Diagon Alley
              - uses poisonous arrows to hunt.
            </p>
            <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-coolGray-800">
              Pugwudgie House
            </h3>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              The Pukwudgie house was named by James Steward, one of the last
              founding members to join the pack, and was only crowned as the
              official symbol of the house because Steward realized the rest of
              the founders were using magical creatures, and he thought the
              Pukwudgie was hilarious.
            </p>

            <p className="text-lg font-medium leading-7 text-coolGray-500">
              Those who are sorted into Pukwudgie have the same traits as the
              creature that represents their house: They are wickedly smart and
              independent. The closest analog at Hogwarts would probably be
              Ravenclaw. Pukwudgie House is sometimes considered to represent
              the heart of a witch or wizard. It is also said that Pukwudgie
              favours healers.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="mx-auto"
              src="/pugwudgie.png"
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
