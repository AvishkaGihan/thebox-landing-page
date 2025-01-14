const MetricCard = ({ number, label, icon, className = "", iconPosition }) => {
  const getIconPosition = () => {
    switch (iconPosition) {
      case "left-top":
        return "top-0 left-0 -translate-x-3/4 -translate-y-1/4";
      case "right-top":
        return "top-0 -right-0 translate-x-2.5 -translate-y-2.5";
      case "left-bottom":
        return "bottom-4 left-4";
      case "right-bottom":
        return "bottom-0 right-0 translate-x-1/4 sm:translate-y-1/2 translate-y-3/4";
    }
  };

  return (
    <div
      className={`bg-white py-2 sm:py-6 px-4 sm:pl-10 sm:pr-16 border border-white shadow-xl relative ${className}`}
    >
      <img
        src={icon}
        alt={label}
        className={`h-16 w-16 object-contain absolute ${getIconPosition()}`}
      />
      <div className="flex flex-col gap-2">
        <div className="text-4xl sm:text-6xl font-semibold text-neutral-800">
          {number}
        </div>
        <div className="flex justify-start gap-2">
          <div className="w-1.5 bg-secondary"></div>
          <div className="text-neutral-500 text-sm sm:text-xl">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
