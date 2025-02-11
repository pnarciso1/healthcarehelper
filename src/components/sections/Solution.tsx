export function Solution() {
  const benefits = [
    {
      title: "AI-Powered Automation",
      description: "Our intelligent agents handle complex healthcare tasks automatically, from insurance verification to appointment scheduling."
    },
    {
      title: "24/7 Availability",
      description: "Healthcare tasks don't wait for business hours. Our system works round-the-clock to manage your healthcare needs."
    },
    {
      title: "Reduced Errors",
      description: "Advanced AI validation ensures accuracy in forms, claims, and documentation, minimizing costly mistakes."
    },
    {
      title: "Time Savings",
      description: "Automate repetitive tasks and paperwork, giving you more time to focus on what truly matters - patient care."
    }
  ];

  return (
    <section className="py-24" id="solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Solutions for Real Problems
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Our AI-powered platform transforms how healthcare tasks are managed
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="rounded-lg bg-navy-light p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 