"use client"
import { motion } from 'framer-motion';
import MembershipCard from '../../components/MembershipCard';

const Shop = () => {
  return (
    <div className="p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-4"
        style={{ marginTop: '70px' }}
      >
        Membership Cards
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '35%' }}
        transition={{ duration: 0.7 }}
        className="bg-orange-500 h-5 mb-4"
      />  
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '25%' }}
        transition={{ duration: 0.7 }}
        className="bg-orange-500 h-5 mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        {/* Gold Membership */}
        
          <MembershipCard
            type="Free Membership"
            perks={['Monthly newsletters']}
            eventDiscounts="No discounts"
            price="Free"
            accessToResources={['Basic online courses']}
          />

          <MembershipCard
            type="Silver Membership"
            perks={['Access to select events', 'Quarterly newsletters']}
            eventDiscounts="Up to 30% off"
            price="$49/year"
            accessToResources={['Basic online courses', 'Access to forums']}
            backgroundColor="bg-[#ACACAB]"
          />

          <MembershipCard
            type="Gold Membership"
            perks={['Exclusive access to events', 'Monthly newsletters', 'Discounts at partner stores']}
            eventDiscounts="Up to 50% off"
            price="$99/year"
            accessToResources={['Online courses', 'Member-only forums', 'Networking events']}
            backgroundColor="bg-[#FFEE51]"
          />

      </div>
    </div>
  );
};

export default Shop;
