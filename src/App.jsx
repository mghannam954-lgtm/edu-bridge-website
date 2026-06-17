import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Audience from './components/Audience';
import Features from './components/Features';
import Demo from './components/Demo';
import Team from './components/Team';
import Dedication from './components/Dedication';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-customBg text-textDark antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* Problem & Solution Case */}
      <ProblemSolution />

      {/* Target Audience Tabs */}
      <Audience />

      {/* Core Technical Features Grid */}
      <Features />

      {/* Interactive Laravel <-> Flutter Sync Simulator */}
      <Demo />

      {/* Team of Developers */}
      <Team />

      {/* Dedication Section */}
      <Dedication />

      {/* Footer & Contacts */}
      <Footer />
    </div>
  );
}

export default App;
