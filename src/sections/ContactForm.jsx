import { useState } from "react";
import CustomFormField from "../components/CustomInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className=" bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800">
            What can us do for you?
          </h2>
          <p className="mt-4 text-lg text-neutral-800">
            We are ready to work on a project of any complexity,
            <br />
            whether it&apos;s commercial or residential.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <CustomFormField
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <CustomFormField
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <CustomFormField
                type="select"
                name="reason"
                id="reason"
                placeholder="Reason for Contacting"
                required
                value={formData.reason}
                onChange={handleChange}
                options={[
                  { value: "commercial", label: "Commercial Project" },
                  { value: "residential", label: "Residential Project" },
                  { value: "other", label: "Other" },
                ]}
              />

              <CustomFormField
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <CustomFormField
              type="textarea"
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="text-sm text-gray-500 mt-1">
            <span className="text-red-500">*</span> indicates a required field
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="rounded bg-primary px-24 py-3 text-base font-semibold text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
