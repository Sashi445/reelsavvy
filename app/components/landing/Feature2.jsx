import Lottie from "lottie-web";
import { useEffect } from "react";

export const Feature2 = () => {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById("lottie-player-2"),
            autoplay: true,
            loop: true,
            renderer: 'svg',
            path: "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444744/enlightened_uki0p9.json"
        })
    }, [])

    return (
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
            <div className="text-center">
                Found something worth watching?
                Share it with all your friends in one click
            </div>
            <div className="h-[150px] w-[150px]" id="lottie-player-2"></div>
        </div>
    );
}
