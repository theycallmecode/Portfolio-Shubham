import { useEffect, useState } from "react";

// Structure for StarBackground: id, size, x, y, opacity, animationDuration
// Structure for meteors: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]); // array of star objects
    const [meteors, setMeteors] = useState([]); // array of meteor objects

    useEffect(() => { // on mount
        generateStars();    
        generateMeteors();

        const handleResize = () => { // on window resize
            generateStars();
        };
        // add event listener
        window.addEventListener("resize", handleResize);
        // cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    // star generation
    const generateStars = () => { // generate stars based on screen size
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i=0; i < numberOfStars; i++) { // loop to create stars
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // size btwn 1 & 4
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, // duration between 5s and 10s
            });
        }
        setStars(newStars); // update state
    };

    // meteor generation
    const generateMeteors = () => {
        const numberOfMeteors = 5;
        const newMeteors = [];

        for (let i=0; i < numberOfMeteors; i++) { // loop to create meteors
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    return ( // JSX rendering stars and meteors
        <div className = "fixed inset-0 overflow-hidden pointer-events-none z-0">
            
            {stars.map((star) => ( // render stars
                <div 
                    key = {star.id}
                    className="star animation-pulse-subtle"
                    style={{
                        width: star.size + "px" ,
                        height: star.size + "px" ,
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => ( // render meteors
                <div 
                    key = {meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px" ,
                        height: meteor.size * 2 + "px" ,
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};