import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground"; // star background component

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            { /* Theme Toggle Button */ }
            <ThemeToggle />
            
            { /* Background Effects */ }
            <StarBackground />

            { /* Navbar */ }
            <Navbar />

            { /* Main Content */ }

            { /* Footer */ }
        </div>
    );
};