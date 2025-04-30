import { CheckCircle, Users, Briefcase, BarChart, LucideIcon } from 'lucide-react';
import React from 'react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TitleContent {
  title: string;
  description: string;
}

interface AlternativeStatsProps {
  showCards?: boolean;
  gridCount?: number;
  showTitle?: boolean;
  stats?: StatItem[];
  cards?: CardItem[];
  titleContent?: TitleContent;
}

// Default stats data
const defaultStats: StatItem[] = [
  {
    icon: <BarChart className="h-6 w-6 text-deewan-primary" />,
    value: "9+ Billion",
    label: "Annual Transactions"
  },
  {
    icon: <Users className="h-6 w-6 text-deewan-primary" />,
    value: "300+",
    label: "Satisfied Customers"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-deewan-primary" />,
    value: "6+",
    label: "Industries Served"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-deewan-primary" />,
    value: "99.9%",
    label: "Uptime Reliability"
  }
];

// Default cards data
const defaultCards: CardItem[] = [
  {
    icon: <BarChart className="h-6 w-6 text-deewan-primary" />,
    title: "Fast Growth",
    description: "35% year-over-year growth in message volume — our platform keeps scaling with you"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-deewan-primary" />,
    title: "High Delivery",
    description: "98.5% average delivery rate — ensuring your messages land where they matter, every time"
  },
  {
    icon: <Users className="h-6 w-6 text-deewan-primary" />,
    title: "Global Reach",
    description: "Connecting you to over 230 countries and territories — wherever your customers are, we're there"
  }
];

// Default title content
const defaultTitleContent: TitleContent = {
  title: "<span class=\"text-deewan-primary\">Deewan</span> in Numbers",
  description: "Real impact. Measurable growth"
};

const AlternativeStats = ({
  showCards = true,
  gridCount = 4,
  showTitle = true,
  stats = defaultStats,
  cards = defaultCards,
  titleContent = defaultTitleContent
}: AlternativeStatsProps) => {
  // Limit stats to the gridCount
  const displayStats = stats.slice(0, gridCount);
  return <section id="alternative-stats" className="py-24">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {showTitle && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4" dangerouslySetInnerHTML={{ __html: titleContent.title }}></h2>
            <p className="text-xl text-deewan-dark/80">
              {titleContent.description}
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-0`}>
          {displayStats.map((stat, index) => (
            <div key={index} className="relative border-r border-t border-b border-deewan-primary/10 p-10 first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r bg-gradient-to-b from-white to-deewan-primary/5">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-deewan-primary/20">
                {stat.icon}
              </div>
              <div className="text-center pt-4">
                <h3 className="text-4xl font-bold mb-2 text-deewan-primary">{stat.value}</h3>
                <p className="text-deewan-dark/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {showCards && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {cards.map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-deewan-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-deewan-primary/10 p-3 rounded-full mr-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-deewan-dark">{card.title}</h3>
                </div>
                <p className="text-deewan-dark/80">{card.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>;
};
export default AlternativeStats;