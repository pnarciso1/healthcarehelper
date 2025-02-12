'use client';

import type { NextPage } from 'next'
import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { Solution } from '@/components/sections/Solution'
import { UseCases } from '@/components/sections/UseCases'

const Home: NextPage = () => {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <UseCases />
    </main>
  )
}

export default Home
