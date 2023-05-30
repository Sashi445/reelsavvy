import Lottie from "lottie-web";
import { useEffect } from "react";

export const Feature1 = () => {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById("lottie-player"),
            autoplay: true,
            loop: true,
            renderer: 'svg',
            path: "https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1685444421/wizard_zivkqa.json"
        })
    }, [])

    return (
        <div>
            Feature1;
            <div className="border h-[150px] w-[150px]" id="lottie-player"></div>
        </div>
    );
}
