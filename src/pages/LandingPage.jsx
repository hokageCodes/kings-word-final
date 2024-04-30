import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import WorshipPage from '../components/worship/WorsipPage'
import EventsSection from '../components/events/EventsSection'
import GestureSection from '../components/gesture/GestureSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <WorshipPage />
      <EventsSection />
      <GestureSection />
    </>
  )
}
