import { Rocket, ArrowUp, Lightbulb, Globe } from "lucide-react";
import { RoadmapPhase } from "./RoadmapPhase";

export const RoadmapTimeline = () => {
  const phases = [
    {
      phase: 1,
      title: "Launch",
      description: "Initiating our journey with strong foundations and community building.",
      milestones: [
        "Creation of Super Elon Coin token and smart contract deployment",
        "Publication of the official whitepaper",
        "Establishment of core community through social media",
        "Listing on centralized and decentralized exchanges"
      ],
      icon: Rocket,
      color: "bg-purple-500"
    },
    {
      phase: 2,
      title: "Growth",
      description: "Expanding our ecosystem through strategic partnerships and marketing.",
      milestones: [
        "Building partnerships with blockchain projects",
        "Strategic marketing campaigns and influencer collaborations",
        "Cross-chain integration solutions",
        "Participation in blockchain conferences"
      ],
      icon: ArrowUp,
      color: "bg-blue-500"
    },
    {
      phase: 3,
      title: "Innovation",
      description: "Introducing advanced features and DeFi capabilities.",
      milestones: [
        "Launch of staking mechanisms",
        "NFT marketplace development",
        "Advanced DeFi smart contracts",
        "Real-world use case pilot projects"
      ],
      icon: Lightbulb,
      color: "bg-yellow-500"
    },
    {
      phase: 4,
      title: "Global Impact",
      description: "Making a difference worldwide through blockchain innovation.",
      milestones: [
        "Sustainability-focused blockchain projects",
        "Financial inclusion initiatives",
        "DAO establishment for community governance",
        "Global education and partnership programs"
      ],
      icon: Globe,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {phases.map((phase, index) => (
        <RoadmapPhase
          key={index}
          {...phase}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};