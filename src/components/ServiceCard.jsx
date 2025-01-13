const ServiceCard = ({ title, icon, isBlue }) => {
  return (
    <div
      role="article"
      className={`p-10 w-full flex flex-col items-center gap-5 rounded transition-all duration-300 ease-in-out
      transform hover:-translate-y-1 hover:shadow-xl  ${
        isBlue ? "bg-accent-blue" : "bg-white"
      }`}
      tabIndex={0}
    >
      <img
        src={icon}
        width={36}
        height={36}
        alt={`${title} service icon`}
        aria-hidden="true"
      />
      <hr className="w-14 bg-neutral-100 h-0.5" aria-hidden="true" />
      <h3
        className={`text-lg font-semibold ${
          isBlue ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;
