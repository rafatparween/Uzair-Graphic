import { FaPrint, FaTshirt, FaBarcode, FaBoxOpen, FaShippingFast, FaPalette } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: <FaPrint />,
      title: "Offset Printing",
      description: "High-quality offset printing for brochures, business cards, and marketing materials with vibrant colors."
    },
    {
      icon: <FaTshirt />,
      title: "Garment Printing",
      description: "Custom t-shirt and apparel printing using the latest DTG and screen printing technologies."
    },
    {
      icon: <FaBarcode />,
      title: "Packaging Solutions",
      description: "Custom packaging and labels that make your products stand out on the shelves."
    },
    {
      icon: <FaBoxOpen />,
      title: "Large Format Printing",
      description: "Banners, posters, and signage in any size with crisp, durable prints."
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Turnaround",
      description: "Urgent orders? We've got you covered with our express printing services."
    },
    {
      icon: <FaPalette />,
      title: "Design Services",
      description: "Our creative team can help bring your vision to life with professional graphic design."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Printing</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium printing solutions tailored to your needs. Quality, speed, and creativity in every print.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and let us bring your ideas to life with our exceptional printing services.
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}