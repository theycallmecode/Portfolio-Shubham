import { useEffect, useState } from "react";

// Structure for StarBackground component
// id, size, x, y, opacity, animationDuration
export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i=0; i < numberOfStars; i++) {
            // create star object
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // size between 1 and 4
                x: Math.random() * 100, // percentage
                y: Math.random() * 100, // percentage
                opacity: Math.random() * 0.5 + 0.5, // opacity between 0 and 1
                animationDuration: Math.random() * 4 + 2, // duration between 5s and 10s
            });
        }
        setStars(newStars);
    };

    return (
        <div className = "fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
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
        </div>
    );
};