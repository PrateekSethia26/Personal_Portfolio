import { useState } from "react";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // In a real app, you would send the form data to your backend or a form service
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50 dark:bg-navy-light">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <p className="text-lg mb-6 text-slate dark:text-slate-light">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll get back
              to you as soon as possible!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-lightest focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-lightest focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-lightest focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-lightest focus:ring-2 focus:ring-green focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button type="submit" className="primary-btn w-full">
                Send Message
              </button>

              {formStatus.submitted && (
                <div
                  className={`p-3 rounded-md ${
                    formStatus.success
                      ? "bg-green/10 text-green"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <Mail className="mr-3 text-green" />
                  <a
                    href="mailto:prateeksethia2002@gmail.com"
                    className="hover:text-green transition-colors"
                  >
                    prateeksethia2002@gmail.com
                  </a>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="mr-3 text-green mt-1" />
                  <span>
                    Feel free to reach out for collaborations or just a friendly
                    chat. I'm always interested in new projects and
                    opportunities.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/PrateekSethia26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-navy-lightest rounded-md shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/prateeksethia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-navy-lightest rounded-md shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="mailto:prateeksethia2002@gmail.com"
                  className="p-4 bg-white dark:bg-navy-lightest rounded-md shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
