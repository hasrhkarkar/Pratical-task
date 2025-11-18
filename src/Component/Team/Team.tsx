import React from "react";
import "./Team.scss";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Team: React.FC = () => {
  // ✅ JSON Data moved inside component
  const teamData = {
    team: {
      title: "Meet out Team",
      members: [
        {
          id: 1,
          name: "Ravi Mehta",
          image: "/images/team1.svg",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
        },
        {
          id: 2,
          name: "Roni Mehta",
          image: "/images/team2.svg",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
        },
        {
          id: 3,
          name: "Ravi Mehta",
          image: "/images/team3.svg",
          description:
            "Lorem ipsum is a placeholder text commonly used to demonstrate the visual layout of a document or a typeface without.",
        },
      ],
    },
  };

  const members: TeamMember[] = teamData.team.members;

  return (
    <section className="team-section">
      {/* Team Title */}
      <h2 className="team-title">{teamData.team.title}</h2>

      {/* Team Members Grid */}
      <div className="team-container">
        <div className="team-grid">
          {members.map((member) => (
            <div key={member.id} className={`team-card team-card-${member.id}`}>
              {/* Member Image Circle */}
              <div className="member-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
              </div>

              {/* Member Info */}
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
