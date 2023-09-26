// import React from "react";
// import StarsCanvas from "../components/canvas/Star";
// import Hero from "../components/Hero";
// import Why_joinGlug_Page from "./WhyJoinPage";
// import EventsPage from "./EventsPage";
// import ProjectsPage from "./ProjectsPage";
// import { useEffect } from "react";
// import { useRef } from "react";
// import PageLayout from "../Layout/PageLayout";

// const HomePage = ({ setScrolled }) => {
//     const scrollContainerRef = useRef(null);

//     const handleScroll = () => {
//         if (scrollContainerRef.current.scrollTop > 150) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };

//     useEffect(() => {
//         const scrollContainer = scrollContainerRef.current;
//         scrollContainer.addEventListener("scroll", handleScroll);

//         return () => {
//             scrollContainer.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <PageLayout>
           
//             <div ref={scrollContainerRef} style={{ overflow: "auto" }} className="w-full h-screen">
//                 <Hero />
//                 <Why_joinGlug_Page />
//                 <EventsPage />
//                 <ProjectsPage />
//             </div>
//         </PageLayout>
//     );
// };

// export default HomePage;
