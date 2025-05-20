import { Briefcase } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Nokia India Private Limited",
      position: "Student Intern",
      duration: "Aug 2024 - Present",
      description: [
        "Gained practical knowledge of the functionality of Nokia’s mobile app and web GUI, and developed scripts for testing and validating API and CGI call flows.",
        "Gained practical experience with Linux commands to interact with Nokia devices (Beacon, Gateway, Receiver) and studied network topologies and hardware such as switches and routers.",
      ],
    },
    {
      company: " Tensax Innovation Lab",
      position: "Machine Learning Intern",
      duration: "Jan 2023 - Jun 2023",
      description: [
        "Preprocessed data from multiple channels, extracted essential features for model training, and ensured high-quality datasets for our algorithms. This led to precise predictions and a robust foundation for our model’s success.",
        "Tools used like-: Python, Numpy, Pandas, Matplotlib, GitHub",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-secondary/50 dark:bg-navy-light"
    >
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Experience tabs */}
          <div className="md:w-64 flex md:flex-col overflow-x-auto scrollbar-none mb-6 md:mb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`py-3 px-4 text-left border-b-2 md:border-l-2 md:border-b-0 transition-all whitespace-nowrap ${
                  activeTab === index
                    ? "border-green text-green font-medium"
                    : "border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-navy text-slate dark:text-slate-light"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div className="flex-1 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-xl font-bold">
                {experiences[activeTab].position}{" "}
                <span className="text-green">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1">
                {experiences[activeTab].duration}
              </p>
            </div>

            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
