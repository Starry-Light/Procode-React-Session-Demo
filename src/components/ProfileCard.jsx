import { useState, useEffect } from "react";
import LinkButton from "./LinkButton";
import ProjectCard from "./ProjectCard";

function ProfileCard({ name, role, bio, isVerified, isAvailable, projects }) {
  const [likes, setLikes] = useState(0);
  const [quote, setQuote] = useState("");

  const links = [
    { id: 1, platform: "GitHub", url: "https://github.com" },
    { id: 2, platform: "Twitter", url: "https://twitter.com" },
    { id: 3, platform: "Portfolio", url: "https://example.com" },
  ];

  useEffect(() => {
    const quotes = [
      "Move fast and break things.",
      "Stay hungry, stay foolish.",
      "Think different.",
      "Done is better than perfect.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  useEffect(() => {
    if (likes === 10) {
      console.log("🎉 You reached 10 likes!");
    }
  }, [likes]);

  return (
    <div className="profile-card">
      <h2>
        {name}
        {isVerified && <span className="badge">✓ Verified</span>}
      </h2>
      <p className="role">{role}</p>
      <p className={`status ${isAvailable ? "available" : "unavailable"}`}>
        {isAvailable ? "🟢 Available for Hire" : "🔴 Not Available"}
      </p>
      <p className="bio">{bio}</p>

      <div className="projects-section">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>

      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        👍 {likes} Likes
      </button>

      <div className="links">
        {links.map((link) => (
          <LinkButton key={link.id} platform={link.platform} url={link.url} />
        ))}
      </div>

      {quote && <p className="quote">"{quote}"</p>}
    </div>
  );
}

export default ProfileCard;
