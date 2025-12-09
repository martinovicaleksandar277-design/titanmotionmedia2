import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"></div>

      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute left-[5%] top-[20%] w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] rotate-[-15deg]" viewBox="0 0 200 150" fill="none">
          <path d="M20,80 L40,80 L40,100 L60,100 L60,70 L80,70 L100,50 L120,50 L130,60 L130,100 L140,100 L140,110 L20,110 Z" fill="white" opacity="0.4"/>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 min-h-screen px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <div className="bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 mb-8">Last Updated: December 9, 2025</p>

            <div className="space-y-8 text-zinc-300">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed mb-4">
                  TitanMotion Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="leading-relaxed">
                  By using our website and services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">2.1 Information You Provide</h3>
                <p className="leading-relaxed mb-3">We collect information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Request a demo or consultation</li>
                  <li>Contact us via email or contact forms</li>
                  <li>Schedule a call through our booking system</li>
                  <li>Submit photos or materials for video creation</li>
                </ul>
                <p className="leading-relaxed mb-4">This information may include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and website</li>
                  <li>Photos and logos you submit for projects</li>
                  <li>Machine type and project details</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="leading-relaxed mb-3">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website and search terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Create cinematic video content based on your materials</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Process payments and fulfill orders</li>
                  <li>Send project updates and delivery notifications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., payment processors, cloud storage, email services)</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Your Content and Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  Photos, logos, and other materials you submit remain your property. By submitting materials, you grant us a limited license to use them solely for creating your requested video content.
                </p>
                <p className="leading-relaxed">
                  We will not use your materials for any other purpose without your explicit written consent. Completed videos and your submitted materials are stored securely and are not shared publicly unless you authorize us to do so.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <p className="leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure cloud storage with access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited employee access to personal information</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Project files and materials are typically retained for 90 days after project completion, unless otherwise agreed upon.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Your Privacy Rights</h2>
                <p className="leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at titanmotionmediainfo@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed mb-4">
                  We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="leading-relaxed">
                  We may use analytics services like Google Analytics to understand how visitors use our website. These services may collect information about your use of our website and other websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites (such as Calendly for scheduling). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">12. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <p className="leading-relaxed mb-2"><strong className="text-white">TitanMotion Media</strong></p>
                  <p className="leading-relaxed mb-2">Email: titanmotionmediainfo@gmail.com</p>
                  <p className="leading-relaxed">Website: www.titanmotionmedia.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
