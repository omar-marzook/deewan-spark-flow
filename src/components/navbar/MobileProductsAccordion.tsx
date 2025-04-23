import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { products } from './products-data';
const MobileProductsAccordion = () => {
  return <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="products" className="border-none">
        <AccordionTrigger className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors p-0 hover:no-underline text-base">
          Products
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <div className="space-y-4 mt-2">
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="applications" className="border-none bg-white/5 rounded-lg">
                  <AccordionTrigger className="px-4 py-2 font-medium text-deewan-dark/80 hover:text-deewan-primary hover:no-underline text-sm">
                    Applications
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <div className="space-y-3">
                      {products.applications.map(product => <motion.div key={product.slug} initial={{
                      opacity: 0,
                      y: -5
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} exit={{
                      opacity: 0,
                      y: -5
                    }} transition={{
                      duration: 0.2
                    }}>
                          <Link to={`/products/${product.slug}`} className="block group">
                            <div className="flex items-start">
                              <product.icon className="w-4 h-4 mt-1 text-deewan-primary flex-shrink-0" />
                              <div className="ml-3">
                                <h4 className="text-sm font-medium text-deewan-dark group-hover:text-deewan-primary transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-deewan-dark/60">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="apis" className="border-none bg-white/5 rounded-lg">
                  <AccordionTrigger className="px-4 py-2 text-sm font-medium text-deewan-dark/80 hover:text-deewan-primary hover:no-underline">
                    Communication APIs
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <div className="space-y-3">
                      {products.communicationAPIs.map(product => <motion.div key={product.slug} initial={{
                      opacity: 0,
                      y: -5
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} exit={{
                      opacity: 0,
                      y: -5
                    }} transition={{
                      duration: 0.2
                    }}>
                          <Link to={`/products/${product.slug}`} className="block group">
                            <div className="flex items-start">
                              <product.icon className="w-4 h-4 mt-1 text-deewan-primary flex-shrink-0" />
                              <div className="ml-3">
                                <h4 className="text-sm font-medium text-deewan-dark group-hover:text-deewan-primary transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-deewan-dark/60">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
};
export default MobileProductsAccordion;