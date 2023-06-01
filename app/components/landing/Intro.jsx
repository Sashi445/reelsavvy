import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: '400' })

export const Intro = () => {
    return (
        <div className="relative h-full max-w-[1440px]">
            {/* <div className="max-w-[1440px] h-full"> */}
            <div className="max-w-[1440px] w-full flex justify-between items-center">
                <div className="text-[24px] sm:text-[36px] md:text-[40px] leading-[136%]">
                    <span className={pacifico.className}>ReelSavvy</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 md:static bottom-[40px] md:bottom-0 text-white border border-white hover:border-none hover:bg-white hover:text-black px-4 py-3 md:px-5 md:py-4 rounded-full">
                    Get Early access
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="px-5 md:px-[60px]">
                    
                </div>
                <div>
                    {/* <Image src={''} alt="someimage" height={100} width={100} /> */}
                    {/* <iframe src="https://giphy.com/embed/YRgqUlzg7FlGz79dtP" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/what-confused-huh-YRgqUlzg7FlGz79dtP">via GIPHY</a></p> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}