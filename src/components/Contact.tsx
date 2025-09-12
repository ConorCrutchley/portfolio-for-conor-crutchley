import Input from '@/components/UI/Input';
import Textarea from './UI/Textarea';
import styles from '@/styles/contact.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Contact = () => {
  const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email('Invalid email address'),
    company: z.string().optional(),
    linkedIn: z
      .union([
        z.literal(''), // Allow for optional empty strings
        z.url({
          protocol: /^https$/,
          hostname: /^linkedin\.com$/,
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
    formState: { errors },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = handleSubmit((data) => {
    console.log('Submission: ', data);
  });

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={onSubmitHandler} className={styles['contact-form']}>
        <div className={styles['contact-inputs']}>
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
        <div className={styles['contact-full-width']}>
          <Textarea
            label="Message"
            inputProps={register('message')}
            error={errors.message}
            required
          />
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
