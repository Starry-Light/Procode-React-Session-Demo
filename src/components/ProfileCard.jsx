import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProfileCard({ name, role, isAvailable, projects }) {
  const [likes, setLikes] = useState(0);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((err) => console.error("Failed to fetch joke:", err));
  }, []);

  return (
    <div className="profile-card">
      <h2> {name} </h2>
      <p className="role">{role}</p>
      <p className={`status ${isAvailable ? "available" : "unavailable"}`}>
        {isAvailable ? "🟢 Available for Hire" : "🔴 Not Available"}
      </p>

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

      {joke && (
        <div className="joke-section">
          <h3>😄 Random Joke</h3>
          {joke.type === "single" ? (
            <p>{joke.joke}</p>
          ) : (
            <>
              <p className="joke-setup">{joke.setup}</p>
              <p className="joke-delivery">{joke.delivery}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
