import React, { Component } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from '../Dashboard/dashboard'
import AboutMe from "../AboutMe/AboutMe";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import MyResume from "../Myresume/MyResume";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

class Main extends Component {
  state = {
    name: "Jakie Singh",
    desc: "Full-stack Developer",
    tagline: "Ready to turn ideas into reality",
    aboutMe:
      "I'm a Full-stack developer.I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces. I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me listening music, playing cricket or working out in the park.",
    education: {
      graduationUniversity: "Yashwantrao Chavan Maharashtra Open University",
      graduationDegree: "Bachelor of Computer Application",
      graduationCGPA: "7.82",
      technicalSkills: ["React", "JavaScript", "CSS", "HTML5", "GitHub"],
    },
    projects: [
      {
        projectName: "To-Do-App JS",
        projectDesc:
          "  During the development of this project, I understood how to connect the HTML page with functionality written inside a Javascript file. Here I used multiple DOM functions, which made this application dynamic. Because of this, an application can do various operations on user input, also known as adding Dynamic HTML in the website based on the user's input.",
        projectTechnology: ["Javascript", "HTML5", "CSS"],
        hostURL: " https://jakie05.github.io/todo-app-js/",
        repoURL: "https://github.com/Jakie05/todo-app-js.git",
      },

      {
        projectName: "Digital Clock",
        projectDesc:
          "  While developing this project, I got to work on multiple HTML tags and various CSS properties. Most importantly, I got introduced to the functions required for DOM manipulation. Also how to add dynamic HTML using JavaScript and Date function of JavaScript. ",
        projectTechnology: ["Javascript", "HTML5", "CSS"],
        hostURL: " https://jakie05.github.io/clock-time/",
        repoURL: "https://github.com/Jakie05/clock-time.git",
      },

      {
        projectName: "To-Do-App-UI",
        projectDesc:
          " This project is based on HTML and CSS. In this project, I have developed a styled static application containing HTML files and CSS files and understood the difference between Internal CSS, External CSS, and Inline CSS and CSS properties like margin, display, box property, padding, etc.I have made this project responsive by using 'Media Queries'. This project can work on multiple devices having different screen sizes in pixels.",
        projectTechnology: ["HTML5", "CSS"],
        hostURL: "https://jakie05.github.io/to-do-mobile/",
        repoURL: "https://github.com/Jakie05/to-do-mobile.git",
      },

      {
        projectName: "Basic HTML page",
        projectDesc:
          " It is a pure HTML page. In this project, I have used basic HTML tags like Heading, Paragraphs, Lists, Tables, etc.",
        projectTechnology: ["HTML5"],
        hostURL: "https://jakie05.github.io/Git-Html/",
        repoURL: "https://github.com/Jakie05/Git-Html.git",
      },
    ],

    contactDetails: {
      email: "jakiesingh637@gmail.com",
      contactNo: "7977603218",
      address:
        "Surya Nagar,VIkhroli, Mumbai-400083",
    },
  };
  render() {
    return (
      <div className="main" id="home">
        <div className="navbar">{<Navbar propsName={this.state.name} />}</div>

        <div className="image-Dashboard">
          <Dashboard
            propsName={this.state.name}
            propsDesc={this.state.desc}
            propsTagline={this.state.tagline}
          />
        </div>

        <div className="about-me">
          <AboutMe propsAboutMe={this.state.aboutMe} />
        </div>

        <div className="my-portfolio">
          <MyPortfolio />
        </div>

        <div className="resume">
          <MyResume
            propsGraduationUniversity={
              this.state.education.graduationUniversity
            }
            propsGraduationDegree={this.state.education.graduationDegree}
            propsGraduationPercentage={
              this.state.education.graduationPercentage
            }
            propsGraduationCGPA={this.state.education.graduationCGPA}
            propsTechnicalSkills={this.state.education.technicalSkills}
            propsProjects={this.state.projects}
          />
        </div>

        <div className="contact-me">
          <ContactMe
            propsEmail={this.state.contactDetails.email}
            propsContactNo={this.state.contactDetails.contactNo}
            propsAddress={this.state.contactDetails.address}
          />
        </div>
        <div className="footer">
          <Footer propsName={this.state.name} />
        </div>
      </div>
    );
  }
}

export default Main;
