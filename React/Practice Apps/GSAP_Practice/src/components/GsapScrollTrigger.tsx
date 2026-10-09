import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import './gsapStyle.css'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    // Implement the gsap scroll trigger
    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger:box,
                    start: 'bottom, bottom',
                    end: 'top 20%',
                    scrub: true,
                },
                ease: 'power1.inOut'
            })
        })
    }, {scope: scrollRef

    return(
        <main>
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

            <div className="mt-20 w-full h-screen" ref={scrollRef}>
                <div
                    id="scroll-pink"
                    className="scroll-box w-20 h-20 bg-pink-500 round-lg"
                />
                <div
                    id="scroll-blue"
                    className="scroll-box w-20 h-20 bg-blue-500 round-lg"
                />

            </div>

        </main>
    )

}
