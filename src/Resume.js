// Resume.js
import React from 'react';
import './Resume.css';

/**
 * @return {div} of resume
 */
function Resume() {
  return (
    <div id='resume' className="text-center mx-2">
      <h2 className="d-block">
        <a id="resume_link" className="resume link" href="resume/resume.pdf" target="_blank">
          Keisha Shepherd's Resume
        </a>
      </h2>
      <h4>
        <a className="blog_link" href="https://www.linkedin.com/in/keisha-shepherd-02a6936b/">LinkedIn</a> / <a className="blog_link" href="https://kshep425.github.io"> GitHub</a>
      </h4>
      <div className="text-left">

        <br />
        <h3>Summary</h3>
        <p>
          15 years of experience as a Sr. Test Engineer, Sr. Systems Engineer, Systems Engineer, and Satellite
          Systems
          Engineer. Skilled at automated testing, managing requirements, generating documentation, usability
          analysis,
          and testing. Experienced with scrum, agile, and waterfall processes.
        </p>

        <h3>Technical Skills</h3>

        <p><span><strong>FullStack Web Developer Skills</strong></span>:
          HTML5, CSS3, Javascript, jQuery, ES6, Git/Github/Gitlab, Responsive Web Design, Bootstrap, Object Oriented Programming, JSON/API, REST, CRUD, AJAX, MySQL, Sequelize.js, MongoDB, Mongoose.js, ExpressJS, NodeJS, ReactJS, Heroku, Handlebars, Jest</p>
          <p>
          Ruby RSpec, Python, VMWare, Jenkins, Redmine, Agile, Scrum, SELENIUM, JMeter, Java, ECLIPSE,
          CLOUDBASE,
          HADOOP, HIVE, SIGINT systems, Version One, ClearQuest, Crystal Reports, Human Factors Usability and
          Design
          Analysis, Program Management, Windows, Unix, Linux, Perl, C, C++, XML, LAN/WAN, DOORS, and STK.</p><p> She
          is
          also an expert in Microsoft Word (all versions), Excel (pivot tables and charts), PowerPoint, and
          Project.
        </p>
        <h3>

          Education/Training
        </h3>
        <ul>
          <li>
              Bootcamp Certificate: John’s Hopkin’s University Full-Stack Developer Bootcamp - Oct 2019-Mar
              2020:
          </li>
          A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
          Javascript,
          JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS
          <li>
              MS Engineering Management, George Washington University, May 2006
          </li>
          <li>
              BS Electrical Engineering, Morgan State University, May 2003
            <ul>
              <li>
                      Full Academic Honors Scholarship, PACE Program, Golden Key International Honours Society
              </li>
            </ul>
          </li>
          <li>

              Agile Automated Testing, June 2017; API First Development, August 2015; Certified Scrum Master,
              January
              2012; Attended Selenium Training, February 2012; Attended NDIA 13th Annual Systems Engineering
              Conference, October 2010; International Software Testing Qualifications Board, Certified Tester
              Foundation
              Level (CTFL), 2009; Human Factors International Usability Analyst Certification, 2009
          </li>
        </ul>
        <h3>
          Work History
        </h3>

        <dt>

          InterConnect Defense - Sr Test Engineer: August 2018-September 2019
        </dt>
        <ul>
          <li>
              Performed integration, component and system-level testing across multiple product lines,
              to include test plan development, authoring of test procedures, test environment configuration,
              test
              execution, and generation of test reports.
          </li>
          <li>
              Managed traceability of test procedures and software requirements using Testlink
          </li>
          <li>
              Developed test scripts in Python for automated testing of software functionality.
          </li>
          <li>
              Discovered and tracked software bugs in Jira and documented testing results in test reports
          </li>
          <li>
              Configured telecommunications equipment including switches, Private Branch Exchanges (PBXs), and
              Video Teleconferencing Equipment (VTCs)
          </li>
          <li>
              Analyzed TCP/UDP packets in Wireshark
          </li>
        </ul>
        <dt>
          Northrop Grumman – Automated Test Engineer / Sr. Systems Engineer: November 2014 – August 2018
        </dt>
        <ul>
          <li>
              Designed, created, executed, and refactored automated Ruby RSpec, Bash and Expect test scripts
              to
              perform
              integration and development testing against the command and control system utilizing Jenkins for
              continuous integration.

          </li>
          <li>
              Worked with internal and external development teams to fix issues identified with thorough
              testing of the command and control system with thousands of generated automated tests.

          </li>
          <li>
              Generated, reviewed, and updated end of sprint team documentation, wikis, and test reports
          </li>
          <li>
              Directed and lead sprint planning activities, daily standups, retrospectives,gather status on
              tasks and any internal and external issues as scrum master
          </li>
          <li>
              NG Community Service - STEM Mentor for Pikesville High School and Baltimore Leadership School
              for Young Women
          </li>

        </ul>

        <dt>
          Sotera – Systems Engineer/Automated Test Engineer: June 2009 – September 2014
        </dt>
        <ul>
          <li>
              Developed automated tests utilizing Thucydides framework, Selenium, and JUnit to improve test
              efficiency and effectiveness
          </li>
          <li>
              Developed and executed System’s Web User Interface, GM Cloudbase, Hive, and Hadoop Test Plans
              and
              Procedures based on Requirements and system capabilities

          </li>
          <li>
              Responsible for validation and verification of the integration of requirements, design, and
              technology
              for
              development of complex systems utilizing a JIRA workflow for our systems engineering,
              development, and
              testing processes

          </li>
          <li>
              Analyzed, generated, and distributed Requirements, Test Procedures, Test Results, Tickets, Daily
              Standup
              Notes, Scrum Meeting Notes, and Weekly Status Reports for complex systems and IEEE and 508
              compliant
              systems

          </li>
          <li>
              Managed the tasks of the development and test teams, set up a process for completing work and
              addressing
              issues in a JIRA ticket tracking system, and managing and running Engineering Review Board
              (ERB)/Configuration Control Board (CCB) meetings

          </li>
        </ul>
        <dt>

          Lockheed Martin IS&S - Sr. Systems Engineer / Satellite Engineer: June 2003 – June 2009
        </dt>
        <ul>
          <li>
              Tested Java and Perl software applications and reported bugs and discrepancies to the developers
          </li>
          <li>
              Generated and managed all full-lifecycle systems engineering documentation, such as CONOPS,
              systems
              requirements, user manuals, training plans, notes, and schedules for multiple operational
              software
              application

          </li>
          <li>
              Commanded a multi-million dollar spacecraft (AQUA) and ensured that the spacecraft was
              completely
              operational and all of the data collected by the spacecraft was cleanly dumped to Polar Ground
              Stations
              in
              Alaska and Norway

          </li>
          <li>
              Provided technical direction for on-orbit mission support and prepared for critical vehicle
              malfunctions with
              recommended alternate operating techniques to continue maximum mission support

          </li>
          <li>
              Trained new engineers on AQUA and AURA Online Engineer Activities, Flight Dynamics System (FDS),
              MMS,
              and Analysis systems

          </li>
          <li>
              Lockheed Martin Engineering Leadership Development Program Graduate

          </li>

        </ul>
        <dt>
          Proctor and Gamble - Summer Intern / 1st Level Manager - Diapers Launch: June 2002 – Aug. 2002
        </dt>
        <ul>
          <li>
              Project Lead for Scrap Reduction Project on Diaper Lines.
          </li>
          <li>
              Managed all electrical issues dealing with the Generation 2 Fully Automatic Case Packer.
          </li>
          <li>
              Acted as a single point of contact between Germany, Cincinnati, and Cape Girardeau Plant.
          </li>
          <li>
              Completed the electrical pre-startup inspection for the Case Packer.
          </li>
          <li>
              Executed the readiness template and collected all deliverables on time.
          </li>

        </ul>
        <dt>

          SIECA Summer Intern - Microelectronic Signals and Systems Branch, Code 564, NASA Goddard Space
          Flight
          Center: May 2001 – Aug. 2001
        </dt>
        <ul>
          <li>
              Designed a Galois Field Multiplier and Deinterleaver for the Reed-Solomon Encoder/Decoder chip,
              using
              VHDL code on Unix computer.
          </li>
          <li>
              Presented a 15-minute presentation to a group including Code 560 Electrical Systems Center
              Branch Head
              -
              John Day, composed an abstract and written report.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
