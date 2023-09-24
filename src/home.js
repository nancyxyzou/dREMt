import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import LeftCloud from "./components/clouds";
import RightCloud from "./components/rightcloud";
import LeftCloud2 from "./components/leftclouds";
import LeftCloud3 from "./components/leftcloud3";
import DreamInterpreter from "./interpreter";
import MiddleCloud from "./components/middlecloud";
import ScrollDown from "./components/scroll";
import LoadCloud from "./components/loadingclouds";

function Homepage() {
  const targetRef = useRef(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div class="background">
      <section className="hidden">
        <LeftCloud />
        <ScrollDown />
      </section>

      <section className="hidden">
        <RightCloud />
      </section>

      <section className="hidden">
        <div> <LeftCloud2 /></div>
       
        <div>
          <p className="normtext">What do you dream about?</p>
          <p className="normtext">What does it mean?</p>
        </div>
      </section>

      <section className="hidden">
        <div> <MiddleCloud /></div>
        <div>
          <p className="normtext">We're here to interpret what you've dREMt of!</p>
        </div>
        <LeftCloud3 />
      </section>

      <section className="hidden">
        <div>
            <LoadCloud show={loading}/>
            <p className="normtext" id="lastprompt">Enter your dream and see what it means...</p>
            <div className="textbox-container">
              <DreamInterpreter loading={loading} setLoading={setLoading} />
            </div>
        </div>
      </section>

      <section className="credits">
            <div>
                <p className="credtext">this Is just for fun And Not to be taken seriously 🙂</p>
                <p className="credtext">made with passion by:</p>
                <p className="credtext">yaxin w, maggie w, nancy Z</p>
                <p></p>
            </div>
            
      </section>
    </div>
  );
}

export default Homepage;
