"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import MembershipCard from '../../components/Shop/MembershipCard';
import { Toaster } from "@/components/ui/toaster"; 
import { useToast } from "@/components/ui/use-toast"; 

const Shop = () => {
  const { toast } = useToast(); 

  useEffect(() => {
    toast({
      title: "Membership Benefits",
      description: "Join now to get access to exclusive events, newsletters, discounts, and more!",
    });
  }, []); 

  return (
    <div className="max-w-7xl mx-auto">
      <Toaster />
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
            className='h-[500px]'
              membershipType="Free Membership"
              perks={['Monthly newsletters']}
              price="Free"
              accessToResources={['Basic online courses']}
              headerTextColor='text-orange-500'
            />

            <MembershipCard
            className='h-[600px]'
              membershipType="Silver Membership"
              perks={['Access to select events', 'Quarterly newsletters']}
              price="$49/year"
              accessToResources={['Basic online courses', 'Access to forums']}
              headerBackgroundColor='bg-gray-500'
              headerTextColor='text-gray-500'
            />

            <MembershipCard
            className='h-[500px]'
              membershipType="Gold Membership"
              price="$99/year"
              priceDescription='for the first year'
              perks={['Exclusive access to events', 'Monthly newsletters', 'Discounts at partner stores']}
              accessToResources={['Online courses', 'Member-only forums', 'Networking events']}
              headerBackgroundColor='bg-yellow-500'
              headerTextColor='text-yellow-500'
            />

        </div>
      </div>
    </div>
  );
};

export default Shop;

