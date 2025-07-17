import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-2 py-10 sm:px-6 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mb-8 space-y-4 text-center sm:mb-12 sm:space-y-6">
        <h2 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-3xl font-black text-transparent sm:text-5xl md:text-6xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-md text-base text-blue-400 sm:text-lg">
          Ready to start a project or just want to chat? Reach out to me!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md sm:max-w-lg">
        <div className="group relative">
          {/* Glow effect for form container */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>

          {/* Form container */}
          <div className="relative space-y-6 rounded-3xl border border-gray-700/50 bg-gray-800/60 p-4 backdrop-blur-xl sm:p-8">
            {/* Contact form with local state and handlers */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 sm:text-base">
                  <User size={18} />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full rounded-xl border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 sm:text-base">
                  <Mail size={18} />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 sm:text-base">
                  <MessageSquare size={18} />
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-3 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 sm:px-6 sm:py-4 sm:text-lg"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover/btn:translate-x-full"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Send size={20} />
                  <span>Send Your Message</span>
                </div>
              </button>
            </form>
            {/* Social Links */}
            <div className="border-t border-gray-700/50 pt-4 sm:pt-6">
              <p className="mb-2 text-center text-xs text-gray-400 sm:mb-4 sm:text-base">
                Connect with me on social media
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social rounded-xl border border-gray-600/50 bg-gray-700/50 p-2 text-gray-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 sm:p-3"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social rounded-xl border border-gray-600/50 bg-gray-700/50 p-2 text-gray-400 transition-all duration-300 hover:border-gray-500/50 hover:bg-gray-500/10 hover:text-gray-200 sm:p-3"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social rounded-xl border border-gray-600/50 bg-gray-700/50 p-2 text-gray-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 sm:p-3"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 hidden h-32 w-32 animate-pulse rounded-full bg-blue-500/5 blur-xl sm:block"></div>
      <div className="absolute right-10 bottom-20 hidden h-40 w-40 animate-pulse rounded-full bg-purple-500/5 blur-xl delay-1000 sm:block"></div>
    </motion.section>
  );
}

export default Contact;
