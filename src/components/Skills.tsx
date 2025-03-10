"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const frontendSkills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "JavaScript", level: 90, icon: "🟡" },
    { name: "TypeScript", level: 80, icon: "📘" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 85, icon: "🎯" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 85, icon: "🚂" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "REST API", level: 90, icon: "🔌" },
    { name: "GraphQL", level: 75, icon: "📊" },
    { name: "Firebase", level: 70, icon: "🔥" },
    { name: "AWS", level: 65, icon: "☁️" },
  ];

  const tools = [
    { name: "Git & GitHub", level: 90, icon: "📚" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "Jest", level: 80, icon: "🧪" },
    { name: "Webpack", level: 75, icon: "📦" },
    { name: "CI/CD", level: 70, icon: "⚡" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Redux", level: 85, icon: "🔄" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend", skills: frontendSkills, color: "blue" },
    { id: "backend", name: "Backend", skills: backendSkills, color: "green" },
    { id: "tools", name: "Tools & Others", skills: tools, color: "purple" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCard = ({ skill }: { skill: typeof frontendSkills[0] }) => (
    <motion.div
      variants={itemVariants}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        </div>
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>
        <div className="mt-2 text-right">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in the MERN stack with expertise in building responsive, 
            performant applications using modern web technologies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-${category.color}-500 text-white shadow-lg shadow-${category.color}-500/30`
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 