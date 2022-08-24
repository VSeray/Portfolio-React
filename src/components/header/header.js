import img1 from '../../style/images/linkedin.png';
import img2 from '../../style/images/github.png';
import img3 from '../../style/images/twitter.png';
import img4 from '../../style/images/angelist.png';
import img5 from '../../style/images/logo.webp';
import '../../style/header.css';

function Header() {
  return (
    <div className="header-con">
      <header className="desk-header">
        <div className="header-logo">
          <img src={img5} alt="logo" className="logo" />
        </div>
        <nav className="navigation">
          <li>
            <a href="/" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </nav>
        <div className="socials">
          <a href="https://www.linkedin.com/in/vanaseraydarian/">
            <img src={img1} alt="LinkedIn icon" className="social-img" />
          </a>
          <a href="https://twitter.com/SerayVana">
            <img src={img3} alt="Twitter icon" className="social-img" />
          </a>
          <a href="https://angel.co/u/vana-seraydarian">
            <img src={img4} alt="Angelist icon" className="social-img" />
          </a>
          <a href="https://github.com/VSeray">
            <img src={img2} alt="Github icon" className="social-img" />
          </a>
        </div>
      </header>
      <section className="title-con">
        <div className="con">
          <div className="title-text">
            <img src={img6} alt="Vana Seraydarian" className="name-img" />
          </div>
          <div className="role">
            <h1>Full Stack Developer</h1>
          </div>
          <div className="description">
            <p>
              I am a software enthusiast, I can help you develop web
              applications. Check out some of my work in the Projects section.
              If you like what you see and have a project you need coded, don’t
              hesitate to contact me. I am very excited to work with you!
            </p>
          </div>
          <div className="button-con">
            <a
              href="https://docs.google.com/document/d/1PdcbWdoCXYtLFDPPgJJQ1uWJM3ugDYC3aAYLzHkOCsw/edit?usp=sharing"
              className="button"
            >
              Get My Resume
            </a>
          </div>
          <div className="message-con">
            <p>Currently open to new work opportunities !</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
