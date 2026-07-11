import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './gsapStyle.css'

export const GsapScrollTrigger = () => {


    return(
        <>
            <h1>GsapScrollTrigger</h1>

            <p>
                Gsap Scroll Trigger is a plugin that allows you to create animations that are
                triggered by the scroll position of the page.
            </p>
            <p>
                With ScrollTrigger, you can define various actions to be triggered at specific scroll points,
                such as starting or ending an animation, scrubbing through animations as the user scrolls,
                pinning elements to the screen, and more.
            </p>
        </>
    )

    }
}