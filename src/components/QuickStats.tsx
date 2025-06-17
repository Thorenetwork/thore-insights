
const QuickStats = () => {
  const stats = [
    { number: "1 Billion+", label: "Speakers Covered", icon: "👥" },
    { number: "25", label: "AI Models Trained", icon: "🤖" },
    { number: "100+", label: "Govt/NGO Use Cases", icon: "🏛️" },
    { number: "3x", label: "Increase in Rural Tech Access", icon: "📱" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
