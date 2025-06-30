import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./saabith_profile.jpg"; // add your image in src folder

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center animate-fade-in">
        <img src={profileImg} alt="Saabith K" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Saabith K</h1>
        <p className="text-xl font-medium animate-slide-up">DevOps Engineer | Cloud & Automation | CI/CD | AI Enthusiast</p>
        <a
          href="/saabithk - Saabith Kolakkattil.pdf"
          download
          className="inline-block mt-6 bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-200 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Education Section */}
<section className="p-8 max-w-5xl mx-auto animate-fade-in-up animate-slide-up">
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-gray-300 pb-2">🎓 Education</h2>
  <ul className="list-disc pl-6 text-lg space-y-2">
    <li><strong className="text-gray-900">Bachelor of Computer Applications – University of Calicut</strong> (2018–2021) – <span className="font-semibold">GPA: 63%</span></li>
    <li><strong className="text-gray-900">Higher Secondary Education – Kerala State Board</strong> (2016–2018) – <span className="font-semibold">GPA: 74%</span></li>
  </ul>
</section>


      {/* Skills Section */}
<section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up animate-slide-up">
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-gray-300 pb-2">🧠 Skills</h2>
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl font-semibold text-black mb-2">Programming Languages:</h3>
      <ul className="grid grid-cols-2 gap-4 text-lg list-disc pl-6">
        <li>Python, C, Java</li>
        <li>Shell Scripting, Bash</li>
      </ul>
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-black mb-2">Cloud & DevOps:</h3>
      <ul className="grid grid-cols-2 gap-4 text-lg list-disc pl-6">
        <li>AWS (EC2, S3, VPC, Route 53, IAM, Lambda, RDS, CloudFormation, CloudWatch, SQS, SNS)</li>
        <li>Docker, Kubernetes, Terraform</li>
        <li>Ansible, Git, Jenkins, GitHub, GitLab CI/CD</li>
      </ul>
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-black mb-2">Web Development & Tools:</h3>
      <ul className="grid grid-cols-2 gap-4 text-lg list-disc pl-6">
        <li>HTML, CSS, Tailwind CSS, React, Next.js</li>
        <li>VS Code, Postman, Maven, JIRA</li>
      </ul>
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-black mb-2">Operating Systems & DB:</h3>
      <ul className="grid grid-cols-2 gap-4 text-lg list-disc pl-6">
        <li>Linux, Windows</li>
        <li>MySQL, MongoDB</li>
      </ul>
    </div>
  </div>
</section>

{/* Projects Section */}
<section className="bg-blue-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-6 text-black border-b-4 border-black-400 pb-2 animate-slide-up">🚀 Projects</h2>
  <div className="space-y-6">
    {[
      {
        title: "Scalable Microservices Architecture",
        points: [
          "Refactored a monolithic architecture into containerized microservices",
          "Implemented CI/CD pipelines for streamlined deployments",
          "Deployed on Kubernetes cluster with HPA and service discovery",
          "Resulted in enhanced scalability and modular maintainability"
        ]
      },
      {
        title: "Automated Configuration Management with Ansible",
        points: [
          "Automated multi-server setups with Ansible playbooks",
          "Provisioned EC2 instances with Apache, MySQL, Jenkins",
          "Reduced human error and deployment time significantly",
          "Improved system configuration consistency and speed"
        ]
      },
      {
        title: "Infrastructure as Code with Terraform",
        points: [
          "Built reusable Terraform modules for AWS infrastructure",
          "Managed EC2, VPC, RDS, and ELB configurations via IaC",
          "Version-controlled infrastructure using Git",
          "Improved team collaboration and repeatability"
        ]
      },
      {
        title: "Chat with Your PDF",
        points: [
          "Built a chatbot powered by Gemini 1.5 Flash to parse and answer questions from PDFs",
          "Integrated semantic search for document navigation",
          "Supports multi-PDF upload and persistent conversation",
          "Improved document accessibility using NLP"
        ]
      },
      {
        title: "AI-Integrated College Event Management System",
        points: [
          "Developed a web portal to manage college events and participation",
          "Used AI to recommend schedules and optimize workflows",
          "Handled notifications, reminders, and student data",
          "Streamlined event planning across departments"
        ]
      },
      {
        title: "Indian Legal Advisor Chatbot",
        points: [
          "Built a multilingual chatbot for Indian legal queries using AI",
          "Hosted on web for public accessibility",
          "Answered legal questions related to IPC, laws, and rights",
          "Enhanced awareness of legal help for common citizens"
        ]
      }
    ].map((project, index) => (
      <div
        key={index}
        className="bg-white rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
      >
        <h3 className="text-xl font-semibold text-black animate-slide-up mb-2">{project.title}</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {project.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section className="bg-gray-800 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Let's Connect</h2>
        <p className="mb-2">📧 saabithrr@gmail.com</p>
        <p>📞 8590975481</p>
        <p>📍 Malappuram, Kerala, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Saabithq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/saabithk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:saabithrr@gmail.com" className="hover:text-gray-300 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:8590975481" className="hover:text-gray-300 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>
    </main>
  );
}
