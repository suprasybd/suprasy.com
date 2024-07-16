import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqPricing = () => {
  return (
    <div className="my-32">
      <h1 className="text-center font-bold text-3xl">Pricing FAQ's</h1>

      <Accordion type="single" collapsible defaultChecked defaultValue="item-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>When do I have to make payment?</AccordionTrigger>
          <AccordionContent>
            You have to make payment durning adding balance to your suprasy
            account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What can I do with balance?</AccordionTrigger>
          <AccordionContent>
            Using balance you will be paying for store subscription either when
            creating a store or when renewing monthly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            When will I be moved into enterprise?
          </AccordionTrigger>
          <AccordionContent>
            If we move your plan into enterprise that means you are running a
            successfull buissness with a large amount of visits every day and
            big user base. So we will move you to our enterprise plan to cover
            our infrastructure cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            When do I have to enable turnstile?
          </AccordionTrigger>
          <AccordionContent>
            Cloudflare Turnstile is 100% free and it is required for your store
            without turnstile input forms in your store won't work as a result
            people can't login, register or order product. So you should setup
            turnstile asap after creating your store.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can I create multiple store from single account?
          </AccordionTrigger>
          <AccordionContent>
            Yes you can create multiple stores from one account, pricing for
            multiple stores will need to be paid seperately, for each store.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqPricing;
