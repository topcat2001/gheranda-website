import React from 'react';

type TourProps = {
  startDate: string;
  endDate: string;
  earlyBirdPrice: number;
  regularPrice: number;
  depositAmount: number;
  earlyBirdDeadline: string;
};

const TourCard = ({ 
  startDate, 
  endDate, 
  earlyBirdPrice, 
  regularPrice, 
  depositAmount, 
  earlyBirdDeadline 
}: TourProps) => (
  <div className="border border-yellow-600/20 rounded-lg p-8 mb-12 hover:border-yellow-600/40 transition-colors bg-white/80">
    <h3 className="text-2xl font-serif text-yellow-600 mb-4">{startDate} to {endDate}</h3>
    <p className="text-gray-700 mb-6">
      This tour will have a Prana flow and Ayurveda focus as we delve deeper into the roots of yoga in India. 
      The tour will start in Chennai and end in Cochin.
    </p>
    <div className="space-y-2 text-gray-700 mb-6">
      <p>${earlyBirdPrice} if paid in full by {earlyBirdDeadline}.</p>
      <p>${regularPrice} after {earlyBirdDeadline}.</p>
      <p>${depositAmount} deposit to hold your spot (limited spots)</p>
      <p className="text-sm italic">*Tour includes airport transfers, accommodation, transport and airfare within India and most meals. Does not include airfare to India</p>
    </div>
    <button className="bg-yellow-600 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-700 transition-colors">
      Book Now
    </button>
  </div>
);

export const YogaTours = () => {
  return (
    <section id="yoga-tours" className="px-4">
      <div className="max-w-7xl mx-auto">
        <TourCard
          startDate="Jan 21st"
          endDate="Feb 3rd"
          earlyBirdPrice={2450}
          regularPrice={2750}
          depositAmount={300}
          earlyBirdDeadline="October 1st"
        />
        
        <TourCard
          startDate="Feb 4th"
          endDate="Feb 17th"
          earlyBirdPrice={2450}
          regularPrice={2750}
          depositAmount={300}
          earlyBirdDeadline="November 1st"
        />
      </div>
    </section>
  );
};