import { Calendar } from "lucide-react";

const EducationSection = () => {
  const educations = [
    {
      degree: "Master of Computer Applications",
      institution: "Vellore Institute of Technology",
      duration: "2023 - 2025",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Published a research paper titled 'Effects of marine microplastic on marine life and the food webs' and actively developing multiple web-based projects during the program.",
      achievements: [
        "GPA: 9.32/10.0",
        "Ranked as second top performing student of the MCA at VIT Chennai.",
        "Recognized for having the best research paper in MCA at VIT Chennai.",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "JECRC University",
      duration: "2020 - 2023",
      description:
        "Focused on Software Development and Data Science. Completed capstone project on ‘Analysing the stock market trends using Reinforcement learning’.",
      achievements: ["CGPA: 9.4/10.0"],
    },
    // {
    //   degree: "Certifications",
    //   institution: "Various Institutions",
    //   duration: "2018 - Present",
    //   description:
    //     "Continuous professional development through industry-recognized certifications.",
    //   achievements: [
    //     "AWS Certified Solutions Architect",
    //     "MongoDB Certified Developer",
    //     "Google Professional Cloud Developer",
    //     "Certified Scrum Master",
    //   ],
    // },
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="space-y-12 mt-8">
          {educations.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline dot and line */}
              {index !== educations.length - 1 && (
                <div className="absolute top-0 left-6 w-px bg-slate-200 dark:bg-slate-700 h-full -z-10"></div>
              )}
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-secondary dark:bg-navy-lightest flex items-center justify-center">
                    <Calendar className="text-green" size={20} />
                  </div>
                </div>

                <div className="bg-white dark:bg-navy-light rounded-lg p-6 shadow-sm flex-1 border border-slate-100 dark:border-slate-800">
                  <div className="mb-2 flex justify-between flex-wrap">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-lg font-medium text-green mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-slate dark:text-slate-light mb-4">
                    {edu.description}
                  </p>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green mr-2">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
