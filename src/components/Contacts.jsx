import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCertificate } from 'react-icons/fa';

const Contact = () => (
  <section id="personal" className="container my-5">
    <h2 className="mb-4">Personal details and achievements</h2>
    <div className="row gy-4">

      {/* 🏅 Certifications */}
      <div className="col-md-12">
        <div className="card h-100 shadow border-warning">
          <div className="card-header bg-warning text-dark"><FaCertificate className="me-2" />Certifications</div>
          <div className="card-body">
            <ul>
              <li><strong>AWS Certified Solutions Architect – Associate</strong> (G9GYNJPC8JF41SSR)</li>
              <li><strong>Microsoft Certified: Azure AI Engineer Associate</strong> (DD84FR-A47B76)</li>
              <li><strong>Microsoft Certified: DevOps Engineer Expert</strong> (C753DD-X67FEC)</li>
              <li><strong>Microsoft Certified: Azure Developer Associate</strong> (C73B00-2CCA4F)</li>
              <li><strong>Microsoft Azure Fundamentals</strong> – Simplilearn (4218306)</li>
              <li><strong>Microservices</strong> – Udemy</li>
              <li><strong>AWS Solution Architect</strong> – Simplilearn (2609303)</li>
              <li><strong>Jenkins</strong> – SkillUp (4497424)</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 📞 Contact Form */}
      <div className="col-md-12">
  <div className="card h-100 shadow">
    <div className="card-header bg-primary text-white">Get in Touch</div>
    <div className="card-body">
      <div className="mt-4">
        <p><FaPhone className="me-2" />(+91) 8655689394 / 8169162524</p>
        <p><FaEnvelope className="me-2" />pradeep.maurya.dev@gmail.com</p>
        <p>
          <a
            href="https://www.linkedin.com/in/pradeeptechstream/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            <FaLinkedin className="me-2" />
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/pradeepTechStream"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            <FaGithub className="me-2" />
            GitHub
          </a>
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
  </section>
);

export default Contact;
