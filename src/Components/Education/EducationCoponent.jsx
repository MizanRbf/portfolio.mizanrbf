import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const EducationComponent = () => {
  return (
    <section id="education" className="py-12 text-black dark:text-white">
      <div className="space-y-6">
        {/* University */}
        <Section>
          <div className="bg-secondary text-black p-5 rounded-md shadow ">
            <h3 className="text-xl text-white font-semibold">
              University of Rajshahi
            </h3>
            <p className="text-sm text-gray-400">
              Bachelor in Arabic Language and Literature
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2023 – Present
            </p>
          </div>
        </Section>

        {/* Optional: Another education */}
        <Section>
          <div className="bg-secondary p-5 rounded-md shadow">
            <h3 className="text-xl font-semibold">Programming Hero</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Web Development Course
            </p>
            <p className="text-sm text-gray-400">2024 – Present</p>
          </div>
        </Section>
      </div>
    </section>
  );
};

export default EducationComponent;
