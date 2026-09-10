"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What documents are required to acquire property in Dubai and the UAE?",
    answer: "When purchasing residential or commercial property in the UAE, international buyers require a valid passport copy, proof of address, source of funds documentation, and completed KYC disclosures. For UAE residents, an Emirates ID is additionally required. Our dedicated legal conveyance desk prepares the unified MOU (Form F), secures No Objection Certificates (NOC) from developers, and represents you at the Dubai Land Department (DLD) for title deed execution."
  },
  {
    question: "How is rental yield and net ROI calculated for off-plan luxury projects?",
    answer: "Gross rental yields are calculated by dividing annual gross rental projections by total capital outlay (purchase price + 4% DLD fees + administrative registration). Net yields incorporate ongoing master-community service charges, property management fees (typically 5-8%), and sinking fund contributions. Prime Dubai residential yields historically range between 6.5% and 9.2% net."
  },
  {
    question: "Can foreign nationals and overseas corporate entities own 100% freehold real estate?",
    answer: "Yes. Under UAE Property Law, foreign nationals and offshore entities can own absolute freehold titles in designated investment zones including Palm Jumeirah, Downtown Dubai, Dubai Marina, DIFC, and Saadiyat Island. We also assist institutional clients with ADGM and DIFC Special Purpose Vehicles (SPVs) for tax-efficient multi-asset holding."
  },
  {
    question: "What is the timeline and confidentiality protocol for private off-market transactions?",
    answer: "Off-market acquisitions are insulated by non-disclosure agreements (NDAs) signed prior to portfolio disclosure. Once terms are approved, typical cash transfers take between 7 to 14 business days to achieve unconditional conveyance and title issuance under trustee escrow protocols."
  },
  {
    question: "What is the process for securing private wealth mortgage financing for non-residents?",
    answer: "Non-resident financing generally allows up to 50-60% Loan-to-Value (LTV) ratios. We work directly with sovereign wealth managers and top-tier private banks to structure cross-border collateralization. Approval requires 6 months of bank statements, audited corporate accounts (if self-employed), and a clean international credit profile. Approvals take 2-3 weeks."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-sm w-full">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`faq-item bg-surface-container border p-lg transition-colors duration-300 ${isOpen ? 'border-primary/60 shadow-lg' : 'border-outline-variant/30 hover:border-primary/40'}`}
          >
            <button 
              onClick={() => toggleAccordion(index)}
              className="faq-trigger w-full flex items-center justify-between text-left gap-md focus:outline-none"
            >
              <span className={`font-headline-sm text-headline-sm font-medium transition-colors ${isOpen ? 'text-primary' : 'text-on-surface'}`}>
                {faq.question}
              </span>
              <motion.span 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="material-symbols-outlined text-primary text-[1.4rem]"
              >
                expand_more
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pt-md font-body-sm text-body-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 mt-md">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
