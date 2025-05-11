import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                AI-Powered Gym Coach: Exercise Classification and Form
                Correction Using Video Analysis
              </h2>
              <p className="text-white-50 md:text-xl">
                A desktop application—scalable to mobile—that helps beginners,
                intermediates, and advanced users correct their form for key
                compound movements: Overhead Press, Squats, and Bent-Over Rows.
                The system uses supervised machine learning with convolutional
                neural networks (CNNs) to analyze video frames in real-time and
                provide corrective feedback on form. Key challenges included
                data extraction, optimizing processing speed, and managing
                memory efficiency during frame analysis.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>AI Powered Chess Game</h2>
              <p className="text-white-50 md:text-m">
                A chess game that lets users play against an AI agent or another
                human opponent. The AI leverages adversarial search
                algorithms—commonly used in two-player strategy games—to
                evaluate moves and optimize decision-making based on board
                state. Built collaboratively with two peers from Concordia
                University, this project demonstrates practical applications of
                AI in game theory and can be extended into reinforcement
                learning for more dynamic training.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Pet Adoption Website: My First Full-Stack Web App</h2>
              <p className="text-white-50 md:text-m">
                This was the first website I built using Node.js, HTML, CSS, and
                JavaScript—a project where I poured in a lot of passion and
                dedication to make it feel special. Through it, I learned the
                value of clean structure and styling, which later led me to
                explore more efficient workflows with Bootstrap, Three.js, and
                React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
