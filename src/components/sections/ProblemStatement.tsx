export function ProblemStatement() {
  const problems = [
    {
      title: "Administrative Burden",
      description: "Spending 70% of your time on administrative healthcare issues takes you away from what matters most — spending time on healing."
    },
    {
      title: "Complex Processes",
      description: "Navigating insurance claims and medical billing requires expertise in complex systems."
    },
    {
      title: "Time Consuming",
      description: "Hours spent on hold, filling forms, and chasing information that should be readily available."
    },
    {
      title: "Error Prone",
      description: "Manual processes lead to mistakes that can result in denied claims and delayed care."
    }
  ];

  return (
    <section className="py-24 bg-navy-light" id="problem">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-16">
          Healthcare Shouldn&apos;t Be This Hard
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="rounded-lg bg-navy/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-300">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
