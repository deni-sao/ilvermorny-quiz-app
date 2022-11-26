import Image from 'next/image';

export default function About() {
  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <Image
        className="hidden lg:block absolute top-0 left-0 mt-144 -ml-24 w-96 h-96"
        src="/pugwudgie.png"
        alt=""
        width="50"
        height="50"
      />
      <Image
        className="hidden lg:block absolute top-0 left-0 mt-144 -ml-24 w-96 h-96"
        src="/pugwudgie.png"
        alt=""
        width="50"
        height="50"
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mb-16 md:mb-24 mx-auto text-center">
          <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
            We are Ilvermorny!
          </span>
          <h2 className="mt-7 text-6xl 2xl:text-7xl text-white font-bold font-heading">
            Get to know our school!
          </h2>
        </div>
        <div className="flex flex-wrap -m-8 mb-8 md:mb-20">
          <div className="w-full lg:w-2/3 h-96 p-8">
            <Image
              className="w-full h-full object-cover"
              src="/pugwudgie.png"
              alt=""
              width="50"
              height="50"
            />
          </div>
          <div className="w-full lg:w-1/3 h-96 p-8">
            <Image
              className="w-full h-full object-cover"
              src="/pugwudgie.png"
              alt=""
              width="50"
              height="50"
            />
          </div>
        </div>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-14 text-3xl text-gray-200">
            This morning, platea dictumst nec nunc. In hac habitasse, general,
            dignissim accumsan just. Suspendisse vitae ligula convallis, porta
            tortor et, finibus neque.
          </p>
          <div className="inline-flex pt-14 mb-14 items-center border-t border-gray-500">
            <Image
              className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
              src="/pugwudgie.png"
              alt=""
              width="50"
              height="50"
            />
            <div className="text-left">
              <h4 className="mb-1 text-2xl font-bold text-gray-50">
                Harry Douglas
              </h4>
              <p className="text-white">20 april, 8:30 am</p>
            </div>
          </div>
          <p className="mb-6 text-left text-xl text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            enim quidem doloremque, corporis sapiente, maiores soluta hic rerum
            non, sit cum ex deleniti. Quod!
          </p>
          <p className="mb-6 text-left text-xl text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id
            qui deserunt iure cupiditate vero. Id deleniti aliquid iste dolore!
            Tempore vel non atque laboriosam. Magnam, beatae explicabo.
          </p>
          <p className="mb-6 text-left text-xl text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            enim quidem doloremque, corporis sapiente, maiores soluta hic rerum
            non, sit cum ex deleniti. Quod!
          </p>
        </div>
      </div>
    </section>
  );
}
