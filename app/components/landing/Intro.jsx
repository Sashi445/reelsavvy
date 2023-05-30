import { Button, Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import Image from "next/image";


export const Intro = () => {
    return (
        <div className="h-full w-full flex items-center justify-between p-10 border">
            <div>
                <Typography {...FontVariant.HeadingBold14} color={...colorPalette.popWhite[500]} >
                    {/* Don’t know what to watch for this weekend? */}
                </Typography>
                <p>
                    Can't recall the movie your friend suggested recently?
                </p>
                <p>
                    {/* Don’t worry we’ve figured it out for you : 0 */}
                </p>
            </div>
            <div>
                {/* <Image src={''} alt="someimage" height={100} width={100} /> */}
            </div>
        </div>
    );
}