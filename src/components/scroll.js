import React, { useEffect, useState } from "react";
import '../index.css';


function ScrollDown() {
    const [show, setshow] = useState(false);

    useEffect(() => {
        const to = setTimeout(() => {
            setshow(true);
        }, 2000);
        document.addEventListener("scroll", (e) => {
            clearTimeout(to);
        });
        return () => clearTimeout(to);
    }, []);

return (
    <a href="#sec-2" style={{opacity: show ? "100%" : "0%", transition: "opacity 0.5s"}}>
     <div class="scroll-down"></div>
    </a>
)

}

export default ScrollDown