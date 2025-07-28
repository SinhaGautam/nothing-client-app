// FaqComponent.tsx
export function Faq() {
  const faqs = [
    {      q: "What do I get when I buy Nothing?",
      a: "Exactly that—nothing."
    },
    {
      q: "Is this a joke?",
      a: "That’s for you to decide."
    },
    {
      q: "Can I return Nothing?",
      a: "We don’t accept the return of what wasn’t sent."
    },
    {
      q: "Do you ship internationally?",
      a: "We deliver nothing instantly, everywhere."
    }
  ];

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl text-left font-bold mb-6">FAQ</h2>
      <ul className="space-y-4 text-left">
        {faqs.map((faq, i) => (
          <li key={i}>
            <p className="font-semibold text-lg">Q: {faq.q}</p>
            <p className="text-gray-700">A: {faq.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}