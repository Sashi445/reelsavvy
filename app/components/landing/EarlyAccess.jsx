import { useState } from "react";
import { instance } from "./../../services/axios-client";

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};


export const EarlyAccess = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // make backend call for early access support
        // console.log(instance);
        const device = getDeviceType();
        try {
            const res = await instance.post('earlyaccess', {
                email,
                device
            })
            if (res.status === 201) {
                const data = res.data;
                console.log(data);
                setMessage("Thank you for showing interest in our product we will notify you when we launch our product!");
            }
        } catch (error) {
            if (error.request.status === 400) {
                const data = error.response.data;
                setMessage(data.info);
            }
        }

        setEmail("");
    }

    return (<div className="max-w-[1440px] h-full text-white p-5 md:p-10 flex flex-col items-center justify-center">
        <div className="text-center text-[24px] md:text-[32px] leading-[136%] my-5 md:my-10">
            So what are you waiting for?
            Go sign up for <span className="text-[#8631e5]">early access</span> &#x2728;
        </div>
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3">
                    <div className="w-full md:w-[450px]">
                        <input className="w-full px-4 py-3 bg-black border rounded-md border-white text-white focus:outline-none" type="email" id="user-email" placeholder="someone@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="">
                        <button className="rounded-full md:rounded-md border border-white text-white hover:bg-white hover:text-black px-3 md:px-4  py-2 md:py-2" type="submit">Get Early access</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="mt-[60px]">
            Made with &#x2764;
        </div>
        <div className="mt-8">
            <div className="text-center mb-5">Follow us on</div>
            <div className="flex items-center justify-center gap-4">
                {
                    [1, 2, 3, 4].map((e, i) => <div className="p-2 border" key={i}>

                    </div>)
                }
            </div>
        </div>
    </div>);
}
