import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";



function CV(props) {
  const {
    firstName,
    lastName,
    title,
    email,
    phone,
    address,
    linkedin,
    github,
    about,
    experience,
    education,
    skills,
  } = props.data;

  const linkedinUrl = `${linkedin}`;
  const linkedinName = linkedinUrl
    .replace("https://www.linkedin.com/in/", "")
    .replace("/", "");

  const githubUrl = `${github}`;
  const githubName = githubUrl
    .replace("https://github.com/", "")
    .replace("/", "");

  
  const printPDF = () => {
    const input = document.getElementById("cv");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.5);
      const aspectRatio = canvas.width / canvas.height;
      const width = 210;
      const height = width / aspectRatio;
      const pdf = new jsPDF("p", "mm", "a4");
      let pageOffset = 0;

      while (pageOffset < 297) {
        const remainingHeight = height - pageOffset;
        let pageHeightToUse =
          remainingHeight > height ? height : remainingHeight;
          
        pdf.addImage(imgData, "JPEG", 0, 0, 210, pageHeightToUse);
        pageOffset += 297;

        

        if (pageOffset < height) {
          pdf.addPage();
        }
      }
      

      pdf.addImage(imgData, "PNG", 0, -297, 210, height);
      pdf.save("cv.pdf");
    });
  };

  return (
    <div className="CV">
      <div className="Content">
        <div className="printPDF" id="cv">
          <div className="Title">
            <div className="Col1">
              <h1 id="nameCV">{`${firstName} ${lastName}`}</h1>
              <h2 id="posCV">{title}</h2>
              <p id="aboutCV">{about}</p>
            </div>
            <div className="Col2">
              {phone && (
                <p className="col1P">
                  <FontAwesomeIcon icon={faPhone} /> &nbsp; {phone}
                </p>
              )}
              {email && (
                <p className="col1P">
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp; {email}
                </p>
              )}
              {address && (
                <p className="col1P">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; {address}
                </p>
              )}
              {linkedin && (
                <p className="col1P">
                  <a
                    href={linkedin}
                    style={{
                      color: "rgb(255, 217, 249)",
                      textDecoration: "none",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "rgb(255, 217, 249)" }}
                    />
                    &nbsp; {linkedinName}
                  </a>
                </p>
              )}
              {github && (
                <p className="col1P">
                  <a
                    href={github}
                    style={{
                      color: "rgb(255, 217, 249)",
                      textDecoration: "none",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "rgb(255, 217, 249)" }}
                    />
                    &nbsp; {githubName}
                  </a>
                </p>
              )}
            </div>
          </div>
          <div className="Info">
            <div className="experience-section">
              <h2 className="exp-section-title">Experience</h2>
              <div className="divider"></div>
              {experience.map((job, index) => (
                <div key={index} className="job">
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-position">
                    <strong>{job.position}</strong>
                  </p>
                  <p className="job-dates">
                    {job.startDate} - {job.endDate}
                  </p>
                  <p className="job-description">{job.responsabilities}</p>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h2 className="edu-section-title">Education</h2>
              <div className="divider"></div>
              <div className="edu-container">
                {education.map((edu, index) => (
                  <div key={index} className="education">
                    <h3 className="education-school">{`${edu.school}`}</h3>
                    <p className="education-degree">{`${edu.degree}`}</p>
                    <p className="education-dates">{`${edu.endDate}`}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <h2 className="skills-section-title">Skills</h2>
              <div className="divider"></div>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skills">
                    <h3 className="skills-name">{`${skill.skill}`}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="button pdfButton" onClick={printPDF}>
          Save as PDF
        </button>
        <button className="button msgButton" disabled>
          In order to save as PDF, please enlarge the screen a bit.
        </button>
      </div>
    </div>
  );
}

export default CV;
