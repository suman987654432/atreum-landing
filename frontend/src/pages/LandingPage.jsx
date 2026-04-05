import React from 'react'
import HeroSection from '../components/landingPage/HeroSection'
import ContactSection from '../components/landingPage/ContactSection'
import KneeReplacementInfo from '../components/landingPage/KneeReplacementInfo'
import KneeSymptoms from '../components/landingPage/KneeSymptoms'
import DoctorSection from '../components/landingPage/DoctorSection'
import Form from '../components/common/Form'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <KneeReplacementInfo />
      <KneeSymptoms />
      <DoctorSection />
      <Form/>
    </>
  )
}

export default LandingPage