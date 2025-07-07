import {
  FaJava,
  FaPython,
  FaAws,
  FaDatabase,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaTools,
  FaJira,
  FaCloud,
} from 'react-icons/fa';
import { SiSpring, SiJavascript, SiKubernetes, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';
import { AiOutlineApi, AiOutlineBug } from 'react-icons/ai';

const Skills = () => (
  <section id="skills" className="container my-5">
    <h2 className="mb-4">Technical Skills</h2>
    <div className="row gy-4">
      
      {/* 💻 Programming Languages */}
      <div className="col-md-6">
        <div className="card h-100 border-primary">
          <div className="card-header bg-primary text-white">Programming Languages</div>
          <div className="card-body">
            <ul>
              <li><FaJava className="me-2 text-danger" />Worked on Java (1.8 to 17)</li>
              <li><SiSpring className="me-2 text-white bg-success rounded" />Working on Spring Boot (MVC, REST, JPA, Security) and Integrated JWT Authentication.</li>
              <li><FaDatabase className="me-2 text-info" />Working on PostgreSQL and having hands on experiance in SQL (MySQL, PostgreSQL)</li>
              <li><FaPython className="me-2 text-secondary" />Integrated JMS in live project with ActiveMQ Server and RabbitMQ Server. </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🧱 Frameworks & Libraries */}
      <div className="col-md-6">
        <div className="card h-100 border-success">
          <div className="card-header bg-success text-white">Frameworks & Libraries</div>
          <div className="card-body">
            <ul>
              
              <li>Hands on experiance in Micronaut (Microservices)</li>
              <li>Hands on experiance in SpringBoot (Microservices)</li>
              <li>Hands on experiance in Vaadin (Java based UI Frameworks)</li>
              <li>Hands on experiance in Java Swing (Java based UI Frameworks)</li>
              <li><FaReact className="me-2 text-info" />React (Hooks, SPA)</li>
              <li><AiOutlineApi className="me-2 text-primary" />JAX-RS, Swagger</li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* ☁️ Cloud & DevOps */}
      <div className="col-md-6">
        <div className="card h-100 border-info">
          <div className="card-header bg-info text-white">Cloud & DevOps</div>
          <div className="card-body">
            <ul>
              <li><FaAws className="me-2 text-warning" />AWS: S3, Lambda, EC2, API Gateway,IAM,Cloude Watch</li>
              <li><FaCloud className="me-2 text-light" />Azure DevOps:Storage,Git repository</li>
              <li><FaDocker className="me-2 text-primary" />Docker & <SiKubernetes className="me-2" />Kubernetes</li>
              <li><FaGitAlt className="me-2 text-danger" />Git, GitLab CI, Bitbucket,Bamboo</li>
              <li><FaCloud className="me-2 text-light" />Jenkin (CI/CD)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🤖 AI & Integration */}
      <div className="col-md-6">
        <div className="card h-100 border-warning">
          <div className="card-header bg-warning text-dark">AI & Integration</div>
          <div className="card-body">
            <ul>
              <li><FaReact className="me-2 text-primary" />Spring AI + ChatGPT</li>
              <li><FaAws className="me-2 text-warning" />AWS Rekognition & Textract</li>
              <li><AiOutlineApi className="me-2 text-info" />REST APIs, Swagger</li>
              <li><AiOutlineBug className="me-2 text-danger" />JUnit & Mockito (Testing)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🛠 Tools & Platforms */}
      <div className="col-md-6">
        <div className="card h-100 border-dark">
          <div className="card-header bg-dark text-white">Tools & Platforms</div>
          <div className="card-body">
            <ul>
              <li><FaTools className="me-2" />IntelliJ, Eclipse, VS Code</li>
              <li><FaDatabase className="me-2 text-info" />MySQL Workbench, PGAdmin</li>
              <li><FaGithub className="me-2" />GitBash,Swagger,PostMan,Sonar</li>
              <li><FaJira className="me-2 text-warning" />JIRA, Confluence,Agile Model,Scrum,Spring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🧠 Design Patterns */}
      <div className="col-md-6">
        <div className="card h-100 border-secondary">
          <div className="card-header bg-secondary text-white">Design Patterns</div>
          <div className="card-body">
            <ul>
              <li>🧠 MVP, Singleton, Factory, Builder, Prototype</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
