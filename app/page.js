"use client";

import Link from "next/link";
import { EarlyAccess, Feature } from "./components/landing";
import { DM_Sans, Pacifico } from "next/font/google";
import { useRouter } from "next/router";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const intro = {
    lottie:
      "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685649184/confused_rzyidw.json",
  };

  const features = [
    {
      id: 1,
      text: "Explore a curated list of *#movies* suggested by your *#friends*, all in *#one place* 😲",
      highlightColor: "#29B379",
      lottieUrl:
        "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685645965/popcorn-movie_uu4qmi.json",
    },
    {
      id: 2,
      text: "Found something *#worth watching*? Share it with all your friends in *#one click* 😎 ",
      highlightColor: "#FF8744",
      lottieUrl:
        "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444744/enlightened_uki0p9.json",
    },
    {
      id: 3,
      text: `Compile a *#list* of your *#all-time favorite* movies and *#show* them off to the *#world* 😊`,
      highlightColor: "#FF4455",
      lottieUrl:
        "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444421/wizard_zivkqa.json",
    },
  ];

  // const router = useRouter();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // router.replace("#early-access");
  // };

  return (
    <main
      className={`snap-y snap-mandatory w-full h-screen overflow-y-scroll bg-black text-white p-5 md:p-10 ${dmSans.className}`}>
      <div className='bg-black z-10 absolute top-0 left-0 right-0 w-full p-5 md:p-10 flex items-center justify-center'>
        <div className='margin-auto max-w-[1440px] w-full flex items-center justify-between'>
          <div className={`${pacifico.className} text-[24px] leading-[136%]`}>
            <a href=''>ReelSavvy</a>
          </div>
          <div className='border border-white text-white hover:bg-white hover:text-black py-2 px-4 rounded-full text-center text-[14px] leading-[136%]'>
            <a href={"#early-access"}>Get Early Access</a>
          </div>
        </div>
      </div>
      <section
        id=''
        className='flex items-center justify-center w-full h-screen snap-start '>
        <Feature landing={true} id={100} lottieUrl={intro.lottie} />
      </section>
      {features.map((feature, i) => (
        <section
          key={feature.id}
          className='flex items-center justify-center w-full h-screen snap-start'>
          <Feature
            id={feature.id}
            text={feature.text}
            lottieUrl={feature.lottieUrl}
            highlightColor={feature.highlightColor}
            reverse={i % 2}
          />
        </section>
      ))}
      <section
        id='early-access'
        className='w-full h-screen snap-start flex items-center justify-center'>
        <EarlyAccess />
      </section>
    </main>
  );
}
