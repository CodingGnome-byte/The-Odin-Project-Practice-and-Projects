import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './gsapStyle.css'

export const GsapStagger = () => {
    // TODO: Initiate the gsap.stagger() method
    useGSAP(() => {
        gsap.from('.stagger-box', {
            y:250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            // staggers are implemented when choosing animations
            stagger: {
                amount: 1.5,
                grid: [2,1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    }, [])
    return (
        <>
            <main>
                <h1>
                    GsapStagger
                </h1>
                <p>
                    GSAP stagger is a feature that allows you to apply animations with a staggered
                    delay to a group of elements.
                </p>
                <p>
                    By using the stagger feature in GSAP, you can specify the amount of time to
                    stagger the animations between each element, as well as customize the easing
                    and duration of each individual animation. This enables you to create dynamic
                    and visually appealing effects, such as staggered fades, rotations, movements,
                    and more.
                </p>
                <br />
                <p>
                    Useful if you want to trigger a dynamo effect style animation
                </p>


                <div className="mt-20 h-100">
                    <div className="flex gap-5">
                        <div className="w-20 h-20
                        bg-pink-200 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-300 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-400 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-500 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-600 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-700 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-800 rounded-lg
                        stagger-box" />
                        <div className="w-20 h-20
                        bg-pink-900 rounded-lg
                        stagger-box" />
                    </div>
                </div>

            </main>
        </>
    );
}