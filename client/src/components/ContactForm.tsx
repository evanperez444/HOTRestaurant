import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formValues.name || !formValues.email || !formValues.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your message has been sent!",
      });
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary" 
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary" 
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea 
          id="message" 
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={4} 
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary" 
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded transition duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'SEND'}
      </button>
    </form>
  );
};

export default ContactForm;
