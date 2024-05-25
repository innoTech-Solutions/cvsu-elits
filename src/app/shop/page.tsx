"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import MembershipCard from '../../components/Shop/MembershipCard';
import MerchandiseList from '../../components/Shop/MerchandiseList';
import merchandiseData from '@/config/merchandiseData';
import { Toaster } from "@/components/ui/toaster"; 
import { useToast } from "@/components/ui/use-toast"; 
import PurchaseOption from '@/components/Shop/PurchaseOption';

const Shop = () => {
  const { toast } = useToast(); 

  useEffect(() => {
    toast({
      title: "Membership Benefits",
      description: "Join now to get access to exclusive events, newsletters, discounts, and more!",
    });
  }, [toast]); 

  return (
    <div className="max-w-7xl mx-auto">
      <Toaster />
      <div className="p-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-orange-500 font-extrabold mb-4"
          style={{ marginTop: '70px' }}
        >
          Membership Cards
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10">
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

        {/* Merchandise Section */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-orange-500 font-extrabold mt-12 mb-4"
        >
          Popular Merchandise
        </motion.h3>

        <MerchandiseList items={merchandiseData} />

        {/* Purchase Options Section */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-orange-500 font-extrabold mt-12 mb-4"
        >
          Purchase Options
        </motion.h3>
        <PurchaseOption />
      </div>
    </div>
  );
};

export default Shop;
