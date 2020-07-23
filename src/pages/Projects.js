import React from "react";
import Container from "../components/Container";
import ProjectsCon from "../components/ProjectsCon";
import Card from "../components/Card";
import Footer from "../components/Footer";
import projects from "../utils/projects.json";
import icons from "../utils/icons.json";

function Projects() {
    return (
        <div>
            <Container>
                <ProjectsCon>
                {projects.map(project => (
                    <Card
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageURL}
                    gitURL= {project.gitURL}
                    deployedURL= {project.deployedURL}
                    tech={project.tech} />
                ))}
                </ProjectsCon>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects;