import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import logo from "@/assets/logo.png";

const ApplicationForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Print Button */}
            <div className="flex justify-end mb-4 print:hidden">
              <Button onClick={handlePrint} variant="outline" className="gap-2">
                <Printer className="w-4 h-4" />
                Print / Download PDF
              </Button>
            </div>

            {/* Application Form */}
            <div ref={formRef} className="bg-card rounded-2xl shadow-card p-8 md:p-12 print:shadow-none print:p-4">
              {/* Header */}
              <div className="text-center border-b-2 border-primary pb-6 mb-8">
                <img src={logo} alt="Ishakulam Logo" className="h-16 mx-auto mb-3" />
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  ISHAKULAM GURUKUL
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Village Jiwana Guliyan, Baraut-Meerut Road, Tehsil: Baraut, Distt. Bagpat, U.P.
                </p>
                <p className="text-sm text-muted-foreground">
                  Phone: +91 97609 90064 | Email: Ishakulamgurukul@gmail.com
                </p>
                <h2 className="font-heading text-xl font-bold text-primary mt-4">
                  APPLICATION FORM — Session 2026–27
                </h2>
              </div>

              {/* Photo Box */}
              <div className="flex justify-end mb-6">
                <div className="w-32 h-40 border-2 border-dashed border-muted-foreground/50 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
                  Paste Passport Size Photo Here
                </div>
              </div>

              {/* Student Details */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2">
                  1. STUDENT DETAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Full Name of Student" />
                  <FormField label="Date of Birth" />
                  <FormField label="Gender" />
                  <FormField label="Aadhar Number" />
                  <FormField label="Class Applied For (5th – 9th)" />
                  <FormField label="Blood Group" />
                  <FormField label="Nationality" />
                  <FormField label="Religion" />
                  <FormField label="Category (Gen/OBC/SC/ST)" />
                  <FormField label="Previous School Name" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2 pt-4">
                  2. FATHER'S DETAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Father's Full Name" />
                  <FormField label="Occupation" />
                  <FormField label="Mobile Number" />
                  <FormField label="Email Address" />
                  <FormField label="Aadhar Number" />
                  <FormField label="Annual Income" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2 pt-4">
                  3. MOTHER'S DETAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField label="Mother's Full Name" />
                  <FormField label="Occupation" />
                  <FormField label="Mobile Number" />
                  <FormField label="Aadhar Number" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2 pt-4">
                  4. ADDRESS
                </h3>
                <div className="space-y-4">
                  <FormField label="Residential Address" wide />
                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField label="City/Village" />
                    <FormField label="District" />
                    <FormField label="State" />
                  </div>
                  <FormField label="Pin Code" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2 pt-4">
                  5. DOCUMENTS CHECKLIST
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
                  {[
                    "Birth Certificate (original + copy)",
                    "Previous School Transfer Certificate",
                    "Report Cards (last 2 years)",
                    "4 Passport-size Photographs",
                    "Aadhar Card (student & parents)",
                    "Medical Fitness Certificate",
                    "Caste Certificate (if applicable)",
                    "Parent/Guardian ID Proof",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2">
                      <div className="w-4 h-4 border border-foreground rounded-sm flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground border-b border-border pb-2 pt-4">
                  6. DECLARATION
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I hereby declare that the information provided above is true and correct to the best 
                  of my knowledge. I agree to abide by the rules and regulations of Ishakulam Gurukul. 
                  I understand that any false information may result in the cancellation of admission.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-8">Date: ________________</p>
                    <div className="border-t border-foreground pt-2">
                      <p className="text-sm text-muted-foreground">Signature of Father/Guardian</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-8">Place: ________________</p>
                    <div className="border-t border-foreground pt-2">
                      <p className="text-sm text-muted-foreground">Signature of Mother/Guardian</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-primary">
                  <p className="text-center text-sm font-semibold text-foreground">FOR OFFICE USE ONLY</p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <FormField label="Application No." />
                    <FormField label="Date Received" />
                    <FormField label="Received By" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

const FormField = ({ label, wide }: { label: string; wide?: boolean }) => (
  <div className={wide ? "md:col-span-2" : ""}>
    <label className="block text-sm font-medium text-muted-foreground mb-1">{label}</label>
    <div className="border-b-2 border-muted-foreground/30 pb-4 min-h-[2rem]" />
  </div>
);

export default ApplicationForm;
