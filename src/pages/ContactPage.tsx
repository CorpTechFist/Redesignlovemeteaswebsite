import { ContactForm } from '../components/ContactForm';
import { Newsletter } from '../components/Newsletter';

export function ContactPage() {
  return (
    <div className="pt-28">
      <Newsletter />
      <ContactForm />
    </div>
  );
}
