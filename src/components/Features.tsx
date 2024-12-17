import { Rocket, Shield, Zap, Users, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-neon-blue" />,
    title: "Rocket to the Moon",
    description: "Prepare for an epic journey to new heights"
  },
  {
    icon: <Shield className="w-6 h-6 text-neon-purple" />,
    title: "100% Secure",
    description: "Fully audited and safely locked liquidity"
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-orange" />,
    title: "Fast Transactions",
    description: "Lightning-fast transactions with minimal fees"
  },
  {
    icon: <Users className="w-6 h-6 text-neon-yellow" />,
    title: "Strong Community",
    description: "Join a growing global community"
  }
];

const faqs = [
  {
    question: "How do I buy Super Elon Coin?",
    answer: "You can buy Super Elon Coin through our website using your wallet, or through popular DEXes. We'll guide you through the process step by step."
  },
  {
    question: "Why Super Elon Coin?",
    answer: "Super Elon Coin combines the fun of memecoins with real utility and a strong community. We're building the future of decentralized finance with innovative features and partnerships."
  },
  {
    question: "Where can I follow the project?",
    answer: "Follow us on Twitter, join our Telegram group, and subscribe to our newsletter for the latest updates and announcements."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-['Orbitron']">
          Why Super Elon Coin?
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <div className="mb-4 flex justify-center group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white font-['Orbitron']">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto glass-card p-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-['Orbitron']">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-neon-blue transition-colors font-['Orbitron']">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};