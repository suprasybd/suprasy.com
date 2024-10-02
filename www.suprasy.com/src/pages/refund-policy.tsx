import Layout from '@/components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const RefundPolicy = () => {
  return (
    <Layout>
      <div>
        <div className="p-6 bg-gray-100 text-gray-800">
          <h1 className="text-2xl font-bold mb-4">
            Refund Policy (English Version)
          </h1>
          <p className="mb-4">
            At Suprasy, we are committed to ensuring customer satisfaction. If
            you are not entirely satisfied with your purchase, we are here to
            help. This Refund Policy outlines the terms and conditions for
            refund requests.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            1. Eligibility for Refunds
          </h2>
          <p className="mb-4">
            Due to the nature of our digital products and services, we offer
            refunds only under specific circumstances, such as:
            <ul className="list-disc pl-6">
              <li>
                Technical issues that prevent the product or service from
                functioning as intended
              </li>
              <li>Duplicate transactions or accidental purchases</li>
              <li>
                Failure to deliver the digital product within the promised
                timeframe
              </li>
            </ul>
            Refund requests will be evaluated on a case-by-case basis.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Refund Process</h2>
          <p className="mb-4">
            To request a refund, please contact us at{' '}
            <a
              href="mailto:support@suprasy.com"
              className="text-blue-500 hover:underline"
            >
              support@suprasy.com
            </a>{' '}
            with your order details and the reason for your request. Our team
            will review your case and respond within 3 business days.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Refund Timeline</h2>
          <p className="mb-4">
            If your refund request is approved, we will process the refund
            within 7 to 10 working days. The refund will be issued to the
            original payment method used at the time of purchase. Please note
            that your financial institution may take additional time to reflect
            the refund in your account.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            4. Non-Refundable Items
          </h2>
          <p className="mb-4">
            The following items and services are not eligible for refunds:
            <ul className="list-disc pl-6">
              <li>Completed and delivered digital products</li>
              <li>
                Subscription services after the subscription period has begun
              </li>
              <li>
                Any product or service that has been fully used or downloaded
              </li>
            </ul>
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Refund Policy or need assistance
            with a refund request, please reach out to us at{' '}
            <a
              href="mailto:support@suprasy.com"
              className="text-blue-500 hover:underline"
            >
              support@suprasy.com
            </a>
            .
          </p>

          <h1 className="text-2xl font-bold mb-4">
            রিফান্ড নীতি (বাংলা সংস্করণ)
          </h1>
          <p className="mb-4">
            Suprasy-এ, আমরা গ্রাহকদের সন্তুষ্টি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
            যদি আপনি আপনার ক্রয় নিয়ে সম্পূর্ণ সন্তুষ্ট না হন, তবে আমরা সাহায্য
            করতে প্রস্তুত। এই রিফান্ড নীতি রিফান্ডের জন্য অনুরোধের শর্তাবলী
            ব্যাখ্যা করে।
          </p>

          <h2 className="text-xl font-semibold mb-2">১. রিফান্ডের যোগ্যতা</h2>
          <p className="mb-4">
            আমাদের ডিজিটাল পণ্য ও সেবার প্রকৃতির কারণে, আমরা নির্দিষ্ট কিছু
            পরিস্থিতিতে রিফান্ড অফার করি, যেমন:
            <ul className="list-disc pl-6">
              <li>
                প্রযুক্তিগত সমস্যাগুলি যা পণ্য বা সেবা স্বাভাবিকভাবে কাজ করতে
                বাধা দেয়
              </li>
              <li>দ্বৈত লেনদেন বা দুর্ঘটনাবশত ক্রয়</li>
              <li>প্রতিশ্রুত সময়ের মধ্যে ডিজিটাল পণ্য সরবরাহ করতে ব্যর্থতা</li>
            </ul>
            রিফান্ড অনুরোধগুলি প্রতিটি ক্ষেত্রে ভিত্তিতে মূল্যায়ন করা হবে।
          </p>

          <h2 className="text-xl font-semibold mb-2">২. রিফান্ড প্রক্রিয়া</h2>
          <p className="mb-4">
            রিফান্ডের জন্য অনুরোধ করতে, দয়া করে আপনার অর্ডারের বিস্তারিত তথ্য
            এবং রিফান্ডের কারণ সহ আমাদের সাথে{' '}
            <a
              href="mailto:support@suprasy.com"
              className="text-blue-500 hover:underline"
            >
              support@suprasy.com
            </a>{' '}
            এ যোগাযোগ করুন। আমাদের টিম ৩ কার্যদিবসের মধ্যে আপনার অনুরোধ
            পর্যালোচনা করে উত্তর দেবে।
          </p>

          <h2 className="text-xl font-semibold mb-2">৩. রিফান্ডের সময়সীমা</h2>
          <p className="mb-4">
            আপনার রিফান্ডের অনুরোধ অনুমোদিত হলে, আমরা ৭ থেকে ১০ কার্যদিবসের
            মধ্যে রিফান্ড প্রক্রিয়া করব। রিফান্ডটি ক্রয়ের সময় ব্যবহৃত মূল
            অর্থপ্রদানের পদ্ধতিতে প্রদান করা হবে। আপনার আর্থিক প্রতিষ্ঠানের
            কারণে রিফান্ড আপনার অ্যাকাউন্টে প্রদর্শিত হতে অতিরিক্ত সময় লাগতে
            পারে।
          </p>

          <h2 className="text-xl font-semibold mb-2">
            ৪. অ-রিফান্ডযোগ্য আইটেম
          </h2>
          <p className="mb-4">
            নিম্নলিখিত পণ্য এবং পরিষেবাগুলি রিফান্ডের যোগ্য নয়:
            <ul className="list-disc pl-6">
              <li>সম্পূর্ণ করা এবং সরবরাহ করা ডিজিটাল পণ্য</li>
              <li>সাবস্ক্রিপশন পরিষেবা সাবস্ক্রিপশন সময় শুরু হওয়ার পরে</li>
              <li>
                যেকোনো পণ্য বা সেবা যা সম্পূর্ণরূপে ব্যবহৃত বা ডাউনলোড করা
                হয়েছে
              </li>
            </ul>
          </p>

          <h2 className="text-xl font-semibold mb-2">
            ৫. আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="mb-4">
            যদি আপনার কোনো প্রশ্ন থাকে বা রিফান্ড সহায়তার প্রয়োজন হয়, অনুগ্রহ
            করে আমাদের সাথে{' '}
            <a
              href="mailto:support@suprasy.com"
              className="text-blue-500 hover:underline"
            >
              support@suprasy.com
            </a>{' '}
            এ যোগাযোগ করুন।
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
