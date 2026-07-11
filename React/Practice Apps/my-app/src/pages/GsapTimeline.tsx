import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import './gsapStyle.css'

export const GsapTimeline = () => {

    // This is where you implement the gsap timeline
    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    });

    // Each time you want to use gsap, you must use the hook
    //  We can use timeline
    useGSAP(() => {  //Identifier
        timeline.to('#yellow-box', {
            // Variables to pass to container that affects actions
            x:250,
            rotation: 360,
            borderRadius: '100%',
            ease: 'back.inOut'

        })
        // this adds an additional animation
        timeline.to('#yellow-box', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: .5,
            ease: 'back.inOut'
        })
    }, []);


    return(
        <>
            <h1>GsapTimeline</h1>
            <p>
                The <code>gsap.timeline()</code> method is used to create a timeline instance that can be used to
                manage multiple instances that can be used to manage multiple animations.
                <br /> The <code>gsap.timeline()</code> method is similar to the <code>gsap.to()</code>,
                <code>gsap.from()</code>, and <code>gsap.fromTo()</code> methods, but the difference is that
                the <code>gsap.timeline()</code> method are used to animate elements from their current state to
                a new state, from a new state to their current sate, from a new state to  a new state, respectively.
            </p>
            <p>
            </p>
            <div className="mt-20 space-y-10">
                <button onClick={() => {
                    if(timeline.paused()){
                        timeline.play();
                    }else{
                        timeline.pause();
                    }
                }}>
                Play/Puase
                </button>
            </div>

            <div id="yellow-box" className="w-20 h-20 bg-yellow-200 border-lg"></div>
        </>
    )
}