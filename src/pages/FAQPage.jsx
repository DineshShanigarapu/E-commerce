import { useState } from "react";

const faqData = [
  {
    category: "Shopping Information",
    content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum irure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
    questions: [
      "How much is shipping and how long will it take?",
      "How long will it take to get my package?",
      "Branding is simply a more efficient way to sell things?",
    ],
  },
  {
    category: "Payment Information",
    content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum irure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
    questions: [
      "How much is shipping and how long will it take?",
      "How long will it take to get my package?",
      "Branding is simply a more efficient way to sell things?",
    ],
  },
  {
    category: "Order Returns",
    content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum irure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
    questions: [
      "How much is shipping and how long will it take?",
      "How long will it take to get my package?",
      "Branding is simply a more efficient way to sell things?",
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {faqData.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-2">{section.category}</h2>
              <p className="text-gray-600 mb-4">{section.content}</p>
              <div className="border rounded-md">
                {section.questions.map((question, qIndex) => (
                  <div key={qIndex} className="border-b last:border-none">
                    <button
                      className="w-full text-left p-4 font-medium flex justify-between items-center focus:outline-none"
                      onClick={() => setOpenIndex(openIndex === `${index}-${qIndex}` ? null : `${index}-${qIndex}`)}
                    >
                      {question}
                      <span>{openIndex === `${index}-${qIndex}` ? "-" : "+"}</span>
                    </button>
                    {openIndex === `${index}-${qIndex}` && (
                      <div className="p-4 bg-gray-100 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Have a question</h3>
          <p className="text-gray-600 mb-4">
            If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.
          </p>
          <p className="text-gray-600 mb-4">
            Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.
          </p>
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-md">Contact us</button>
            <button className="border border-black px-4 py-2 rounded-md">Live chat →</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
