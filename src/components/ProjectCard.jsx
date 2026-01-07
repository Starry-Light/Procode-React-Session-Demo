function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
