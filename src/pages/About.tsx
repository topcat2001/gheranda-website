import { ScrollText } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction Section */}
        <div className="mb-8">
          <div className="prose max-w-none">
            <div className="flex items-start gap-4">
              <ScrollText className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Gheranda is named in honor of an unique sage who is the composer of the Gheranda Samhita, 
                one of the 3 main Hatha yoga texts along with the Hatha Yoga Pradipika and Shiva Samhita. 
                The name Gheranda is also unique in that this is the only time it appears in Sanskrit literature.
                In the same way the institute aims to stand out by combining traditional techniques with the latest
                in modern research.
              </p>
            </div>
          </div>
        </div>

        {/* Our Founder Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          <div className="md:col-span-2">
            <div className="bg-white/80 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-serif text-yellow-600">Our Founder</h2>
              <p className="text-gray-700">
                Our founder JK (Karthik) was born and brought up in India and has travelled all around India 
                teaching yoga and conducting yoga tours. He lives in India and the US and is an E-RYT 500 trained in both India 
                with his traditional guru and with renowned western teachers including Shiva Rea, David Swenson, Bikram Choudhuri,
                and many others. He was initiated in the Saiva Siddhanta school at an early age while growing up in India by his 
                guru.He has taught for nearly 15 years and developed his own style that combines both the traditional 
                and modern techniques.

           </p>
           <p>
                JK's tours are enhanced by his in-depth knowledge of India and yoga, his experience as a current 
                docent at the Seattle Art Museum, his extensive network of family and friends in India and his 
                fluency in Indian languages including Tamil, Hindi and Sanskrit.
              </p>
              <p className="text-gray-700">
                JK worked at Microsoft as a manager and has a Master's in Computer Science from Purdue 
                University and an MBA from the University of Washington.
              </p>
        
            </div>
          </div>
          <div className="space-y-4">
            <img
              src="jkwithguru.jpg"
              alt="JK with his guru"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="shiva.jpg"
                alt="JK with Shiva Rea"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="david.jpg"
                alt="JK with David Swenson"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src="yoga1.jpg"
                  alt="Yoga practice 1"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src="yoga2.jpg"
                  alt="Yoga practice 2"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partner Teachers Section */}
        <h2 className="text-2xl font-serif text-yellow-600 mb-6">Partner Teachers (Past and Present)</h2>
        
        {/* Molly Lannon Kenny */}
        <div className="grid md:grid-cols-3 gap-8 mb-10 items-start">
          <div className="md:col-span-2">
            <div className="bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-medium text-yellow-600 mb-4">Molly Lannon Kenny</h3>
              <p className="text-gray-700">
                Molly Lannon Kenny is the founder and developer of Integrated Movement Therapy, first published in 2002 in the International Journal of Yoga Therapy. With a Masters in Speech-Language Pathology from the University of Washington, she served as Vice President of the International Association of Yoga Therapists (2005-2010) and Board Chair for developing educational standards for yoga therapy. Molly founded The Samarya Center (2001-2016) and has trained clinicians at Johns Hopkins affiliate Kennedy Krieger Institute. She is a published author and has worked extensively with underserved communities.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/molly.jpg"
              alt="Molly Lannon Kenny"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Cosetta Romani */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          <div className="md:col-span-2">
            <div className="bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-medium text-yellow-600 mb-4">Cosetta Romani</h3>
              <p className="text-gray-700">
                Cosetta Romani has practiced the healing arts of Yoga, Buddhist Meditation, Indigenous Shamanic teachings, and Somatic Dance for over two decades, studying under many master teachers. She is currently apprenticing with Shipibo plants medicine master curandero Ricardo Amaringo and has been initiated into Q'ero teachings by renowned Andean Indigenous healers Vilma and Wilson Pinedo. Cosetta's approach blends Compassionate Inquiry with powerful breathwork, sacred plant medicine songs, sound healing, energy clearing, soul retrieval, chakras alignment, yoga, and meditation.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/cosetta.jpg"
              alt="Cosetta Romani"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};