import React from "react";
import Container from "../components/Container";
import ProjectsCon from "../components/ProjectsCon";
import Project from "../components/Project";
import Footer from "../components/Footer";
import projects from "../utils/projects.json";

function Projects() {
    return (
        <div>
            <Container>
                <ProjectsCon>
                {projects.map(project => (
                    <Project
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