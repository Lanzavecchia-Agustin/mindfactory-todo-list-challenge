"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutCards, faqData } from "@/constants/aboutData"
import Image from "next/image"

export function AboutContent() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full overflow-auto p-6 sm:p-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Acerca del Proyecto
      </h1>

      <div className="space-y-8">
        {aboutCards.map((section) => (
          <Card
            key={section.id}
            className="bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md border-none"
          >
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              {section.description && (
                <CardDescription>{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-200">
              {section.content.paragraphs?.map((paragraph, idx) => (
                <p className="mb-4" key={idx}>
                  {paragraph}
                </p>
              ))}

              {section.content.image && (
                <div className="my-4">
                  <Image
                    src={section.content.image} 
                    alt="Inspiración de Diseño"
                    width={1000}
                    height={1000}
                    className="w-auto h-auto rounded-lg shadow"
                  />
                </div>
              )}

              {section.content.subtitle && (
                <h3 className="text-lg font-semibold mb-2">{section.content.subtitle}</h3>
              )}

              {section.content.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.content.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.content.finalText && (
                <p className="mt-4">{section.content.finalText}</p>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Card FAQs */}
        <Card className="bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md border-none">
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-200">
            <Accordion
              type="single"
              collapsible
              value={expandedFaq || undefined}
              onValueChange={setExpandedFaq}
            >
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
