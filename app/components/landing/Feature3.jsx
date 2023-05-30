import Lottie from "lottie-web";
import { useEffect } from "react";

export const Feature3 = () => {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById("lottie-player-3"),
            autoplay: true,
            loop: true,
            renderer: 'svg',
            path: "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444744/enlightened_uki0p9.json"
        })
    }, [])

    return (<div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
        <div className="text-center">
            Compile a list of your all-time favorite
            movies and show
            them off to the world.
        </div>
        <div className="h-[150px] w-[150px]" id="lottie-player-3"></div>
    </div>);
}