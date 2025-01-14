import MetricCard from "../components/MetricCard";
import { metrics } from "../constants";

const AchievementsSection = () => {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="w-1/2 flex flex-col items-center">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                label={metric.label}
                number={metric.number}
                className={`${metric.className} transition-transform duration-300`}
                icon={metric.icon}
                iconPosition={metric.iconPosition}
              />
            ))}
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="px-4 max-w-md">
              <h2
                id="reputation-heading"
                className="text-primary text-5xl font-bold"
              >
                30 Years Experience
              </h2>
              <p className="text-neutral-600 text-lg mt-8">
                Our company has been the leading provided construction services
                to clients throughout the USA since 1988.
              </p>
              <button className="bg-primary rounded-sm text-white py-3 px-8 mt-10 text-base font-semibold transition-all duration-300 hover:bg-white hover:text-primary hover:ring-2 hover:ring-primary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
