import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

export default function Faq() {
    return (
        <section id="faq" className='w-full flex flex-col justify-center items-center my-5'>
            <div className='w-[80%] flex flex-col items-center'>
                <span className='text-5xl font-bold'>FAQ</span>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-bold cursor-pointer">Co to jest konsolidacja chwilówek?</AccordionTrigger>
                        <AccordionContent className="text-md">
                            Konsolidacja chwilówek to skuteczna metoda na wyjście z pętli zadłużenia. Wiele osób zaciąga kolejne zobowiązania impulsywnie, tracąc tym samym kontrolę nad domowym budżetem. Nierzadko nowe chwilówki służą tylko do spłaty wcześniejszych, co prowadzi do niebezpiecznego mechanizmu zadłużania się. Taka sytuacja może wydawać się bez wyjścia, dlatego warto w porę poszukać wsparcia u specjalistów, którzy pomogą uporządkować zobowiązania i przeprowadzą proces konsolidacji.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-bold cursor-pointer">Na czym polega konsolidacja chwilówek?</AccordionTrigger>
                        <AccordionContent className="text-md">
                            To nic innego jak zamiana kilku różnych długów w jedno zobowiązanie. Dzięki temu nie trzeba już pamiętać o wielu terminach spłaty ani stresować się karami za opóźnienia. Nowy kredyt konsolidacyjny pozwala na natychmiastowe uregulowanie wszystkich zaległości wobec różnych wierzycieli. Od tej chwili spłaca się tylko jedną ratę – niższą i rozłożoną na dłuższy czas. Takie rozwiązanie znacząco zmniejsza ryzyko działań windykacyjnych czy egzekucji komorniczej, a przy tym odciąża psychicznie i finansowo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-bold cursor-pointer">Co nas wyróżnia na tle konkurencji? </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Naszą mocną stroną jest wieloletnia praktyka, którą potwierdzają setki pozytywnych opinii od klientów. W naszym zespole pracują wyłącznie wykwalifikowani eksperci, dzięki czemu możemy oferować profesjonalne doradztwo, pełne wsparcie na każdym etapie oraz gwarancję bezpieczeństwa każdej zawieranej umowy.  Konsolidacja chwilówek w Spłać Chwilówki jest przede wszystkim dla osób, które spotkały się z odmową w banku. Robimy to, dzięki wieloletniemu doświadczeniu, które każdy z nas pozyskał pracując w bankach działających na polskim rynku.
                            Podejmujemy się najbardziej skomplikowanych spraw i działamy szybko - pieniądze po podpisaniu umowy kredytu na spłatę chwilówek i zobowiązań pozabankowych są wypłacane praktycznie natychmiast. Środki na swoim rachunku bankowym zobaczysz nawet w kilkanaście minut.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
