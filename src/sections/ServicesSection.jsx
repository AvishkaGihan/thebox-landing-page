import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const ServicesSection = () => {
  return (
    <section
      className="py-16 px-4 md:py-24 bg-neutral-50"
      aria-labelledby="service-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="service-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Reputation
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 justify-items-center"
          role="list"
          aria-label="Services"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              isBlue={service.id % 2 === 0}
              aria-labelledby={`service-${service.id}`}
              role="listitem"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
