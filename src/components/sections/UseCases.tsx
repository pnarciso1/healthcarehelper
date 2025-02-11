'use client';
import { FormEvent, useState } from 'react';
import { Button } from '../ui/Button';

export function UseCases() {
  const [formData, setFormData] = useState({
    taskDescription: '',
    painPoints: '',
    expectedOutcome: '',
    email: '',
    role: '',
    orgType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const exampleCases = [
    {
      title: "Claim Contestation",
      description: "Automatically detect claim rejections and initiate appeals with supporting documentation."
    },
    {
      title: "Appointment Scheduling",
      description: "Smart scheduling system that coordinates between patient availability and provider calendars."
    },
    {
      title: "Medical Record Requests",
      description: "Automated processing and secure transfer of medical records between healthcare providers."
    },
    {
      title: "Insurance Verification",
      description: "Real-time coverage verification and benefit eligibility checks."
    }
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/use-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setFormData({
        taskDescription: '',
        painPoints: '',
        expectedOutcome: '',
        email: '',
        role: '',
        orgType: ''
      });
      alert('Thank you for sharing your use case!');
    } catch (error) {
      alert('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-navy-light" id="use-cases">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Healthcare Automation Use Cases
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover how our AI agents can transform your healthcare workflows
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {exampleCases.map((useCase) => (
            <div 
              key={useCase.title}
              className="rounded-lg bg-navy/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Submit Your Use Case
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-300">
                Task Description
              </label>
              <textarea
                id="taskDescription"
                required
                value={formData.taskDescription}
                onChange={(e) => setFormData({...formData, taskDescription: e.target.value})}
                className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
                rows={3}
              />
            </div>

            <div>
              <label htmlFor="painPoints" className="block text-sm font-medium text-gray-300">
                Current Pain Points
              </label>
              <textarea
                id="painPoints"
                required
                value={formData.painPoints}
                onChange={(e) => setFormData({...formData, painPoints: e.target.value})}
                className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
                rows={3}
              />
            </div>

            <div>
              <label htmlFor="expectedOutcome" className="block text-sm font-medium text-gray-300">
                Expected Outcome
              </label>
              <textarea
                id="expectedOutcome"
                required
                value={formData.expectedOutcome}
                onChange={(e) => setFormData({...formData, expectedOutcome: e.target.value})}
                className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
                rows={3}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300">
                  Role in Healthcare (Optional)
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="orgType" className="block text-sm font-medium text-gray-300">
                  Organization Type (Optional)
                </label>
                <input
                  type="text"
                  id="orgType"
                  value={formData.orgType}
                  onChange={(e) => setFormData({...formData, orgType: e.target.value})}
                  className="mt-1 w-full rounded-lg bg-navy/50 border-gray-700 text-white px-4 py-2"
                />
              </div>
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Use Case'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 