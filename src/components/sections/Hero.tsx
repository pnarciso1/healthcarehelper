'use client';
import { Button } from '../ui/Button';
import { FormEvent, useState } from 'react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Clear form on success
      setEmail('');
      alert('Thanks for signing up! We\'ll be in touch soon.');
    } catch (error) {
      alert('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Take Charge of Your Healthcare Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionize your healthcare tasks with AI-powered automation. 
            Streamline processes, reduce errors, and save valuable time with 
            intelligent task agents designed specifically for healthcare.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-x-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-lg border-0 bg-navy-light px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Early Access'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 