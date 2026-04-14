import React, { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const WEB3FORMS_ACCESS_KEY = 'eea48e6b-4b94-4e25-9d09-3df38201174c';

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.message.trim()) return 'Please enter your message';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);

    // Prepare form data for Web3Forms
    const formPayload = new FormData();
    formPayload.append('access_key', WEB3FORMS_ACCESS_KEY);
    formPayload.append('botcheck', ''); // Honeypot field for spam prevention
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('subject', `Portfolio Contact from ${formData.name}`);
    formPayload.append('from_name', formData.name);
    formPayload.append('replyto', formData.email);
    

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.' 
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        if (formRef.current) formRef.current.reset();
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please email me directly at rakibdevhub@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'rakibdevhub@gmail.com', href: 'mailto:rakibdevhub@gmail.com', color: 'teal' },
    { icon: FiPhone, label: 'Phone', value: '01755063066', href: 'tel:01755063066', color: 'emerald' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '01755063066', href: 'https://wa.me/8801755063066', color: 'green' },
    { icon: FiMapPin, label: 'Location', value: 'Badda, Dhaka - 1212, Bangladesh', href: null, color: 'cyan' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/rakibdevhub', href: 'https://github.com/rakibdevhub', color: 'gray' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold mb-4">
            📬 Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently looking for internship or entry-level junior developer roles. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group cursor-pointer"
                >
                  <div className={`p-3 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-xl group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-${item.color}-600 dark:text-${item.color}-400`} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('http') ? '_blank' : '_self'} 
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <div>
              <label className="block text-sm font-medium mb-2">Your Name *</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                placeholder="John Doe"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea 
                rows={5} 
                required 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                placeholder="Tell me about your project or opportunity..."
                disabled={isSubmitting}
              />
            </div>
            
            {/* Status Message */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-3 rounded-xl flex items-center gap-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}
                >
                  {submitStatus.type === 'success' ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
                  <span className="text-sm">{submitStatus.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={18} />
                  Send Message
                </>
              )}
            </motion.button>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              * I'll get back to you within 24-48 hours
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;