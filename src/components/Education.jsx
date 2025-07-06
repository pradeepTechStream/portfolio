import { FaGraduationCap, FaUniversity, FaClock } from 'react-icons/fa';

const Education = () => (
    <section id="education" className="container my-5">
    <h2 className="mb-3">Educational details</h2>
    <div className="card h-100 shadow border-info">
    <div className="card-header bg-info text-white d-flex align-items-center">
      <FaGraduationCap className="me-2" /> Educational Qualifications
    </div>
    <div className="card-body">
      
      {/* MCA */}
      <div className="mb-4">
        <h5 className="mb-1">Master of Computer Applications (MCA)</h5>
        <p className="mb-0 text-muted">
          <strong>College:</strong> Late. BhauSaheb Hiray Institute of Computer Education,Bandra,Mumbai,Maharashtra.
        </p>
        <p className="mb-0 text-muted">
          <FaUniversity className="me-2 text-primary" />
          Mumbai University
        </p>
        <p className="mb-0"><strong>Years:</strong> 2012 – 2015</p>
        <p className="mb-0"><strong>CGPI:</strong> 7.05 / 10</p>
        <span className="badge bg-success mt-2"><FaClock className="me-1" /> Full-Time 3 Year</span>
      </div>
      <hr />

      {/* BSc.IT */}
      <div className="mb-4">
        <h5 className="mb-1">Bachelor of Science in Information Technology (BSc.IT)</h5>
        <p className="mb-0 text-muted">
          <strong>College:</strong> Shr. Shankar Narayan Education Trust,Bhayandar, Mumbai,Maharashtra.
        </p>
        <p className="mb-0 text-muted">
          <FaUniversity className="me-2 text-primary" />
          Mumbai University
        </p>
        <p className="mb-0"><strong>Years:</strong> 2008 – 2011</p>
        <p className="mb-0"><strong>Percentage:</strong> 62%</p>
        <span className="badge bg-success mt-2"><FaClock className="me-1" /> Full-Time 3 Year</span>
      </div>
      <hr />

      {/* HSC */}
      <div className="mb-4">
        <h5 className="mb-1">Higher Secondary Certificate (HSC)</h5>
        <p className="mb-0 text-muted">
          <strong>College:</strong> Abhinav Degree College,Bhayandar,Mumbai,Maharashtra.
        </p>
        <p className="mb-0 text-muted">
          <FaUniversity className="me-2 text-primary" />
          Maharashtra State Board
        </p>
        <p className="mb-0"><strong>Year:</strong> 2008</p>
        <p className="mb-0"><strong>Percentage:</strong> 60%</p>
        <span className="badge bg-success mt-2"><FaClock className="me-1" /> Full-Time</span>
      </div>
      <hr />

      {/* SSC */}
      <div>
        <h5 className="mb-1">Secondary School Certificate (SSC)</h5>
        <p className="mb-0 text-muted">
          <strong>School:</strong> BHayandar Secondary School,Bhayandar,Mumbai,Maharashtra.
        </p>
        <p className="mb-0 text-muted">
          <FaUniversity className="me-2 text-primary" />
          Maharashtra State Board
        </p>
        <p className="mb-0"><strong>Year:</strong> 2006</p>
        <p className="mb-0"><strong>Percentage:</strong> 76.8%</p>
        <span className="badge bg-success mt-2"><FaClock className="me-1" /> Full-Time</span>
      </div>
    </div>
  </div>
    </section>
  
);

export default Education;
