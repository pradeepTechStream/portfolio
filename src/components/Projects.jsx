import { FaAws, FaReact, FaJava, FaTools, FaHeartbeat, FaCarSide, FaShoppingCart, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicronaut, SiVaadin } from 'react-icons/si';

const Projects = () => (
  <section id="projects" className="container my-5">
    <h2 className="mb-4">Projects</h2>
    <div className="row gy-4">

      {/* Project 1: ADaM Designer */}
      <div className="col-md-6">
        <div className="card h-100 border-success shadow">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-center">
              ADaM Designer
              <span className="badge bg-success d-flex align-items-center"><FaHeartbeat className="me-1" /> Healthcare</span>
            </h5>
            <p className="card-subtitle mb-2 text-muted">IQVIA | Senior Software Development Engineer</p>
            <p className="card-text">
              A data modeling and analytics tool to support statistical healthcare innovation. Developed backend/frontend, wrote unit tests, integrated AI, and collaborated with German clients.
            </p>
            <p><strong>Tech Stack:</strong> <SiSpringboot className="me-1" /> Spring Boot, <FaReact className="me-1" /> React, <SiVaadin className="me-1" /> Vaadin 14, PostgreSQL, JUnit</p>
            <p><strong>AI/Cloud:</strong> <FaAws className="me-1" /> AWS Rekognition, ChatGPT, Label Detection</p>
            <p>
              <FaUsers className="me-2 text-primary" /> <strong>Team Size:</strong> 12 developers &nbsp;|&nbsp;
              <FaCalendarAlt className="me-2 text-secondary" /> <strong>Duration:</strong> July 2021 – Present
            </p>
          </div>
        </div>
      </div>

      {/* Project 2: BMW SWL */}
      <div className="col-md-6">
        <div className="card h-100 border-primary shadow">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-center">
              BMW SWL (Software Logistics)
              <span className="badge bg-primary d-flex align-items-center"><FaCarSide className="me-1" /> Automobile</span>
            </h5>
            <p className="card-subtitle mb-2 text-muted">BMW (via Capgemini) | Senior Consultant</p>
            <p className="card-text">
              Backend modules for managing control unit software across BMW car variants. Regular collaboration with the Munich team and product demo ownership.
            </p>
            <p><strong>Tech Stack:</strong> <FaJava className="me-1" /> Java Swing, Spring Boot, Hibernate, REST, SQL</p>
            <p><strong>Cloud:</strong> <FaAws className="me-1" /> AWS S3, Lambda, API Gateway, CloudWatch</p>
            <p>
              <FaUsers className="me-2 text-primary" /> <strong>Team Size:</strong> 24 developers (12 India + 12 Germany) &nbsp;|&nbsp;
              <FaCalendarAlt className="me-2 text-secondary" /> <strong>Duration:</strong> Jan 2020 – June 2021
            </p>
          </div>
        </div>
      </div>

      {/* Project 3: Bonprix Systems */}
      <div className="col-md-12">
        <div className="card h-100 border-warning shadow">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-center">
              Bonprix Systems – Catalog & Partner Management
              <span className="badge bg-warning text-dark d-flex align-items-center"><FaShoppingCart className="me-1" /> E-Commerce</span>
            </h5>
            <p className="card-subtitle mb-2 text-muted">Bonprix (via Direction Software) | Senior Software Engineer</p>
            <p className="card-text">
              Suite of applications for catalog printing, logo management, milestone planning, and partner onboarding. Worked on UI (Vaadin) and backend (Spring).
            </p>
            <p><strong>Tech Stack:</strong> <SiVaadin className="me-1" /> Vaadin 6–8, Spring Boot, Hibernate, REST API, PostgreSQL</p>
            <p><strong>Tools:</strong> <FaTools className="me-1" /> Kubernetes, Git, JIRA</p>
            <p>
              <FaUsers className="me-2 text-primary" /> <strong>Team Size:</strong> 8 developers &nbsp;|&nbsp;
              <FaCalendarAlt className="me-2 text-secondary" /> <strong>Duration:</strong> Sep 2015 – Dec 2019
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
