import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import "./Splash.css";

function AnimatedSplash(props: { theme: any; setTheme: (theme: any) => void; }) {
    return (
        <div className="logo_wrapper">
            <div className="loading">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
    );
}

function Splash(props: { theme: any; setTheme: (theme: any) => void; }) {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // Using useEffect for the timeout to prevent memory leaks
        const timer = setTimeout(() => setRedirect(true), 2000);

        // Clean up the timer when component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this runs once on mount

    return redirect ? (
        <Navigate to="/home" replace={true} />
    ) : (
        <AnimatedSplash theme={props.theme} setTheme={props.setTheme} />
    );
}

export default Splash;
