import Lottie from "lottie-web";
import { useEffect } from "react";

export const Feature1 = () => {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById("lottie-player-1"),
            autoplay: true,
            loop: true,
            renderer: 'svg',
            path: "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444421/wizard_zivkqa.json"
        })
    }, [])

    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
            <div className="text-center">
                Explore a curated list of movies
                suggested by your friends,
                all in one place.
            </div>
            <div className="h-[150px] w-[150px]" id="lottie-player-1"></div>
        </div>
    );
}
