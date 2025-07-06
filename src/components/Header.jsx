import './Header.css';
import profilePic from '../assets/PradeepPhoto.jpeg';
import awsCert from '../assets/aws-badge.png';
import msCert from '../assets/ms-expert-badge.svg';
import msAss from '../assets/ms-associate.svg';

const Header = () => (
  <div className="bg-dark text-white py-3 px-4">
    <div className="container d-flex flex-wrap justify-content-between align-items-center">
      
      {/* 👤 Profile Info */}
      <div className="d-flex align-items-center mb-3 mb-md-0">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-circle me-3"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <div>
          <h5 className="mb-0">Pradeep Maurya</h5>
          <small>📞 +91-9876543210</small>
        </div>
      </div>

      {/* 🏅 Certification Logos */}
      <div className="d-flex align-items-center mb-3 mb-md-0">
        <img
          src={awsCert}
          alt="AWS Certified"
          className="me-2"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <img
          src={msCert}
          alt="Microsoft Certified"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <img
          src={msAss}
          alt="Microsoft Certified"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
      </div>

      {/* 🔗 Navigation */}
      <nav className="mt-3 mt-md-0">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#personal">Personal</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
