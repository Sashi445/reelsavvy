import { Button, InputField, Typography } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import { useState } from "react";


export const EarlyAccess = () => {

    const [email, setEmail] = useState("");

    return (<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="text-center ">
            <Typography {...FontVariant.HeadingBold14} >
                <div>
                    So what are you waiting for?
                </div>
                <div>
                    signup for early access
                </div>
            </Typography>
        </div>
        <div className="flex items-center justiify-center">
            <div>
                <InputField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    placeholder="Eg: someone@example.com"
                    label="Enter your email here"
                />
                <div>
                    <Button
                        variant="primary"
                        kind="elevated"
                        size="small"
                        colorMode="light"
                        onClick={() => {
                            console.log("I'm clicked");
                        }}
                    >Submit</Button>
                </div>
            </div>
        </div>
    </div>);
}
