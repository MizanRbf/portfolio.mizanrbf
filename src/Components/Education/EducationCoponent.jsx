const EducationComponent = () => {
  return (
    <section
      id="education"
      className="py-12 px-6 md:px-16 text-black dark:text-white"
    >
      <div className="space-y-6">
        {/* University */}
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

        {/* Optional: Another education */}
        <div className="bg-secondary p-5 rounded-md shadow">
          <h3 className="text-xl font-semibold">Programming Hero</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Web Development Course
          </p>
          <p className="text-sm text-gray-400">2024 – 2025</p>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
