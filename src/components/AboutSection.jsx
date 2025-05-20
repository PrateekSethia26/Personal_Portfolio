import { ArrowDown } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript",
    "Java",
    "Python",
    "C",
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git",
    "CI/CD",
    "Linux/CLI",
    "RESTful APIs",
    "Figma",
    "Tailwind CSS",
    "Agile Methodology (Basic Understanding)",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-navy-light">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Full Stack Developer who enjoys crafting
              responsive and user-friendly web applications. My journey into
              programming began during my college years, where I discovered a
              strong interest in solving real-world problems through code. That
              early curiosity has grown into a focused pursuit of creating
              digital solutions that are both practical and impactful.
            </p>

            <p className="text-lg leading-relaxed">
              During my internship at Nokia, I had the opportunity to work on
              real-world networking and Wi-Fi optimization projects. I gained
              hands-on experience with network configuration and
              troubleshooting, while also deepening my understanding of Agile
              methodology and industry best practices.
            </p>

            <p className="text-lg leading-relaxed">
              I enjoy working across the full development stack—from designing
              clean, accessible interfaces to building robust backend systems.
              Outside of coding, I’m often exploring hiking trails, reading tech
              blogs, or experimenting with new frameworks and libraries. I’m a
              continuous learner, committed to staying current with the
              fast-paced evolution of web technologies and always eager to take
              on new challenges.
            </p>

            <div>
              <a
                href="https://drive.google.com/file/d/1pvM7WGFx-XOFB4FcuPEoQom9jWQAgVFU/view?usp=sharing"
                download
                className="primary-btn mt-6 inline-flex items-center"
              >
                Download Resume <ArrowDown size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Technical Skills</h3>

            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience highlights */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Highlights</h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>
                    Built 10+ full-stack web applications using React.js,
                    Node.js, and MongoDB with responsive UI and clean backend
                    architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>
                    Developing real-time features like collaborative drawing and
                    socket-based communication using WebSockets and Socket.io
                  </span>
                </li>
                {/* <li className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>
                    Improved code efficiency and readability by modularizing
                    components and applying best practices in React and
                    JavaScript
                  </span>
                </li> */}
                <li className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>
                    Analyzed data using Python libraries (Pandas, NumPy,
                    Seaborn) to derive insights in academic and personal
                    projects
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span>
                    Improved code efficiency and readability by modularizing
                    components and applying best practices in React and
                    JavaScript
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
