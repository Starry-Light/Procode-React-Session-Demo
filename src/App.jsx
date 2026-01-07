import "./App.css";
import CardContainer from "./components/CardContainer";
import ProfileCard from "./components/ProfileCard";

function App() {
  const projects = [
    { id: 1, title: "TaskFlow", description: "A productivity app" },
    { id: 2, title: "DevNotes", description: "Note-taking for devs" },
    { id: 3, title: "QuickAPI", description: "API testing tool" },
  ];

  return (
    <CardContainer>
      <ProfileCard
        name="Irfan"
        role="Founder & Developer"
        bio="Building cool stuff and teaching React to the next generation."
        isVerified={true}
        isAvailable={true}
        projects={projects}
      />
      
    </CardContainer>
  );
}

export default App;
