import React, { useEffect, useState } from 'react'
import HeroSection from '../components/landingPage/HeroSection'
import ContactSection from '../components/landingPage/ContactSection'
import KneeReplacementInfo from '../components/landingPage/KneeReplacementInfo'
import KneeSymptoms from '../components/landingPage/KneeSymptoms'
import DoctorSection from '../components/landingPage/DoctorSection'
import Form from '../components/common/Form'
import { IoClose } from 'react-icons/io5'

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    if (!isFormOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isFormOpen])

  const openFormModal = () => {
    setIsFormOpen(true)
  }

  const closeFormModal = () => {
    setIsFormOpen(false)
  }

  return (
    <>
      <HeroSection onBookAppointment={openFormModal} />
      <ContactSection />
      <KneeReplacementInfo />
      <KneeSymptoms />
      <DoctorSection onBookAppointment={openFormModal} />

      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-xl my-2 sm:my-8 animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeFormModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[110] p-2 bg-[#19628D]/10 hover:bg-[#19628D]/20 rounded-full text-[#19628D] transition-colors"
              aria-label="Close modal"
            >
              <IoClose size={20} />
            </button>

            <div
              className="max-h-[calc(100dvh-1rem)] sm:max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <Form inModal />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LandingPage