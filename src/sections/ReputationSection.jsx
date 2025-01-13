import { reputationItems } from "../constants";

const ReputationCard = ({ icon: Icon, title, description, index }) => {
  return (
    <article
      className="bg-white p-8 rounded border border-neutral-100 transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
      tabIndex={0}
    >
      <div
        className="flex flex-col items-start gap-4"
        aria-labelledby={`reputation-title-${index}`}
      >
        <img src={Icon} className="h-9 w-auto" alt={title} />

        <h3
          id={`reputation-title-${index}`}
          className="text-xl font-semibold text-neutral-700"
        >
          {title}
        </h3>

        <p className="text-base text-neutral-400">{description}</p>
      </div>
    </article>
  );
};

const ReputationSection = () => {
  return (
    <section
      className="py-16 px-4 md:py-24 bg-white"
      aria-labelledby="reputation-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="reputation-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in"
        >
          Our Reputation
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16"
          role="list"
          aria-label="Reputation highlights"
        >
          {reputationItems && reputationItems.length > 0 ? (
            reputationItems.map((item, index) => (
              <div
                key={item.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ReputationCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-400">
              No reputation items available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReputationSection;
