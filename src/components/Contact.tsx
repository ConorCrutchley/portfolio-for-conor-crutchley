import Input from '@/components/UI/Input';
import Textarea from './UI/Textarea';
import emailjs from '@emailjs/browser';
import styles from '@/styles/contact.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmissionError, setFormSubmissionError] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email('Invalid email address'),
    company: z.string().optional(),
    linkedIn: z
      .union([
        z.literal(''), // Allow for optional empty strings
        z.url({
          protocol: /^https$/,
          hostname: /^(www\.)*linkedin.com$/,
          error: 'Must be a LinkedIn URL',
        }),
      ])
      .optional(),
    message: z.string().min(1, 'Message is required'),
  });

  // Use Form from react-hook-form and set resolver and default schema
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = handleSubmit(async (data) => {
    if (formSubmissionError) setFormSubmissionError(false);
    const response = await emailjs.send(
      process.env.PUBLIC_EMAILJS_SERVICE_ID,
      process.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      data,
      {
        publicKey: process.env.PUBLIC_EMAILJS_KEY,
      },
    );
    if (response.status === 200) setFormSubmitted(true);
    else {
      console.error(response);
      setFormSubmissionError(true);
    }
  });

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      {formSubmitted ? (
        <div
          className={`flex flex-column flex-center ${styles['contact-form-success']}`}
        >
          <h3>Your message was submitted successfully.</h3>
          <p>
            Thank you for taking the time to read through my portfolio and send
            a message. I will be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmitHandler} className={styles['contact-form']}>
          {(isLoading || isSubmitting) && (
            <div className={styles['contact-form-submitting']}>
              <span className="position-center">
                {isSubmitting ? 'Submitting' : 'Loading'}...
              </span>
            </div>
          )}
          <div
            className={`flex flex-column-to-row ${styles['contact-inputs']}`}
          >
            <Input
              label="Full Name"
              inputProps={register('name')}
              error={errors.name}
              required
            />
            <Input
              label="Email"
              inputProps={register('email')}
              error={errors.email}
              required
            />
            <Input
              label="Company"
              inputProps={register('company')}
              error={errors.company}
            />
            <Input
              label="LinkedIn"
              inputProps={register('linkedIn')}
              error={errors.linkedIn}
            />
          </div>
          <div className={`flex flex-column ${styles['contact-full-width']}`}>
            <Textarea
              label="Message"
              inputProps={register('message')}
              error={errors.message}
              required
            />
            <button type="submit" disabled={isLoading || isSubmitting}>
              Send Message
            </button>
          </div>
          {formSubmissionError && (
            <p className={styles['contact-form-error']}>
              There was an error when trying to submit the form. Don't worry
              though, you can always send me a message on my{' '}
              <a
                href={process.env.PUBLIC_LINKS_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile.
              </a>
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default Contact;
