import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="space-y-8 mb-12">
              <div className="bg-white/80 rounded-lg p-8">
                <h2 className="text-2xl font-serif text-yellow-600 mb-6">Gheranda - USA</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p>2324 1st Ave Suite 310</p>
                      <p>Seattle, WA - 98121</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <p>Tel: 425-301-2277</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <p>Email: jk@gheranda.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-lg p-8">
                <h2 className="text-2xl font-serif text-yellow-600 mb-6">Gheranda - India</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p>No. 18, 4th Street</p>
                      <p>Pasupathi Nagar</p>
                      <p>Pugalur - 639113, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <p>Tel: 425-301-2277</p>
                  </div>
                </div>
              </div>
            </div>

            <form 
              data-netlify="true"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/80 border border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/80 border border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none text-gray-700 placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-yellow-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
              alt="Serene view of Kerala backwaters"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};