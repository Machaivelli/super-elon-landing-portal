import { Rocket, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-neon-blue" />,
    title: "Raket naar de Maan",
    description: "Bereid je voor op een epische reis naar nieuwe hoogtes"
  },
  {
    icon: <Shield className="w-6 h-6 text-neon-purple" />,
    title: "100% Veilig",
    description: "Volledig geaudited en veilig vergrendelde liquiditeit"
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-orange" />,
    title: "Snelle Transacties",
    description: "Bliksemsnelle transacties met minimale kosten"
  },
  {
    icon: <Users className="w-6 h-6 text-neon-yellow" />,
    title: "Sterke Community",
    description: "Word deel van een groeiende globale community"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Waarom Super Elon Coin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};