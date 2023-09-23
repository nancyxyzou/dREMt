import React, { useEffect, useRef } from "react";
import "./index.css";
import LeftCloud from "./clouds";
import RightCloud from "./rightcloud";
import LeftCloud2 from "./leftclouds";
import DreamInterpreter from "./home";

function Hidden() {
  const targetRef = useRef(null);

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

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div class="background">
      {/* clouds */}
      <section className="hidden">
        <LeftCloud />
      </section>

      {/* our_blurb */}
      <section className="hidden">
        <RightCloud />
      </section>

      {/* explanation 1 */}
      <section className="hidden">
        <LeftCloud2 />
        <div>
          <p className="normtext">What do you dream about?</p>
          <p className="normtext">What does it mean?</p>
        </div>
      </section>

      {/* explanation 2 */}
      <section className="hidden">
        <div>
          <p className="normtext">We're here to interpret</p>
          <p className="normtext">what you've dREMt of!</p>
        </div>
      </section>

      {/* prompt_box */}
      <section className="hidden">
        <div>
          <DreamInterpreter />
        </div>
      </section>
    </div>
  );
}

export default Hidden;
