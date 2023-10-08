import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import eventData from "../Data/eventData";
import { styles } from "../styles";
import './timeline.css';
import { Link } from "react-router-dom";

const EventsPage = () => {
  return (
    <section
      className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5`}
      style={{ fontFamily: "'Russo One', sans-serif" }}
    >
        
      <div className="timeline-scrollable mb-11">
      <div className="w-full flex items-center justify-center relative">
                <h1 className={`${styles.headingText}`}>
                    Eve<span className="text-glugBlue">n</span>
                    ts
                </h1>
            </div>
        <VerticalTimeline>
          {eventData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className={`mb-8 ${index % 2 === 0 ? 'right-timeline' : 'left-timeline'}`}
              contentStyle={index % 2 === 0 ? { background: 'rgba(6, 39, 53,0.5)', color: 'white' } : { background: 'rgba(6, 39, 53,0.5)', color: 'white' ,}}
              contentArrowStyle={{ borderRight: '7px solid transparent', borderLeft: '7px solid transparent' }} 
              date={event.date}
              iconStyle={{ background: "#fff", color: "" }}
            >
              <h3 className="mb-3 font-medium  text-xl">{event.title}</h3>
              <p className="  font-inter text-sm leading-snug tracking-wide text-opacity-100">{event.description}</p>

              {/* Add an image here */}
              <img src={event.imageURL} alt={event.title} className="mt-4 w-4/5 h-40 " />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <div className="mt-5 relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center">
          <Link to="/events" className="bg-white hover:bg-glugBlue text-glugBlue font-normal hover:text-white py-2 px-4 rounded">
              View All 
            </Link></div>
        
      </div>
    </section>
  );
};

export default EventsPage;
