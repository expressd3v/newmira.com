import React, {FC, Fragment} from 'react';
import styled from "@emotion/styled";
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import {AddTaskOutlined, ExpandMore, HelpOutline} from "@mui/icons-material";

const FaqQuestions: FC = () => {
    const questions = [
        {
            question: "What is the typical process for software development at your company?",
            answer: <Fragment>
                <p>
                    At Newmira Digital, our software development process typically follows these key steps:
                </p>
                <ol>
                    <li>
                        Discovery and Requirement Gathering: We begin by thoroughly understanding your project
                        requirements, goals, and expectations. Our team works closely with you to gather all necessary
                        information, conduct workshops, and define the scope of the project.
                    </li>
                    <li>
                        Planning and Design: Once we have a clear understanding of your requirements, we move on to
                        planning and designing the software architecture. This involves creating wireframes, user flows,
                        and system design documents that outline the structure and functionality of the software.
                    </li>
                    <li>
                        Development and Coding: With the design in place, our skilled developers start coding and
                        building the software. We follow industry best practices and utilize agile development
                        methodologies to ensure efficient and collaborative development.
                    </li>
                    <li>
                        Testing and Quality Assurance: Throughout the development process, we conduct rigorous testing
                        and quality assurance to identify and fix any bugs or issues. Our dedicated QA team performs
                        comprehensive testing across multiple devices and platforms to ensure a stable and reliable
                        software product.
                    </li>
                    <li>
                        Deployment and Launch: Once the software has been thoroughly tested and approved, we deploy it
                        to the production environment. Our team ensures a smooth transition and provides assistance
                        during the launch process to ensure a successful go-live.
                    </li>
                    <li>
                        Maintenance and Support: We offer ongoing maintenance and support services to ensure your
                        software remains up-to-date, secure, and optimized. This includes regular updates, bug fixes,
                        performance enhancements, and timely technical assistance.
                    </li>
                </ol>
            </Fragment>
        },
        {
            question: " How do you ensure the security of the software developed by your company?",
            answer: <Fragment>
                <p>
                    At Newmira Digital, we prioritize the security of the software we develop. We employ
                    industry-standard security practices and follow a multi-layered approach to ensure the highest level
                    of security for our clients. Here are some of the measures we take:
                </p>
                <ol>
                    <li>
                        Secure Coding Practices: Our developers follow secure coding practices to mitigate common
                        security vulnerabilities. We adhere to industry standards such as OWASP (Open Web Application
                        Security Project) guidelines and conduct code reviews to identify and address any potential
                        security risks.
                    </li>
                    <li>
                        Data Encryption: We utilize strong encryption algorithms to protect sensitive data within the
                        software. This includes encrypting data at rest and in transit, ensuring that your information
                        remains secure throughout the entire process.
                    </li>
                    <li>
                        Access Control and Authentication: We implement robust access control mechanisms and
                        authentication protocols to prevent unauthorized access to your software. User roles and
                        permissions are carefully defined, and we employ secure authentication methods such as
                        two-factor authentication (2FA) to enhance security.
                    </li>
                    <li>
                        Regular Security Audits: We conduct regular security audits and penetration testing to identify
                        and address any potential vulnerabilities. This proactive approach allows us to continuously
                        monitor and enhance the security of the software.
                    </li>
                    <li>
                        Compliance with Industry Standards: We stay updated with the latest security standards and
                        regulations in the industry. If your software needs to comply with specific security frameworks
                        (e.g., GDPR, HIPAA), we ensure that the necessary measures are implemented.
                    </li>
                </ol>
            </Fragment>
        },
        {
            question: "What programming languages and technologies do you specialize in?",
            answer: <Fragment>
                <p>
                    At Newmira Digital, we specialize in a wide range of programming languages and technologies to
                    cater to diverse project requirements. Some of the key programming languages we work with
                    include:
                </p>
                <ul>
                    <li>
                        <b>Java</b>: A versatile language known for its platform independence and robustness, widely
                        used for enterprise-level applications.
                    </li>
                    <li>
                        <b>Python</b>: A popular language known for its simplicity, readability, and vast array of
                        libraries, making it suitable for a wide range of applications, including web development, data
                        analysis, and artificial intelligence.
                    </li>
                    <li>
                        <b>JavaScript</b>: The go-to language for web development, JavaScript enables us to create
                        dynamic and interactive user interfaces and build scalable web applications.
                    </li>
                    <li>
                        <b>C#</b>: A powerful language primarily used in Microsoft technologies, such as .NET framework
                        and ASP.NET, making it suitable for developing Windows applications and enterprise-level
                        solutions.
                    </li>
                    <li>
                        <b>Swift and Objective-C</b>: These are the primary languages for iOS app development, enabling
                        us to create native applications for Apple devices.
                    </li>
                </ul>
                <p>
                    In addition to programming languages, we also have expertise in various technologies and frameworks,
                    including:
                </p>
                <ul>
                    <li>
                        <b>React.js and Angular:</b> These front-end frameworks enable us to build responsive, modern,
                        and interactive user interfaces for web applications.
                    </li>
                    <li>
                        <b>Node.js:</b> A server-side JavaScript runtime environment that allows us to build scalable
                        and efficient web applications.
                    </li>
                    <li>
                        <b>.NET Framework and ASP.NET:</b> Microsoft technologies that provide a robust framework for
                        developing enterprise-level applications.
                    </li>
                    <li>
                        <b>Laravel and Ruby on Rails:</b> These frameworks enable us to build efficient and scalable web
                        applications using PHP and Ruby, respectively.
                    </li>
                    <li>
                        <b>Docker and Kubernetes:</b> These containerization technologies help us deploy and manage
                        applications in a scalable and efficient manner.
                    </li>
                </ul>
                <p>
                    Our team of experienced developers stays up-to-date with the latest programming languages and
                    technologies, enabling us to deliver cutting-edge solutions tailored to your specific project
                    requirements.
                </p>
            </Fragment>
        },
        {
            question: "How do you ensure effective communication and collaboration throughout the development process?",
            answer: <Fragment>
                <p>
                    Effective communication and collaboration are vital for successful software development projects. At
                    Newmira Digital, we prioritize clear and consistent communication with our clients to ensure a
                    seamless development process. Here&apos;s how we ensure effective communication and collaboration:
                </p>
                <ul>
                    <li>
                        Dedicated Project Manager: Each project is assigned a dedicated project manager who serves as
                        your primary point of contact. They are responsible for understanding your requirements,
                        coordinating with the development team, and providing regular project updates.
                    </li>
                    <li>
                        Agile Methodology: We follow agile development practices, which emphasize frequent communication
                        and collaboration. Through regular meetings, such as sprint planning, daily stand-ups, and
                        sprint reviews, we keep you informed about project progress, address any concerns, and gather
                        feedback.
                    </li>
                    <li>
                        Transparent Documentation: We maintain comprehensive project documentation, including project
                        requirements, specifications, and progress reports. This ensures that all stakeholders are on
                        the same page and have a clear understanding of the project&apos;s status and direction.
                    </li>
                    <li>
                        Collaboration Tools: We leverage collaboration tools, such as project management systems (e.g.,
                        Jira, Trello), communication platforms (e.g., Slack, Microsoft Teams), and version control
                        systems (e.g., Git), to facilitate efficient communication, track progress, and ensure seamless
                        collaboration.
                    </li>
                    <li>
                        Regular Updates and Demos: We provide regular updates on project milestones, deliverables, and
                        timelines. Additionally, we conduct demos and review sessions to showcase the progress made,
                        gather feedback, and make any necessary adjustments to align with your evolving needs.
                    </li>
                    <li>
                        Client Involvement: We encourage client involvement throughout the development process. Your
                        input and feedback are valuable to us, and we actively seek your participation in key
                        decision-making processes, usability testing, and user acceptance testing (UAT).
                    </li>
                </ul>
                <p>
                    Our commitment to effective communication and collaboration ensures that you are actively engaged in
                    the development process, enabling us to deliver software solutions that meet your expectations and
                    business objectives.
                </p>
            </Fragment>
        }
    ]

    return (
        <FaqQuestionsWrap>
            <Container>
                {
                    questions.map((question, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMore/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 3
                                    }}>
                                    <HelpOutline/> {question.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="answer">
                                    {question.answer}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Container>
        </FaqQuestionsWrap>
    );
};


const FaqQuestionsWrap = styled.section`
  padding: 120px 0 200px;

  @media(max-width: 600px) {
    padding: 60px 0 60px;
  }
  
  .answer {
    ul {
      margin-bottom: 24px;
    }

    p, li {
      font-family: "Roboto", sans-serif;
      line-height: 2;
      margin-bottom: 12px;
      color: #e0e0e0;

      b {
        color: #f0f0f0;
      }
    }
  }
`

export default FaqQuestions;