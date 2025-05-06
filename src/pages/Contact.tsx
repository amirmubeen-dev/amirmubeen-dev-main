
import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { ChatBot } from "@/components/ChatBot/ChatBot";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind or want to discuss work opportunities? Feel free to reach out through the form below or via direct contact methods.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default Contact;
