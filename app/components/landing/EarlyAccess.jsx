import { useState } from "react";
import { instance } from "./../../services/axios-client";
import { SocialIcon } from "react-social-icons";

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const socialIcons = [
        {
            id: 1,
            url: 'https://instagram.openinapp.co/tryreelsavvy'
        },
        {
            id: 2,
            url: 'https://twitter.openinapp.co/tryreelsavvy'
        },
        {
            id: 3,
            url: 'https://linkedin.openinapp.co/tryreelsavvy'
        },
        {
            id: 4,
            url: 'https://youtube.openinapp.co/tryreelsavvy'
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        // make backend call for early access support
        // console.log(instance);
        const device = getDeviceType();
        setLoading(true);
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
            else {
                setError(error.message);
            }
        }
        setLoading(false);
        setEmail("");
    }

    return (<div className="max-w-[1440px] h-full text-white p-5 md:p-10 flex flex-col items-center justify-center">
        <div className="text-center text-[24px] md:text-[32px] leading-[136%] my-5 md:my-10">
            So what are you waiting for?
            Go sign up for <span className="text-[#8631e5]">early access</span> &#x2728;
        </div>
        <div className="w-full flex items-center justify-center">
            {
                loading ? <>
                    <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                </> : <>
                    {
                        !message ? <form className="grow" onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3">
                                <div className="w-full md:w-[450px]">
                                    <input className="w-full px-3 md:px-4  py-2 md:py-2 bg-black border rounded-md border-white text-white focus:outline-none" type="email" id="user-email" placeholder="someone@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="">
                                    <button className="
                                    rounded-full md:rounded-md 
                                    border border-white 
                                    bg-white text-black
                                    px-3 md:px-4  
                                    py-2 md:py-2" type="submit">Get Early access</button>
                                </div>
                            </div>
                        </form> : <div className={`w-full py-4 border ${!error ? 'border-[#1FC87F] text-[#1FC87F]' : 'border-[#F05E4B] text-[#F05E4B]'
                            } rounded-lg text-center`}>{message}</div>
                    }
                </>
            }
        </div>
        <div className="my-[60px] text-2xl">
            Made with &#x2764;
        </div>
        <div className="mt-8">
            <div className="text-center mb-5">Follow us on</div>
            <div className="flex items-center justify-center gap-4">
                {
                    socialIcons.map((e) => <SocialIcon style={{
                        height: '32px',
                        width: '32px'
                    }} url={e.url} key={e.id} />)
                }
            </div>
        </div>
    </div >);
}
