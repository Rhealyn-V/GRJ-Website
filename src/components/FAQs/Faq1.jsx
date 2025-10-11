import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

const items = [
  {
    id: '1',
    title: 'What industries does GRJ Jaro Group operate in?',
    content:
      'GRJ Jaro Group is a diversified enterprise operating in sectors including manufacturing, real estate, technology, and logistics, committed to delivering innovative and sustainable solutions.',
  },
  {
    id: '2',
    title: 'How can I partner or collaborate with GRJ Jaro Group?',
    content:
      'We welcome partnerships that align with our vision and values. Please reach out to our Business Development team via the Contact Us page to discuss potential collaboration opportunities.',
  },
  {
    id: '3',
    title: 'Where are GRJ Jaro Group’s offices and facilities located?',
    content:
      "Our headquarters are located in [City, Country], with multiple regional offices and manufacturing facilities across [list regions or countries].",
  },
  {
    id: '4',
    title: 'How can I apply for a career at GRJ Jaro Group?',
    content:
      'Visit our Careers page to explore current job openings and internship opportunities. We are always looking for talented professionals who want to grow with us.',
  },
  {
    id: '5',
    title: 'What sustainability initiatives does GRJ Jaro Group support?',
    content:
      "We prioritize environmental responsibility through eco-friendly manufacturing processes, energy-efficient operations, and community engagement programs aimed at promoting sustainability.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function Faq1() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative overflow-hidden text-gray-100">
      {/* 🌌 Dark Blue-Gray Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(30,47,57,0.4), transparent 70%)`,
        }}
      />

      <section className="relative py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked{' '}
              <span className="from-white bg-gradient-to-r to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             Everything you need to know about GRJ Jaro Group of Company and how we deliver innovative, sustainable, and high-quality solutions across multiple industries.
            </motion.p>
          </div>

          <motion.div
            className="relative mx-auto max-w-3xl bg-[#1e2f39cc] rounded-xl p-4 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Accordion
              type="single"
              collapsible
              className="border-border/40 bg-card/30 w-full rounded-xl border p-2 backdrop-blur-sm"
              defaultValue="1"
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={item.id}
                    className={cn(
                      'bg-[#1e2f39cc] my-1 overflow-hidden rounded-lg border border-[#2a3a47] px-4 shadow-md transition-all',
                      'data-[state=open]:bg-[#2a4051cc] data-[state=open]:shadow-lg'
                    )}
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-semibold text-gray-100',
                          'hover:text-indigo-400 transition-colors duration-300 outline-none',
                          'focus-visible:ring-indigo-400 focus-visible:ring-2',
                          'data-[state=open]:text-indigo-400'
                        )}
                      >
                        {item.title}
                        <PlusIcon
                          size={18}
                          className={cn(
                            'text-indigo-400 shrink-0 transition-transform duration-300 ease-out',
                            'group-data-[state=open]:rotate-45'
                          )}
                          aria-hidden="true"
                        />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent
                      className={cn(
                        'text-gray-300 overflow-hidden pt-0 pb-4',
                        'data-[state=open]:animate-accordion-down',
                        'data-[state=closed]:animate-accordion-up'
                      )}
                    >
                      <div className="border-t border-[#2a3a47] pt-3">{item.content}</div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
