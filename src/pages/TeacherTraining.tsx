import React, { useState } from 'react';
import { GraduationCap, Clock, Calendar, MapPin, CheckCircle2, Brain, Bot as Lotus, Award, X } from 'lucide-react';

export const TeacherTraining = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    yearsOfPractice: '',
    comments: '',
    program: 'spain-2025'
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' }); // Reset status before new submission
    
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! We will contact you soon.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          yearsOfPractice: '',
          comments: '',
          program: 'spain-2025'
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit application',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSubmitStatus({ type: null, message: '' }); // Reset status when closing
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif text-yellow-600 mb-6">200-Hour Yoga Teacher Training</h2>
            <div className="prose">
              <p className="text-gray-700 mb-8">
                Join us for an immersive 200-hour Yoga Teacher Training program that uniquely bridges ancient wisdom 
                with modern science. Our curriculum integrates traditional yogic practices including Kundalini and 
                Tantra with cutting-edge neuroscience research, offering a comprehensive understanding of yoga's 
                effects on the mind and body.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 rounded-lg p-6">
                <h3 className="text-xl font-serif text-yellow-600 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certification
                </h3>
                <p className="text-gray-700">
                  Upon successful completion of the training, graduates will be eligible to register with Yoga Alliance 
                  as RYT 200 (Registered Yoga Teacher). This internationally recognized certification allows you to 
                  teach yoga worldwide.
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-6">
                <h3 className="text-xl font-serif text-yellow-600 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Program Details
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>200 hours of comprehensive training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Yoga Alliance certified curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lotus className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Traditional Kundalini and Tantra practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Neuroscience of meditation and pranayama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced anatomy and physiology</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-lg p-6">
                <h3 className="text-xl font-serif text-yellow-600 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Programs
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-medium">Summer 2025 - Andalusia, Spain</p>
                    <p>August 29 - September 18, 2025</p>
                    <p className="text-sm text-gray-600 mt-1">Practice in the heart of historic Andalusia</p>
                  </div>
                  <div>
                    <p className="font-medium">Winter 2026 - Auroville, India</p>
                    <p>February 1 - February 28, 2026</p>
                    <p className="text-sm text-gray-600 mt-1">Experience the spiritual atmosphere of Auroville, the City of Dawn</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-lg p-6">
                <h3 className="text-xl font-serif text-yellow-600 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Locations
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-medium">Andalusia, Spain</p>
                    <p>Our summer program is hosted in a beautiful retreat center in Andalusia, 
                    offering a unique opportunity to deepen your practice surrounded by the rich cultural heritage and stunning landscapes of southern Spain.</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Auroville, India</p>
                    <p>Our winter training takes place in Auroville, an experimental township dedicated to human unity and spiritual growth. 
                    The retreat center provides the perfect environment for deep yogic practice and self-discovery.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/5 rounded-lg p-6">
                <h3 className="text-xl font-serif text-yellow-600 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Investment
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="mb-4">
                    <p className="font-medium">Andalusia, Spain</p>
                    <p>Suggested donation: €1299 - triple shared room (if registered 3 months in advance)</p>
                    <p>Regular suggested donation: €1599</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-medium">Auroville, India</p>
                    <p>Suggested donation: €999 - shared room (if registered 3 months in advance)</p>
                    <p>Regular suggested donation: €1299</p>
                  </div>
                  <p>€300 deposit to hold your spot (limited spots)</p>
                  <br></br>
                  <p>+€400 for separate rooms</p>
                  <p className="text-sm italic mt-4">
                    *Price includes training, manual, accommodation and most meals. 
                    Does not include airfare to training location.
                  </p>
                  <p className="text-sm mt-4 text-yellow-600">
                    As a non-profit organization, we strive to offer all trainings at cost. The amounts listed are suggested donations. 
                    Please contact us if you are only able to make a partial donation - we want to make this training accessible to all 
                    sincere practitioners.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="/welcome.jpg"
              alt="Yoga practice in Andalusia retreat"
              className="w-full max-h-[600px] object-contain rounded-lg"
            />
            <img
              src="https://media.vrbo.com/lodging/45000000/44330000/44320900/44320852/w2042h1302x3y0-84260bb3.jpg"
              alt="Andalusian retreat center pool and courtyard"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <img
              src="https://media.vrbo.com/lodging/45000000/44330000/44320900/44320852/w2040h1302x4y0-6b4b0c59.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              alt="Andalusian retreat center dinner indoor"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <img
              src="https://media.vrbo.com/lodging/45000000/44330000/44320900/44320852/w2043h1302x3y0-04417492.jpg"
              alt="Andalusian retreat center yoga space"
              className="w-full h-[300px] object-cover rounded-lg"
            />
             <img
              src="https://media.vrbo.com/lodging/45000000/44330000/44320900/44320852/w2043h1302x3y0-d0db6f3b.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              alt="Andalusian retreat center dinner"
              className="w-full h-[300px] object-cover rounded-lg"
            />

          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
              <button 
                onClick={handleCloseForm}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                disabled={isSubmitting}
              >
                <X className="h-6 w-6" />
              </button>
            
              <h3 className="text-2xl font-serif text-yellow-600 mb-6">Apply for Teacher Training</h3>
            
              {submitStatus.type === 'success' ? (
                <div className="text-center">
                  <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                    <p className="font-medium">{submitStatus.message}</p>
                  </div>
                  <button
                    onClick={handleCloseForm}
                    className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <form 
                  data-netlify="true"
                  name="teacher-training"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="teacher-training" />
                
                  {submitStatus.type === 'error' && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Program
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                      required
                    >
                      <option value="spain-2025">Summer 2025 - Andalusia</option>
                      <option value="auroville-2025">Winter 2025 - Auroville</option>
                    </select>
                  </div>
                
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="yearsOfPractice" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Yoga Practice
                    </label>
                    <input
                      type="text"
                      id="yearsOfPractice"
                      name="yearsOfPractice"
                      value={formData.yearsOfPractice}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Comments
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-colors ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-yellow-700'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};