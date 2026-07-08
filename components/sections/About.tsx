
import React from 'react';
import { Code, Database, Server, BrainCircuit, Cloud } from 'lucide-react';

export const About: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} className="text-neon-green" />,
      title: "Full-Stack Development",
      desc: "Building scalable, responsive, and robust applications using React.js and Node.js."
    },
    {
      icon: <BrainCircuit size={32} className="text-neon-green" />,
      title: "AI & Machine Learning",
      desc: "Developing intelligent solutions including RAG systems, LLMs, and document intelligence models."
    },
    {
      icon: <Cloud size={32} className="text-neon-green" />,
      title: "Cloud Deployment",
      desc: "Deploying applications and automating workflows using AWS, CI/CD pipelines, and GitHub Actions."
    },
    {
      icon: <Database size={32} className="text-neon-green" />,
      title: "Backend & Databases",
      desc: "Architecting robust APIs and integrating advanced databases like MongoDB and ChromaDB."
    }
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-12">
      <h2 className="text-4xl font-heading font-bold mb-2">About Me</h2>
      <div className="w-20 h-1.5 bg-neon-green rounded-full mb-8"></div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-white">
          I am a <span className="text-neon-green">Software Engineer</span>
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 font-sans">
          I am a Computer Science Engineering graduate passionate about building intelligent software solutions using AI, Machine Learning, LLMs, and modern Full-Stack technologies. I enjoy developing scalable applications that solve real-world problems and create meaningful impact.
        </p>
        <p className="text-gray-400 leading-relaxed font-sans">
          I have built AI-powered applications such as RAG systems and machine learning models using Python, React, LangChain, and ChromaDB. I also bring strong experience in AWS, CI/CD, and GitHub Actions. I am eager to contribute to AI-driven innovation with a continuous learning mindset.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-8">What I Do</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {services.map((service, index) => (
          <div key={index} className="bg-navy-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 shadow-lg group">
            <div className="mb-4 bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-8 mt-8">GitHub <span className="text-neon-green">Stats</span></h3>
      <div className="flex flex-col xl:flex-row gap-6 pb-8">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Thrishal1105&theme=dark&hide_border=true&background=112240&ring=00C853&fire=00C853&currStreakLabel=00C853"
          alt="Thrishal1105 GitHub Streak"
          loading="lazy"
          decoding="async"
          className="h-auto w-full md:w-auto rounded-xl border border-white/5 shadow-lg"
        />
        {/* <img
          src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Thrishal1105&theme=dark"
          alt="Thrishal1105 GitHub Profile Details"
          loading="lazy"
          decoding="async"
          className="h-auto w-full md:w-auto rounded-xl border border-white/5 shadow-lg"
        /> */}
      </div>
    </div>
  );
};
