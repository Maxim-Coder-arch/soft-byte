import { JSX } from "react";
import { data } from "./data/dataProjects";
import Link from "next/link";
export default function ProjectsCardsContainer(): JSX.Element {
    return (
        <section id="projects">
            <div className="our-exp-title">
                <h4>Наша экспертиза — в продакшене. <span id="our-mission">Наша миссия — делиться ею.</span></h4>
            </div>
            <div className="projects-card-contaienr">
                <div className="cn-pr">
                    {
                        data.map((project, index) => {
                            return (
                                <Link 
                                target="_blank"
                                key={index} 
                                href={project.projectUrl}>
                                    <div
                                    className="project-card-data">
                                        <div
                                        style={{backgroundImage: `url(${project.imageUrl})`}} 
                                        className="image-project-card-data"></div>
                                        <div className="description-project">
                                            <div className="text-project">
                                                <span>{project.descriptionProject}</span>
                                            </div>
                                            <div className="title-project">
                                                <h5>{project.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}