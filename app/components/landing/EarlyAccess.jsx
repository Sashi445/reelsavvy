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
            console.log(error);
            console.log(error.message);
            if (error.request.status === 400) {
                const data = error.response.data;
                setMessage(data.info);
            }
        }

        setEmail("");
    }

    return (<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="text-center ">
            <div>
                So what are you waiting for?
            </div>
            <div>
                signup for early access
            </div>
        </div>
        <div>
            {
                !message ?
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="user-email">Enter your email here</label>
                            </div>
                            <input type="email" id="user-email" placeholder="someone@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit">Get Early access</button>
                        </div>
                    </form>
                    :
                    <div>
                        {message}
                    </div>
            }
        </div>
    </div>);
}
