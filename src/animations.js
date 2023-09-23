import React, { useEffect, useRef } from 'react';
import './index.css';
import TextBoxInput from './textbox';
import BoxComponent from './interpretations'; // Adjust the import path
import LeftCloud from './clouds';
import RightCloud from './rightcloud';

function Hidden() {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    })
    const hiddenElements = document.querySelectorAll('.hidden');
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

      {/* prompt_box */}
      <section className="hidden">
        <div>
          <TextBoxInput/>
          <BoxComponent />
        </div>
      </section>
    </div>
  );

}

export default Hidden;

