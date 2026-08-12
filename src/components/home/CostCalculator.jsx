import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: 'woodwork', name: 'Woodwork', rate: 800 },
  { id: 'kitchen', name: 'Kitchen Base Cabinets', rate: 1500 },
  { id: 'wardrobes', name: 'Wardrobes', rate: 1099 },
  { id: 'wardrobe-loft', name: 'Wardrobe Loft', rate: 799 },
  { id: 'pop-ceiling', name: 'POP Ceiling', rate: 75 },
  { id: 'home-construction', name: 'Home Construction', rate: 1850 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function CostCalculator() {
  const [areas, setAreas] = useState({});

  const handleAreaChange = (id, value) => {
    // Only allow positive numbers or empty string
    if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setAreas(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  const calculateCost = (id, rate) => {
    const area = parseFloat(areas[id]);
    if (!isNaN(area) && area > 0) {
      return area * rate;
    }
    return 0;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const totalCost = services.reduce((total, service) => {
    return total + calculateCost(service.id, service.rate);
  }, 0);

  return (
    <section className="py-28 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">Instant Estimate</p>
          <h2 className="section-heading">Interior & Construction Cost Calculator</h2>
          <div className="gold-line"></div>
          <p className="section-subheading">
            Enter the required area for each service to get an estimated cost.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service) => {
            const cost = calculateCost(service.id, service.rate);
            const areaValue = areas[service.id] || '';

            return (
              <motion.div key={service.id} variants={cardVariants} className="card-luxury p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1F1F1F] mb-1">{service.name}</h3>
                  <p className="text-[#B88A2A] font-ui font-semibold text-sm mb-6">
                    {formatCurrency(service.rate)} / sq. ft.
                  </p>
                  
                  <div className="mb-6">
                    <label htmlFor={`area-${service.id}`} className="block text-sm font-medium text-[#5C5C5C] mb-2">
                      Area Required (sq. ft.)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={`area-${service.id}`}
                        min="0"
                        className="input-luxury w-full pr-16"
                        placeholder="Enter area"
                        value={areaValue}
                        onChange={(e) => handleAreaChange(service.id, e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C5C5C] text-sm pointer-events-none">
                        sq. ft.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9DDC7]">
                  <p className="text-sm text-[#5C5C5C] mb-1">Estimated Cost</p>
                  <p className="font-serif font-bold text-2xl text-[#1F1F1F]">
                    {cost > 0 ? formatCurrency(cost) : '—'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto card-luxury p-8 text-center bg-[#FAF7F2]"
        >
          <h3 className="font-serif font-bold text-2xl text-[#1F1F1F] mb-2">Total Estimated Cost</h3>
          <p className="text-[#5C5C5C] text-sm mb-4">Sum of all selected services</p>
          <p className="font-serif font-bold text-4xl text-[#B88A2A] mb-8">
            {totalCost > 0 ? formatCurrency(totalCost) : formatCurrency(0)}
          </p>
          
          <button 
            className="btn-gold w-full sm:w-auto"
            onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
          >
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
