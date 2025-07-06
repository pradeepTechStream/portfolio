
const About = () => (
  <section id="about" className="container my-5">
    <h2 className="mb-3">About Me</h2>
    <p className="lead">
      I’m a full-stack developer with 9.5+ years of experience in Java, Spring Boot, Micronaut, React, and AWS. I enjoy building scalable web applications and integrating AI services to solve real-world problems.
    </p>

    {/* 📄 Download Resume Button */}
    <a
      href="/resume.pdf"
      download="Pradeep_Maurya_Resume.pdf"
      className="btn btn-primary mt-3"
    >
      📄 Download Resume
    </a>
  
  </section>
  
);

export default About;
