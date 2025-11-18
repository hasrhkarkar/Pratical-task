import React, { useState } from "react";
import "./Timeline.scss";

interface TimelineEvent {
  id: number;
  year: string;
  description: string;
  numberSvg: string;
}

const Timeline: React.FC = () => {
  const timelineData = {
    timeline: {
      title: "Timeline",
      events: [
        {
          id: 1,
          year: "2015",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
          numberSvg: "/images/firstno.svg",
        },
        {
          id: 2,
          year: "2017",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
          numberSvg: "/images/secno.svg",
        },
        {
          id: 3,
          year: "2019",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
          numberSvg: "/images/thirdno.svg",
        },
        {
          id: 4,
          year: "2021",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
          numberSvg: "/images/fourthno.svg",
        },
      ],
    },
    bird: {
      image: "/images/bird-first.svg",
      alt: "Decorative bird",
    },
  };

  const [activeEvent, setActiveEvent] = useState<number>(1);
  const events: TimelineEvent[] = timelineData.timeline.events;

  return (
    <section className="timeline-section">
      {/* Decorative Bird */}
      <div className="timeline-bird">
        <img src={timelineData.bird.image} alt={timelineData.bird.alt} />
      </div>

      {/* Timeline Title */}
      <h2 className="timeline-title">{timelineData.timeline.title}</h2>

      {/* Timeline Container */}
      <div className="timeline-container">
        <div className="timeline-content">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`timeline-item timeline-item-${event.id} ${
                activeEvent === event.id ? "active" : ""
              }`}
              onClick={() => setActiveEvent(event.id)}
              >
              {/* Number SVG */}
              <div className="timeline-number">
                <img src={event.numberSvg} alt={`Number ${event.id}`} />
                <div className="timeline-circle">
                <span className="timeline-year">{event.year}</span>
              </div>
              </div>

              {/* Year Circle */}
              

              {/* Connector Dot */}
              <div className="timeline-dot"></div>

              {/* Description Box */}
              <div className="timeline-description">
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
