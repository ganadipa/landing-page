import Image from "next/image";
import Link from "next/link";
import React from "react";

type TArticles = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
};

export default async function Articles() {
  const response = await fetch("https://pandooin.com/api/zamrood/article");
  const data: {
    success: boolean;
    message: string;
    code: number;
    data: TArticles[];
  } = await response.json();
  if (!data.success) {
    return (
      <section className="w-full max-w-6xl mx-auto p-12">
        <h2 className="font-bold font-unbounded text-dark-green text-4xl mb-2">
          Articles
        </h2>
        <p className="text-dark-green text-2xl">
          Our curated writings, offering something for every reader.
        </p>
        <p className="text-red-500 text-2xl">{data.message}</p>
      </section>
    );
  }

  const articles: TArticles[] = data.data;

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6">
      <h2 className="font-bold font-unbounded text-dark-green text-4xl mb-2">
        Articles
      </h2>
      <p className="text-dark-green text-2xl">
        Our curated writings, offering something for every reader.
      </p>

      <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full mt-12">
        {/* First Image */}
        <div className="col-span-2 row-span-2 w-full h-full overflow-hidden relative">
          <Link
            href={
              "https://pandooin.com/blog/article/best-places-dive-indonesia?utm_source=landing_page&utm_medium=website&utm_campaign=zamrood"
            }
          >
            <Image
              src={articles[0].featured_image}
              width={1440}
              height={1440}
              alt={articles[0].featured_image_caption}
              className="h-full w-full object-cover -z-50  grayscale hover:grayscale-0 transition-all ease-in-out duration-300 aspect-video"
            />
            <div className="bg-dark-green w-full p-6 space-y-2 absolute bottom-0">
              <h3 className="text-white-default font-bold line-clamp-2">
                {articles[0].title}
              </h3>
            </div>
          </Link>
        </div>

        <div className="w-full h-full overflow-hidden relative">
          <Link
            href={
              "https://pandooin.com/blog/article/best-time-visit-indonesia-weather-seasons?utm_source=landing_page&utm_medium=website&utm_campaign=zamrood"
            }
          >
            <Image
              src={articles[1].featured_image}
              width={1440}
              height={1440}
              alt={articles[1].featured_image_caption}
              className="w-full object-cover -z-50  grayscale hover:grayscale-0 transition-all ease-in-out duration-300  aspect-video"
            />
            <div className="bg-dark-green w-full p-6 space-y-2  bottom-0">
              <h3 className="text-white-default font-bold line-clamp-2">
                {articles[1].title}
              </h3>
            </div>
          </Link>
        </div>
        <div className="w-full  overflow-hidden relative">
          <Link
            href={
              "https://pandooin.com/blog/article/candi-borobodur-sunrise?utm_source=landing_page&utm_medium=website&utm_campaign=zamrood"
            }
          >
            <Image
              src={articles[2].featured_image}
              width={1440}
              height={1440}
              alt={articles[2].featured_image_caption}
              className=" w-full object-cover -z-50  grayscale hover:grayscale-0 transition-all ease-in-out duration-300  aspect-video"
            />
            <div className="bg-dark-green w-full p-6 space-y-2  bottom-0">
              <h3 className="text-white-default font-bold line-clamp-2">
                {articles[2].title}
              </h3>
            </div>
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden relative">
          <Link
            href={
              "https://pandooin.com/blog/article/phinisi-experience-bajo-komodo?utm_source=landing_page&utm_medium=website&utm_campaign=zamrood"
            }
          >
            <Image
              src={articles[3].featured_image}
              width={1440}
              height={1440}
              alt={articles[3].featured_image_caption}
              className="w-full object-cover -z-50  grayscale hover:grayscale-0 transition-all ease-in-out duration-300  aspect-video"
            />
            <div className=" bg-dark-green w-full p-6 space-y-2 bottom-0">
              <h3 className="text-white-default font-bold line-clamp-2">
                {articles[3].title}
              </h3>
            </div>
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden relative">
          <Link
            href={
              "https://pandooin.com/blog/article/uncovering-hidden-gems-indonesia?utm_source=landing_page&utm_medium=website&utm_campaign=zamrood"
            }
          >
            <Image
              src={articles[4].featured_image}
              width={1440}
              height={1440}
              alt={articles[4].featured_image_caption}
              className=" w-full object-cover -z-50  grayscale hover:grayscale-0 transition-all ease-in-out duration-300  aspect-video"
            />
            <div className=" bg-dark-green w-full p-6 space-y-2 ">
              <h3 className="text-white-default font-bold line-clamp-2">
                {articles[4].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
