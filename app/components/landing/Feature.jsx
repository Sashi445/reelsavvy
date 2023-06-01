import { useEffect } from "react";
import Lottie from "lottie-web";
import { DM_Sans } from "next/font/google";

const dmSansLight = DM_Sans({ subsets: ["latin"], weight: "400" });

export const Feature = ({
    id = 10 + Math.floor(90 * Math.random()),
    text = "abc *#acb* fdkj*#db* dskj",
    lottieUrl = "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444744/enlightened_uki0p9.json",
    reverse = false,
    highlightColor = "#FFDE66",
    landing = false
}) => {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById(`lottie-player-${id}`),
            autoplay: true,
            loop: true,
            renderer: 'svg',
            path: lottieUrl
        })
    }, [])

    return (
        <div className="max-w-[1440px] h-full flex items-center justify-center">
            <div className={`flex items-center justify-center ${landing ? 'flex-col-reverse' : 'flex-col'} gap-10 md:gap-0 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="text-center md:text-start basis-1/2 font-medium text-[24px] md:text-[32px]  leading-[136%] px-5 md:px-[60px]">
                    {!landing ?
                        <>
                            {text.split("*").map((token, ind) => token[0] === '#' ? <span key={ind} className={`text-[${highlightColor}]`}>{token.substring(1)}</span> : token)}
                        </>
                        :
                        <>
                            <div className={`text-[28px] md:text-[48px] leading-[136%] font-semibold mb-5`}>
                                Don&apos;t know what to watch for this weekend?
                            </div>
                            <div className={`${dmSansLight.className} text-[18px] leading-[136%] font-light`}>
                                Can&apos;t recall the movie your friend suggested recently?
                                Don&apos;t worry we&apos;ve figured it out for you.
                            </div>
                        </>
                    }

                </div>
                <div className="basis-1/2 flex items-center justify-center" >
                    <div className={`${landing ? 'w-[280px]' : 'w-[300px]'} md:w-[350px] lg:w-[400px]`} id={`lottie-player-${id}`}></div>
                </div>
            </div>
        </div>
    );
}