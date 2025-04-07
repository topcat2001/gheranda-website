import React from 'react';

export const Home = () => {
  return (
    <section className="min-h-[calc(100vh-96px)] pt-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4">
        <div>
          <blockquote className="text-2xl md:text-3xl font-serif mb-12 text-yellow-600">
            "The meaning of our self is not to be found in its separateness from God and others, but in the ceaseless realization of yoga, of union." - Rabindranath Tagore
          </blockquote>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-xl">
              Gheranda Institute is a 501(c)(3) non-profit that aims to spread authentic yoga teachings.
            </p>
            
            <p className="text-lg">
              Gheranda is named in honor of an unique sage who is the composer of the Gheranda Samhita, 
              one of the 3 main Hatha yoga texts along with the Hatha Yoga Pradipika and Shiva Samhita. 
              The name Gheranda is also unique in that this is the only time it appears in Sanskrit literature.
            </p>

            <p className="text-xl">
              We offer authentic yoga education including teacher trainings, spiritual tours and yoga retreats in India and around the world. All donations are utilized 100% towards our mission. The majority of our offerings are donation based or free. 
            </p>
             <p className="text-sm mt-4 text-yellow-600">
                    As a non-profit organization, we strive to offer all trainings at cost. The amounts listed are suggested donations. 
                    Please contact us if you are only able to make a partial donation - we want to make our trainings accessible to all 
                    sincere practitioners.
                  </p>
          </div>
        </div>

        <div className="relative h-[600px] p-[10%] -mt-12">
          <img
            src="/home-hero.jpg"
            alt="Yoga practice by the Ganges river at sunrise"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};