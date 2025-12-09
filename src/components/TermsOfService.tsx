import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"></div>

      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute right-[5%] top-[20%] w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] rotate-[15deg]" viewBox="0 0 200 150" fill="none">
          <path d="M20,80 L40,80 L40,100 L60,100 L60,70 L80,70 L100,50 L120,50 L130,60 L130,100 L140,100 L140,110 L20,110 Z" fill="white" opacity="0.4"/>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px]"></div>
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
              Terms of Service
            </h1>
            <p className="text-zinc-400 mb-8">Last Updated: December 9, 2025</p>

            <div className="space-y-8 text-zinc-300">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and TitanMotion Media ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
                </p>
                <p className="leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Services Description</h2>
                <p className="leading-relaxed mb-4">
                  TitanMotion Media provides AI-powered cinematic video creation services, specializing in transforming photos of heavy machinery and industrial equipment into professional-grade commercial videos.
                </p>
                <p className="leading-relaxed">
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Cinematic video creation from submitted photos</li>
                  <li>Motion design and visual effects</li>
                  <li>Color grading and post-production</li>
                  <li>Logo integration and branding</li>
                  <li>Multi-format video delivery for various platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. User Eligibility</h2>
                <p className="leading-relaxed mb-4">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
                </p>
                <p className="leading-relaxed">
                  If you are using our services on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Project Process and Requirements</h2>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">4.1 Demo Requests</h3>
                <p className="leading-relaxed mb-4">
                  Demo requests are provided free of charge to showcase our capabilities. Demos are typically delivered within 24-48 hours and do not obligate either party to proceed with a full project.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">4.2 Photo Submissions</h3>
                <p className="leading-relaxed mb-3">When submitting photos for video creation, you must ensure:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You own all rights to the submitted materials or have permission to use them</li>
                  <li>Materials do not infringe on any third-party intellectual property rights</li>
                  <li>Photos are of sufficient quality for professional video production</li>
                  <li>You provide 3-10 photos as recommended for optimal results</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-3 mt-6">4.3 Project Scope and Timeline</h3>
                <p className="leading-relaxed mb-4">
                  Each project scope, deliverables, timeline, and pricing are agreed upon before work begins. Standard turnaround is 3-5 days for full projects, with rush delivery available upon request.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Payment Terms</h2>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">5.1 Pricing</h3>
                <p className="leading-relaxed mb-4">
                  All pricing is custom and based on project complexity, length, and requirements. Final pricing is agreed upon before project commencement.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">5.2 Payment Schedule</h3>
                <p className="leading-relaxed mb-4">
                  Unless otherwise agreed:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No payment is required for demo requests</li>
                  <li>A deposit may be required before beginning full projects</li>
                  <li>Final payment is due before final video delivery</li>
                  <li>All payments are processed through secure third-party payment processors</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-3 mt-6">5.3 Refund Policy</h3>
                <p className="leading-relaxed mb-4">
                  If you are unsatisfied with the delivered video, we offer two free revisions. Refunds are considered on a case-by-case basis if we fail to deliver agreed-upon services after good faith efforts to resolve issues.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">6.1 Your Content</h3>
                <p className="leading-relaxed mb-4">
                  You retain all ownership rights to photos, logos, and materials you submit. By submitting materials, you grant us a limited, non-exclusive license to use them solely for creating your requested video content.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">6.2 Completed Videos</h3>
                <p className="leading-relaxed mb-4">
                  Upon full payment, you receive full commercial rights to use the completed video for your business purposes. We retain the right to showcase the video in our portfolio unless you specifically request otherwise.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">6.3 Our Intellectual Property</h3>
                <p className="leading-relaxed mb-4">
                  Our website content, branding, processes, and proprietary techniques remain our exclusive property. You may not reproduce, distribute, or create derivative works from our intellectual property without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Revisions and Modifications</h2>
                <p className="leading-relaxed mb-4">
                  Each project includes two free revisions. Revisions must be requested within 14 days of initial delivery. Additional revisions beyond the included amount may incur additional fees based on complexity.
                </p>
                <p className="leading-relaxed">
                  Major scope changes that differ substantially from the original project agreement may be treated as new projects with separate pricing.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Cancellation Policy</h2>
                <p className="leading-relaxed mb-4">
                  You may cancel a project at any time before work begins for a full refund of any deposit paid. Once work has commenced:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancellations within 24 hours of project start: 50% refund</li>
                  <li>Cancellations after 24 hours: Refund based on work completed</li>
                  <li>No refunds once final delivery has been made and accepted</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. User Obligations and Prohibited Uses</h2>
                <p className="leading-relaxed mb-3">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Submit materials that infringe on third-party rights</li>
                  <li>Submit illegal, offensive, or inappropriate content</li>
                  <li>Use our services for unlawful purposes</li>
                  <li>Reverse engineer or copy our proprietary processes</li>
                  <li>Resell our services without authorization</li>
                  <li>Make false or misleading statements about our services</li>
                  <li>Interfere with the proper functioning of our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Warranties and Disclaimers</h2>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">10.1 Our Warranties</h3>
                <p className="leading-relaxed mb-4">
                  We warrant that we will perform services with reasonable skill and care, in a professional manner consistent with industry standards.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3 mt-4">10.2 Disclaimers</h3>
                <p className="leading-relaxed mb-4">
                  EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE SPECIFIC RESULTS OR OUTCOMES FROM USE OF OUR SERVICES.
                </p>
                <p className="leading-relaxed">
                  We are not responsible for technical issues, third-party platform changes, or factors beyond our reasonable control that may affect video delivery or performance.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                <p className="leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TITANMOTION MEDIA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="leading-relaxed">
                  Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">12. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless TitanMotion Media, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">13. Confidentiality</h2>
                <p className="leading-relaxed mb-4">
                  We treat all client information, project details, and submitted materials as confidential. We will not disclose your information to third parties except as necessary to provide services or as required by law.
                </p>
                <p className="leading-relaxed">
                  You agree to keep confidential any proprietary information about our processes, techniques, and business practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">14. Force Majeure</h2>
                <p className="leading-relaxed">
                  We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">15. Governing Law and Dispute Resolution</h2>
                <p className="leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TitanMotion Media operates, without regard to conflict of law principles.
                </p>
                <p className="leading-relaxed">
                  Any disputes arising from these Terms shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">16. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">17. Severability</h2>
                <p className="leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">18. Entire Agreement</h2>
                <p className="leading-relaxed">
                  These Terms, together with our Privacy Policy and any project-specific agreements, constitute the entire agreement between you and TitanMotion Media regarding our services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">19. Contact Information</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
