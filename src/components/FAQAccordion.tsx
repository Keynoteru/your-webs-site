'use client';

import { useState } from 'react';
import { HelpCircle, CheckCircle2, ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      {items.map((faq, idx) => (
        <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggle(idx)}
            className="w-full p-4 md:p-6 text-left flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-start gap-3 flex-1">
              <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-base md:text-xl font-normal text-white flex-1 leading-relaxed">
                {faq.q}
              </h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
              <div className="flex items-start gap-3 pl-8 md:pl-9">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 font-normal leading-relaxed text-sm md:text-base flex-1">
                  {faq.a}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
