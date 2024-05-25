import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Option {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const PurchaseOption: React.FC = () => {
  const options: Option[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <g fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </g>
        </svg>
      ),
      name: 'Debit Card',
      description: 'Pay with your debit card securely.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <g fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </g>
        </svg>
      ),
      name: 'Credit Card',
      description: 'Pay with your credit card securely.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="1em" 
             height="1em" 
             viewBox="0 0 24 24">
              <g fill="none" 
                 fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M12.54 2c2.805 0 5.039 2.01 5.544 4.547c1.879.964 3.037 3.077 2.647 5.307l-.046.231l-.048.217a6 6 0 0 1-5.61 4.693L14.78 17h-1.453l-.517 3.309a2 2 0 0 1-1.813 1.684l-.163.007H8.858a2.001 2.001 0 0 1-1.995-1.853L6.858 20h-1.69a2 2 0 0 1-1.993-2.164l.017-.145L5.248 4.537a3 3 0 0 1 2.788-2.532L8.212 2h4.329Zm5.488 6.987l-.009.036A6.578 6.578 0 0 1 11.64 14H9.793l-.78 5h.002l-.157 1h1.976l.517-3.309A2 2 0 0 1 13.327 15h1.453a4 4 0 0 0 3.904-3.132l.049-.217a2.987 2.987 0 0 0-.705-2.664M12.541 4H8.21a1 1 0 0 0-.964.736l-.023.11L5.168 18h1.976l.673-4.309a2 2 0 0 1 1.814-1.684L9.793 12h1.846c2.1 0 3.93-1.428 4.44-3.463a3.648 3.648 0 0 0-3.352-4.532L12.54 4Z" />
              </g>
        </svg>
      ),
      name: 'PayPal',
      description: 'Use PayPal to pay with ease and security.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="1em" 
             height="1em" 
             viewBox="0 0 48 48">
            <path fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M33.824 33.23a16.12 16.12 0 0 0-.01-18.475m-1.806-2.149a16.114 16.114 0 1 0 0 22.788"/>
            <path fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M26.461 16.923A9.18 9.18 0 1 0 29.794 24h-8.066m17.648 13.109a22.9 22.9 0 0 0-.015-26.24"/>
        </svg>
      ),
      name: 'GCash',
      description: 'Pay with GCash for a fast and convenient transaction.',
    },
  ];

  return (
    <div className="mx-10">
      <Accordion type="single" collapsible>
        {options.map((option, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <div className="flex justify-between items-center py-4 cursor-pointer">
                {option.icon && <span className="mr-2">{option.icon}</span>}
                <h3 className="text-lg font-medium">{option.name}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4">
                <p className="text-gray-600">{option.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Select {option.name}
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PurchaseOption;
