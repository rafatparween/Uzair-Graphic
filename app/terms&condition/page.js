import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">Terms & Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Uzair Graphics & Printing. By accessing our services, you
          agree to comply with these terms and conditions. If you disagree with
          any part, please refrain from using our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Services</h2>
        <p>
          We provide high-quality printing and graphic design services. All
          orders are subject to availability and approval.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Payments</h2>
        <p>
          Payments must be made in full before the printing process begins. We
          accept various payment methods, and all transactions are secured.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Returns & Refunds</h2>
        <p>
          Due to the custom nature of our products, we do not offer refunds or
          returns unless there is a printing error on our part.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Liability</h2>
        <p>
          Uzair Graphics & Printing is not responsible for any errors in
          customer-provided artwork. Ensure all files are proofread before
          submission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of our services indicates acceptance of the updated terms.
        </p>
      </section>

      <p className="text-center text-gray-600 mt-6">
        If you have any questions, please contact us at
        <span className="text-blue-600"> info@uzairgraphics.com</span>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
