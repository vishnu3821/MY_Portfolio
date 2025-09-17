import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, User, MessageSquare, Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/manbrkrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          _subject: 'New message from portfolio contact form',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 rounded-2xl border border-white/10 p-6 w-full max-w-md relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
          <p className="text-white/60">I'll get back to you as soon as possible</p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
            <p className="text-white/70">Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-white/80 flex items-center gap-2">
                <User className="w-4 h-4" />
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder=""
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="+1 (123) 456-7890"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-white/80 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Hi Vishnu, I'd like to chat about..."
                disabled={isSubmitting}
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm p-3 bg-red-500/10 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
