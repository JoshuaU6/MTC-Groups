import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useQuery } from "@tanstack/react-query";
import {
  MapPin, Briefcase, Clock, ChevronRight, ChevronLeft, Users, Globe,
  TrendingUp, Star, X, Upload, Loader2, CheckCircle2, AlertCircle,
  Search, SlidersHorizontal, Building2, GraduationCap, Award,
  FileText, Eye, Shield, Check
} from "lucide-react";

const API = "https://staff-portal-production-2d9f.up.railway.app";

interface Job {
  id: number;
  jobId: string | null;
  title: string;
  department: string;
  division: string | null;
  location: string;
  type: string;
  level: string;
  workMode: string | null;
  description: string;
  responsibilities: string | null;
  requirements: string | null;
  benefits: string | null;
  deadline: string | null;
  status: string;
  publishedAt: string | null;
}

const FALLBACK_JOBS: Job[] = [
  { id: -1, jobId: "MTC-JOB-2026-0001", title: "Senior Crude Oil Trader", department: "Energy & Trading", division: "Oil & Gas", location: "London, UK", type: "Full-time", level: "Senior", workMode: "On-site", description: "Lead trading operations for crude oil and refined products across global markets.", responsibilities: "Manage trading book, analyse market trends, execute trades.", requirements: "5+ years commodity trading experience. Strong analytical skills.", benefits: "Competitive salary, health insurance, annual bonus.", deadline: null, status: "published", publishedAt: null },
  { id: -2, jobId: "MTC-JOB-2026-0002", title: "Tank Farm Operations Manager", department: "Energy & Petroleum", division: "Refinery Operations", location: "Lagos, Nigeria", type: "Full-time", level: "Management", workMode: "On-site", description: "Oversee tank farm operations, HSE compliance, and logistics coordination.", responsibilities: "Manage daily operations, ensure HSE compliance, oversee maintenance.", requirements: "Engineering degree + 7 years operations experience.", benefits: "Housing allowance, transportation, medical coverage.", deadline: null, status: "published", publishedAt: null },
  { id: -3, jobId: "MTC-JOB-2026-0003", title: "Corporate Finance Associate", department: "Finance", division: "Corporate Finance", location: "Washington D.C., USA", type: "Full-time", level: "Mid-level", workMode: "Hybrid", description: "Support corporate finance activities including M&A, fundraising, and financial modelling.", responsibilities: "Financial modelling, deal analysis, investor relations support.", requirements: "CFA or MBA preferred. 3+ years investment banking background.", benefits: "Performance bonus, 401k, flexible working.", deadline: null, status: "published", publishedAt: null },
];

const DIVISIONS = [
  "Corporate Finance","Oil & Gas","Refinery Operations","Offshore Marine","Aviation",
  "Logistics","Healthcare","Education","Information Technology","Human Resources",
  "Legal & Compliance","Procurement","HSE","Engineering","Operations","Executive Office"
];

const CERTS = [
  "ACCA","CPA","CFA","PMP","NEBOSH","IOSH","OSHA","IWCF","IADC","BOSIET","HUET","OPITO","STCW",
  "HSE Level 1","HSE Level 2","HSE Level 3","First Aid","Other"
];

const STATUS_COLOURS: Record<string, string> = {
  "new": "new", under_review: "under_review", shortlisted: "shortlisted",
  assessment: "assessment", interview_scheduled: "interview_scheduled",
  interview_completed: "interview_completed", reference_check: "reference_check",
  document_verification: "document_verification", offer_issued: "offer_issued",
  offer_accepted: "offer_accepted", hired: "hired", rejected: "rejected", talent_pool: "talent_pool"
};

const LEVEL_COLOURS: Record<string, string> = {
  Senior: "bg-gray-900 text-white", Management: "bg-red-700 text-white",
  Executive: "bg-purple-700 text-white", "Mid-level": "bg-gray-200 text-gray-800",
  Junior: "bg-blue-100 text-blue-800",
};

const STEPS = [
  { id: 1, label: "Personal Info", icon: Users },
  { id: 2, label: "Position", icon: Briefcase },
  { id: 3, label: "Experience", icon: TrendingUp },
  { id: 4, label: "Education", icon: GraduationCap },
  { id: 5, label: "Certifications", icon: Award },
  { id: 6, label: "Mobility", icon: Globe },
  { id: 7, label: "Screening", icon: FileText },
  { id: 8, label: "Documents", icon: Upload },
  { id: 9, label: "Review", icon: Eye },
];

type FormData = {
  // Step 1
  fullName: string; email: string; phone: string; dateOfBirth: string;
  gender: string; nationality: string; countryOfResidence: string;
  cityOfResidence: string; address: string;
  // Step 2
  division: string; employmentType: string; expectedSalary: string;
  noticePeriod: string; currentEmployer: string; currentJobTitle: string;
  // Step 3
  yearsOfExperience: string; industryExperience: string; keySkills: string;
  linkedin: string; portfolioUrl: string;
  // Step 4
  highestEducation: string; fieldOfStudy: string; university: string; graduationYear: string;
  // Step 5
  certifications: Array<{ name: string; issuer: string; expiry: string }>;
  // Step 6
  willingToRelocate: boolean | null; relocationCountries: string;
  hasValidPassport: boolean | null; passportExpiry: string;
  requiresVisaSponsorship: boolean | null; currentVisaStatus: string;
  // Step 7
  heardAboutUs: string; whyMTC: string; availableStartDate: string;
  hasDisability: boolean | null; disabilityDetails: string; addToTalentPool: boolean;
  reference1Name: string; reference1Title: string; reference1Company: string;
  reference1Email: string; reference1Phone: string;
  reference2Name: string; reference2Title: string; reference2Company: string;
  reference2Email: string; reference2Phone: string;
  // Step 8
  cvFile: File | null; cvUrl: string; cvFileName: string; coverLetter: string;
  consentGiven: boolean; declarationAccepted: boolean; backgroundCheckConsent: boolean;
};

const EMPTY: FormData = {
  fullName: "", email: "", phone: "", dateOfBirth: "", gender: "", nationality: "",
  countryOfResidence: "", cityOfResidence: "", address: "",
  division: "", employmentType: "", expectedSalary: "", noticePeriod: "",
  currentEmployer: "", currentJobTitle: "",
  yearsOfExperience: "", industryExperience: "", keySkills: "", linkedin: "", portfolioUrl: "",
  highestEducation: "", fieldOfStudy: "", university: "", graduationYear: "",
  certifications: [],
  willingToRelocate: null, relocationCountries: "", hasValidPassport: null,
  passportExpiry: "", requiresVisaSponsorship: null, currentVisaStatus: "",
  heardAboutUs: "", whyMTC: "", availableStartDate: "", hasDisability: null,
  disabilityDetails: "", addToTalentPool: false,
  reference1Name: "", reference1Title: "", reference1Company: "", reference1Email: "", reference1Phone: "",
  reference2Name: "", reference2Title: "", reference2Company: "", reference2Email: "", reference2Phone: "",
  cvFile: null, cvUrl: "", cvFileName: "", coverLetter: "",
  consentGiven: false, declarationAccepted: false, backgroundCheckConsent: false,
};

// ── Shared input styles ───────────────────────────────────────────────────────
const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors bg-white";
const lbl = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";
const req = <span className="text-red-600 ml-0.5">*</span>;

function YesNo({ value, onChange, name }: { value: boolean | null; onChange: (v: boolean) => void; name: string }) {
  return (
    <div className="flex gap-3">
      {[true, false].map((v) => (
        <button key={String(v)} type="button"
          onClick={() => onChange(v)}
          className={`flex-1 py-2.5 text-sm font-medium rounded border-2 transition-colors ${value === v ? "border-red-600 bg-red-600 text-white" : "border-gray-200 text-gray-600 hover:border-red-400"}`}
        >
          {v ? "Yes" : "No"}
        </button>
      ))}
    </div>
  );
}

// ── Multi-step Application Form ───────────────────────────────────────────────
function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({ ...EMPTY, division: job.division ?? "" });
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const topRef = useRef<HTMLDivElement>(null);

  const f = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: (e.target as any).value }));

  const totalSteps = STEPS.length;

  const validateStep = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (step === 1) {
      if (!form.fullName.trim()) errs.fullName = "Required";
      if (!form.email.trim()) errs.email = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
      if (!form.phone.trim()) errs.phone = "Required";
      if (!form.nationality.trim()) errs.nationality = "Required";
      if (!form.countryOfResidence.trim()) errs.countryOfResidence = "Required";
    }
    if (step === 2) {
      if (!form.division) errs.division = "Required";
    }
    if (step === 3) {
      if (!form.yearsOfExperience) errs.yearsOfExperience = "Required";
    }
    if (step === 8) {
      if (!form.coverLetter.trim()) errs.coverLetter = "Required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, totalSteps));
    topRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => { setStep((s) => Math.max(s - 1, 1)); topRef.current?.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleSubmit = async () => {
    if (!form.consentGiven || !form.declarationAccepted) {
      setErrorMsg("You must accept the privacy consent and declaration to submit."); return;
    }
    setState("submitting");
    setErrorMsg("");
    try {
      // Convert CV to base64 if provided
      let cvUrl = form.cvUrl;
      let cvFileName = form.cvFileName;
      if (form.cvFile) {
        cvFileName = form.cvFile.name;
        if (form.cvFile.size > 5 * 1024 * 1024) throw new Error("CV file must be under 5MB");
        const reader = new FileReader();
        cvUrl = await new Promise<string>((res, rej) => {
          reader.onload = () => res(reader.result as string);
          reader.onerror = rej;
          reader.readAsDataURL(form.cvFile!);
        });
      }

      const payload = {
        ...form,
        cvUrl,
        cvFileName,
        cvFile: undefined,
        jobTitle: job.title,
      };

      const endpoint = job.id > 0
        ? `${API}/api/public/jobs/${job.id}/apply`
        : `${API}/api/public/jobs/0/apply`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Failed to submit application");
      }

      setState("success");
    } catch (err: any) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setState("idle");
    }
  };

  const err = (key: keyof FormData) => errors[key] ? <p className="text-red-500 text-xs mt-1">{errors[key]}</p> : null;
  const inputCls = (key: keyof FormData) => `${inp} ${errors[key] ? "border-red-400 ring-1 ring-red-400" : ""}`;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-2xl max-h-[95vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-900 px-6 py-4 flex items-start justify-between shrink-0">
          <div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">Apply Now</p>
            <h2 className="text-white font-serif font-bold text-lg leading-tight">{job.title}</h2>
            <p className="text-gray-400 text-xs mt-0.5">{job.department} · {job.location}{job.jobId ? ` · ${job.jobId}` : ""}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white mt-1"><X className="w-5 h-5" /></button>
        </div>

        {/* Progress bar */}
        {state !== "success" && (
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">{STEPS[step - 1]?.label}</span>
              <span className="text-xs text-gray-400">Step {step} of {totalSteps}</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full">
              <div className="h-full bg-red-600 rounded-full transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }} />
            </div>
            <div className="flex mt-2 gap-0.5">
              {STEPS.map((s) => (
                <div key={s.id} className={`flex-1 h-0.5 rounded-full transition-colors ${s.id <= step ? "bg-red-600" : "bg-gray-200"}`} />
              ))}
            </div>
          </div>
        )}

        {/* Body */}
        <div ref={topRef} className="flex-1 overflow-y-auto">
          {state === "success" ? (
            <div className="px-8 py-12 text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Application Submitted!</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                Thank you for applying for <strong>{job.title}</strong> at MTC Group of Companies.
                A confirmation email has been sent to <strong>{form.email}</strong> with your application reference number.
              </p>
              <p className="text-sm text-gray-500 mb-6">Our HR team will review your application within 5–7 business days and contact you if shortlisted.</p>
              <button onClick={onClose} className="bg-red-600 text-white px-8 py-3 font-semibold text-sm hover:bg-red-700 transition-colors rounded">
                Close
              </button>
            </div>
          ) : (
            <div className="px-6 py-5">
              {/* STEP 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2"><label className={lbl}>Full Name {req}</label><input type="text" value={form.fullName} onChange={f("fullName")} className={inputCls("fullName")} placeholder="As it appears on your passport" />{err("fullName")}</div>
                    <div><label className={lbl}>Email Address {req}</label><input type="email" value={form.email} onChange={f("email")} className={inputCls("email")} placeholder="your@email.com" />{err("email")}</div>
                    <div><label className={lbl}>Phone Number {req}</label><input type="tel" value={form.phone} onChange={f("phone")} className={inputCls("phone")} placeholder="+234 800 000 0000" />{err("phone")}</div>
                    <div><label className={lbl}>Date of Birth</label><input type="date" value={form.dateOfBirth} onChange={f("dateOfBirth")} className={inp} /></div>
                    <div><label className={lbl}>Gender</label>
                      <select value={form.gender} onChange={f("gender")} className={inp}>
                        <option value="">Select...</option>
                        <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                      </select>
                    </div>
                    <div><label className={lbl}>Nationality {req}</label><input type="text" value={form.nationality} onChange={f("nationality")} className={inputCls("nationality")} placeholder="e.g. Nigerian" />{err("nationality")}</div>
                    <div><label className={lbl}>Country of Residence {req}</label><input type="text" value={form.countryOfResidence} onChange={f("countryOfResidence")} className={inputCls("countryOfResidence")} placeholder="e.g. Nigeria" />{err("countryOfResidence")}</div>
                    <div><label className={lbl}>City</label><input type="text" value={form.cityOfResidence} onChange={f("cityOfResidence")} className={inp} placeholder="e.g. Lagos" /></div>
                    <div className="col-span-2"><label className={lbl}>Address</label><input type="text" value={form.address} onChange={f("address")} className={inp} placeholder="Street address" /></div>
                  </div>
                </div>
              )}

              {/* STEP 2: Position & Employment */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Position & Employment Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className={lbl}>MTC Group Division {req}</label>
                      <select value={form.division} onChange={f("division")} className={`${inp} ${errors.division ? "border-red-400" : ""}`}>
                        <option value="">Select division...</option>
                        {DIVISIONS.map((d) => <option key={d}>{d}</option>)}
                      </select>
                      {err("division")}
                    </div>
                    <div><label className={lbl}>Employment Type</label>
                      <select value={form.employmentType} onChange={f("employmentType")} className={inp}>
                        <option value="">Select...</option>
                        <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
                      </select>
                    </div>
                    <div><label className={lbl}>Expected Salary (USD/Month)</label><input type="text" value={form.expectedSalary} onChange={f("expectedSalary")} className={inp} placeholder="e.g. $5,000 – $7,000" /></div>
                    <div><label className={lbl}>Notice Period</label>
                      <select value={form.noticePeriod} onChange={f("noticePeriod")} className={inp}>
                        <option value="">Select...</option>
                        <option>Immediately</option><option>1 week</option><option>2 weeks</option><option>1 month</option><option>2 months</option><option>3 months</option>
                      </select>
                    </div>
                    <div><label className={lbl}>Current Job Title</label><input type="text" value={form.currentJobTitle} onChange={f("currentJobTitle")} className={inp} placeholder="Your current role" /></div>
                    <div className="col-span-2"><label className={lbl}>Current Employer</label><input type="text" value={form.currentEmployer} onChange={f("currentEmployer")} className={inp} placeholder="Company name" /></div>
                  </div>
                </div>
              )}

              {/* STEP 3: Professional Experience */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Professional Experience</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={lbl}>Years of Experience {req}</label>
                      <select value={form.yearsOfExperience} onChange={f("yearsOfExperience")} className={inputCls("yearsOfExperience")}>
                        <option value="">Select...</option>
                        <option>Less than 1 year</option><option>1–2 years</option><option>3–5 years</option>
                        <option>6–10 years</option><option>11–15 years</option><option>15+ years</option>
                      </select>
                      {err("yearsOfExperience")}
                    </div>
                    <div><label className={lbl}>Industry Experience</label><input type="text" value={form.industryExperience} onChange={f("industryExperience")} className={inp} placeholder="e.g. Oil & Gas, Finance" /></div>
                    <div className="col-span-2"><label className={lbl}>Key Skills</label><textarea value={form.keySkills} onChange={f("keySkills")} rows={3} className={`${inp} resize-none`} placeholder="List your top skills separated by commas..." /></div>
                    <div><label className={lbl}>LinkedIn Profile</label><input type="url" value={form.linkedin} onChange={f("linkedin")} className={inp} placeholder="https://linkedin.com/in/yourprofile" /></div>
                    <div><label className={lbl}>Portfolio / Website</label><input type="url" value={form.portfolioUrl} onChange={f("portfolioUrl")} className={inp} placeholder="https://yourwebsite.com" /></div>
                  </div>
                </div>
              )}

              {/* STEP 4: Education */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Education</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className={lbl}>Highest Level of Education</label>
                      <select value={form.highestEducation} onChange={f("highestEducation")} className={inp}>
                        <option value="">Select...</option>
                        <option>High School / WAEC</option><option>OND</option><option>HND</option><option>Bachelor's Degree (BSc/BA)</option>
                        <option>Postgraduate Diploma</option><option>Master's Degree (MSc/MBA/MA)</option><option>PhD</option><option>Professional Certification</option>
                      </select>
                    </div>
                    <div><label className={lbl}>Field of Study</label><input type="text" value={form.fieldOfStudy} onChange={f("fieldOfStudy")} className={inp} placeholder="e.g. Petroleum Engineering" /></div>
                    <div><label className={lbl}>Graduation Year</label><input type="text" value={form.graduationYear} onChange={f("graduationYear")} className={inp} placeholder="e.g. 2018" /></div>
                    <div className="col-span-2"><label className={lbl}>University / Institution</label><input type="text" value={form.university} onChange={f("university")} className={inp} placeholder="Name of institution" /></div>
                  </div>
                </div>
              )}

              {/* STEP 5: Certifications */}
              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Professional Certifications & Licences</h3>
                  <p className="text-xs text-gray-500">Select all professional certifications you hold. Add expiry dates where applicable.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CERTS.map((cert) => {
                      const has = form.certifications.some((c) => c.name === cert);
                      return (
                        <button key={cert} type="button"
                          onClick={() => {
                            setForm((p) => ({
                              ...p,
                              certifications: has
                                ? p.certifications.filter((c) => c.name !== cert)
                                : [...p.certifications, { name: cert, issuer: "", expiry: "" }]
                            }));
                          }}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded border-2 transition-colors text-left ${has ? "border-red-600 bg-red-50 text-red-700" : "border-gray-200 text-gray-600 hover:border-red-300"}`}
                        >
                          {has && <Check className="w-3 h-3 shrink-0" />}
                          {cert}
                        </button>
                      );
                    })}
                  </div>
                  {form.certifications.length > 0 && (
                    <div className="space-y-3 mt-2">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Add details for selected certifications:</p>
                      {form.certifications.map((cert, i) => (
                        <div key={cert.name} className="bg-gray-50 p-3 rounded border border-gray-200">
                          <p className="text-xs font-bold text-red-700 mb-2">{cert.name}</p>
                          <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="Issuing body" value={cert.issuer}
                              onChange={(e) => setForm((p) => ({ ...p, certifications: p.certifications.map((c, j) => j === i ? { ...c, issuer: e.target.value } : c) }))}
                              className={`${inp} text-xs`} />
                            <input type="text" placeholder="Expiry date (if applicable)" value={cert.expiry}
                              onChange={(e) => setForm((p) => ({ ...p, certifications: p.certifications.map((c, j) => j === i ? { ...c, expiry: e.target.value } : c) }))}
                              className={`${inp} text-xs`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 6: Mobility */}
              {step === 6 && (
                <div className="space-y-5">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">International Mobility & Work Authorisation</h3>
                  <div>
                    <label className={lbl}>Are you willing to relocate internationally?</label>
                    <YesNo value={form.willingToRelocate} onChange={(v) => setForm((p) => ({ ...p, willingToRelocate: v }))} name="relocate" />
                    {form.willingToRelocate && (
                      <div className="mt-3"><label className={lbl}>Which countries are you open to?</label>
                        <input type="text" value={form.relocationCountries} onChange={f("relocationCountries")} className={inp} placeholder="e.g. UK, UAE, USA, Nigeria" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={lbl}>Do you hold a valid international passport?</label>
                    <YesNo value={form.hasValidPassport} onChange={(v) => setForm((p) => ({ ...p, hasValidPassport: v }))} name="passport" />
                    {form.hasValidPassport && (
                      <div className="mt-3"><label className={lbl}>Passport Expiry Date</label>
                        <input type="date" value={form.passportExpiry} onChange={f("passportExpiry")} className={inp} />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={lbl}>Do you require visa sponsorship to work in your target country?</label>
                    <YesNo value={form.requiresVisaSponsorship} onChange={(v) => setForm((p) => ({ ...p, requiresVisaSponsorship: v }))} name="visa" />
                  </div>
                  <div>
                    <label className={lbl}>Current Visa / Work Permit Status</label>
                    <select value={form.currentVisaStatus} onChange={f("currentVisaStatus")} className={inp}>
                      <option value="">Select...</option>
                      <option>Citizen / Right to work</option><option>Permanent Resident</option><option>Work Permit Holder</option>
                      <option>Student Visa</option><option>No current authorisation</option><option>Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 7: Screening + References */}
              {step === 7 && (
                <div className="space-y-5">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Screening Questions & References</h3>
                  <div className="space-y-4">
                    <div>
                      <label className={lbl}>How did you hear about this position?</label>
                      <select value={form.heardAboutUs} onChange={f("heardAboutUs")} className={inp}>
                        <option value="">Select...</option>
                        <option>Company Website</option><option>LinkedIn</option><option>Job Board (Indeed, Jobberman etc)</option>
                        <option>Referral from employee</option><option>Social Media</option><option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={lbl}>Why do you want to work at MTC Group?</label>
                      <textarea value={form.whyMTC} onChange={f("whyMTC")} rows={4} className={`${inp} resize-none`} placeholder="Tell us what motivates you to join MTC Group and why you are a great fit..." />
                    </div>
                    <div>
                      <label className={lbl}>Earliest Available Start Date</label>
                      <input type="date" value={form.availableStartDate} onChange={f("availableStartDate")} className={inp} />
                    </div>
                    <div>
                      <label className={lbl}>Do you have any disability or medical condition we should be aware of?</label>
                      <YesNo value={form.hasDisability} onChange={(v) => setForm((p) => ({ ...p, hasDisability: v }))} name="disability" />
                      {form.hasDisability && (
                        <div className="mt-3"><label className={lbl}>Please provide details (optional)</label>
                          <textarea value={form.disabilityDetails} onChange={f("disabilityDetails")} rows={2} className={`${inp} resize-none`} placeholder="Any adjustments we should make during the recruitment process..." />
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" checked={form.addToTalentPool} onChange={(e) => setForm((p) => ({ ...p, addToTalentPool: e.target.checked }))} className="mt-0.5" />
                        <span className="text-sm text-gray-600">Keep my profile in the MTC Group Talent Pool for future opportunities, even if not selected for this role.</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3">Professional References</h4>
                    <div className="space-y-4">
                      {[1, 2].map((n) => (
                        <div key={n} className="bg-gray-50 p-4 rounded border border-gray-200">
                          <p className="text-xs font-bold text-gray-700 mb-3">Reference {n}</p>
                          <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="Full Name" value={(form as any)[`reference${n}Name`]} onChange={(e) => setForm((p) => ({ ...p, [`reference${n}Name`]: e.target.value }))} className={`${inp} text-xs`} />
                            <input type="text" placeholder="Job Title" value={(form as any)[`reference${n}Title`]} onChange={(e) => setForm((p) => ({ ...p, [`reference${n}Title`]: e.target.value }))} className={`${inp} text-xs`} />
                            <input type="text" placeholder="Company" value={(form as any)[`reference${n}Company`]} onChange={(e) => setForm((p) => ({ ...p, [`reference${n}Company`]: e.target.value }))} className={`${inp} text-xs`} />
                            <input type="tel" placeholder="Phone" value={(form as any)[`reference${n}Phone`]} onChange={(e) => setForm((p) => ({ ...p, [`reference${n}Phone`]: e.target.value }))} className={`${inp} text-xs`} />
                            <input type="email" placeholder="Email" value={(form as any)[`reference${n}Email`]} onChange={(e) => setForm((p) => ({ ...p, [`reference${n}Email`]: e.target.value }))} className={`${inp} text-xs col-span-2`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 8: Documents */}
              {step === 8 && (
                <div className="space-y-5">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Documents & Cover Letter</h3>
                  <div>
                    <label className={lbl}>CV / Resume {req}</label>
                    <label className={`flex items-center gap-3 border-2 border-dashed rounded px-4 py-4 cursor-pointer transition-colors ${form.cvFile ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-red-400 hover:bg-red-50/30"}`}>
                      <Upload className={`w-5 h-5 shrink-0 ${form.cvFile ? "text-green-500" : "text-gray-400"}`} />
                      <div>
                        {form.cvFile ? (
                          <p className="text-sm font-semibold text-green-700">{form.cvFile.name}</p>
                        ) : (
                          <>
                            <p className="text-sm text-gray-600 font-medium">Click to upload your CV</p>
                            <p className="text-xs text-gray-400 mt-0.5">PDF, DOC, DOCX — maximum 5MB</p>
                          </>
                        )}
                      </div>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          if (file.size > 5 * 1024 * 1024) { setErrorMsg("File must be under 5MB"); return; }
                          setForm((p) => ({ ...p, cvFile: file, cvFileName: file.name }));
                          setErrorMsg("");
                        }} />
                    </label>
                  </div>
                  <div>
                    <label className={lbl}>Cover Letter {req}</label>
                    <textarea value={form.coverLetter} onChange={f("coverLetter")} rows={7}
                      className={`${inp} resize-none ${errors.coverLetter ? "border-red-400" : ""}`}
                      placeholder="Tell us why you are an excellent candidate for this role. What specific experience and skills do you bring to MTC Group? Why are you interested in this position and our company?" />
                    {err("coverLetter")}
                  </div>
                </div>
              )}

              {/* STEP 9: Review & Submit */}
              {step === 9 && (
                <div className="space-y-5">
                  <h3 className="font-serif font-bold text-gray-900 text-base border-b pb-2">Review & Submit</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Name", value: form.fullName },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone },
                      { label: "Nationality", value: form.nationality },
                      { label: "Country", value: form.countryOfResidence },
                      { label: "Division", value: form.division },
                      { label: "Position", value: job.title },
                      { label: "Experience", value: form.yearsOfExperience },
                      { label: "Education", value: form.highestEducation },
                      { label: "Certifications", value: form.certifications.map((c) => c.name).join(", ") || "None listed" },
                      { label: "Willing to Relocate", value: form.willingToRelocate === null ? "Not answered" : form.willingToRelocate ? "Yes" : "No" },
                      { label: "Visa Sponsorship Required", value: form.requiresVisaSponsorship === null ? "Not answered" : form.requiresVisaSponsorship ? "Yes" : "No" },
                      { label: "Talent Pool", value: form.addToTalentPool ? "Yes" : "No" },
                      { label: "CV", value: form.cvFile?.name ?? form.cvFileName ?? "Not uploaded" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex gap-3 py-1.5 border-b border-gray-100 last:border-0">
                        <span className="text-gray-400 w-44 shrink-0 text-xs font-semibold uppercase tracking-wide">{label}</span>
                        <span className="text-gray-800 flex-1 text-xs">{value || "—"}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600 leading-relaxed">
                        <strong>Privacy Notice:</strong> By submitting this application, you consent to MTC Group of Companies collecting, storing, and processing your personal information and uploaded documents for recruitment, background verification, interview scheduling, and talent pool purposes. Your data will be handled securely and accessed only by authorised recruitment personnel.
                      </p>
                    </div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.consentGiven} onChange={(e) => setForm((p) => ({ ...p, consentGiven: e.target.checked }))} className="mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium">I consent to the collection and processing of my personal data as described above. {req}</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.declarationAccepted} onChange={(e) => setForm((p) => ({ ...p, declarationAccepted: e.target.checked }))} className="mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium">I declare that all information provided in this application is accurate and complete to the best of my knowledge. I understand that providing false information may result in disqualification or termination. {req}</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.backgroundCheckConsent} onChange={(e) => setForm((p) => ({ ...p, backgroundCheckConsent: e.target.checked }))} className="mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium">I consent to background checks and reference verification as part of the MTC Group recruitment process.</span>
                    </label>
                  </div>

                  {errorMsg && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{errorMsg}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer nav */}
        {state !== "success" && (
          <div className="px-6 py-4 border-t border-gray-100 flex gap-3 shrink-0 bg-white">
            {step > 1 && (
              <button type="button" onClick={back}
                className="flex items-center gap-2 border border-gray-200 text-gray-600 px-5 py-2.5 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <div className="flex-1" />
            {step < totalSteps ? (
              <button type="button" onClick={next}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 text-sm font-semibold rounded hover:bg-red-700 transition-colors">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="button" onClick={handleSubmit} disabled={state === "submitting"}
                className="flex items-center gap-2 bg-red-600 text-white px-8 py-2.5 text-sm font-semibold rounded hover:bg-red-700 transition-colors disabled:opacity-50">
                {state === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Submit Application <CheckCircle2 className="w-4 h-4" /></>}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── Job Detail Modal ──────────────────────────────────────────────────────────
function JobDetailModal({ job, onApply, onClose }: { job: Job; onApply: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-gray-900 px-6 py-4 flex items-start justify-between rounded-t-2xl">
          <div>
            {job.jobId && <p className="text-red-400 text-xs font-mono mb-1">{job.jobId}</p>}
            <h2 className="text-white font-serif font-bold text-xl">{job.title}</h2>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-gray-400 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
              <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
              {job.workMode && <span className="text-gray-400 text-xs flex items-center gap-1"><Globe className="w-3 h-3" />{job.workMode}</span>}
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">About the Role</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{job.description}</p>
          </div>
          {job.responsibilities && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Responsibilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{job.responsibilities}</p>
            </div>
          )}
          {job.requirements && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Requirements</h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{job.requirements}</p>
            </div>
          )}
          {job.benefits && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{job.benefits}</p>
            </div>
          )}
          {job.deadline && (
            <p className="text-xs text-red-600 font-semibold">Application deadline: {new Date(job.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
          )}
          <button onClick={onApply}
            className="w-full bg-red-600 text-white py-3 font-bold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors rounded flex items-center justify-center gap-2">
            Apply for This Position <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Values ────────────────────────────────────────────────────────────────────
const VALUES = [
  { icon: Globe, title: "Global Reach", desc: "Work across 20+ countries and build a career that spans continents." },
  { icon: TrendingUp, title: "Growth & Advancement", desc: "Fast-moving organisation with real promotion paths and visible leadership." },
  { icon: Users, title: "Diverse Teams", desc: "A multinational workforce bringing together the best talent from around the world." },
  { icon: Star, title: "Meaningful Work", desc: "Contribute to energy infrastructure, trade, and development that impacts millions." },
];

// ── Main Careers Page ─────────────────────────────────────────────────────────
export default function Careers() {
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [detailJob, setDetailJob] = useState<Job | null>(null);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterMode, setFilterMode] = useState("All");

  const { data: liveJobs, isLoading, isError } = useQuery<Job[]>({
    queryKey: ["public-jobs"],
    queryFn: async () => {
      const res = await fetch(`${API}/api/public/jobs`);
      if (!res.ok) throw new Error("API unavailable");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const jobs: Job[] = (!isError && liveJobs && liveJobs.length > 0) ? liveJobs : FALLBACK_JOBS;

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department))).sort()];
  const types = ["All", ...Array.from(new Set(jobs.map((j) => j.type))).sort()];
  const levels = ["All", ...Array.from(new Set(jobs.map((j) => j.level))).sort()];
  const modes = ["All", ...Array.from(new Set(jobs.map((j) => j.workMode ?? "On-site"))).sort()];

  const filtered = jobs.filter((j) => {
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.department.toLowerCase().includes(search.toLowerCase()) && !j.location.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterDept !== "All" && j.department !== filterDept) return false;
    if (filterType !== "All" && j.type !== filterType) return false;
    if (filterLevel !== "All" && j.level !== filterLevel) return false;
    if (filterMode !== "All" && (j.workMode ?? "On-site") !== filterMode) return false;
    return true;
  });

  return (
    <Layout>
      <AnimatePresence>
        {applyJob && <ApplicationModal job={applyJob} onClose={() => setApplyJob(null)} />}
        {detailJob && !applyJob && (
          <JobDetailModal job={detailJob} onApply={() => { setApplyJob(detailJob); setDetailJob(null); }} onClose={() => setDetailJob(null)} />
        )}
      </AnimatePresence>

      {/* Hero */}
      <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero4.jpg)" }}>
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-red-400 font-bold tracking-widest text-sm uppercase mb-4 block">Join Our Team</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">Build Your Career<br />at MTC Group</h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Shape the future of global energy, trade, and infrastructure. Join a team of professionals operating across four continents.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="text-center p-8 bg-gray-50 border-b-4 border-transparent hover:border-red-600 transition-all">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-5">
                    <v.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-3 block">Opportunities</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">Open Positions</h2>
            <div className="h-1 w-20 bg-red-600 mb-4" />
            <p className="text-gray-500 text-sm">
              {isLoading ? "Loading current openings..." : `${filtered.length} position${filtered.length !== 1 ? "s" : ""} available — updated in real time`}
            </p>
          </ScrollReveal>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search positions..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600" />
            </div>
            {[
              { label: "Department", options: departments, value: filterDept, onChange: setFilterDept },
              { label: "Type", options: types, value: filterType, onChange: setFilterType },
              { label: "Level", options: levels, value: filterLevel, onChange: setFilterLevel },
              { label: "Work Mode", options: modes, value: filterMode, onChange: setFilterMode },
            ].map(({ label, options, value, onChange }) => (
              <select key={label} value={value} onChange={(e) => onChange(e.target.value)}
                className="py-2.5 px-3 border border-gray-200 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 cursor-pointer">
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ))}
          </div>

          {isLoading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="bg-white p-7 shadow-sm animate-pulse h-28 rounded" />)}</div>
          ) : filtered.length === 0 ? (
            <div className="bg-white p-12 text-center rounded shadow-sm">
              <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No positions match your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 40}>
                  <div className="bg-white p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-red-600 rounded-sm group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          {job.jobId && <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded">{job.jobId}</span>}
                          <span className={`text-xs px-2.5 py-0.5 font-bold rounded-full ${LEVEL_COLOURS[job.level] ?? "bg-gray-100 text-gray-600"}`}>{job.level}</span>
                          {job.workMode && job.workMode !== "On-site" && <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">{job.workMode}</span>}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-red-600 transition-colors">{job.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{job.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-gray-400 text-xs flex-wrap">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-red-400" />{job.type}</span>
                          <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-red-400" />{job.department}</span>
                          {job.deadline && <span className="text-red-500 font-medium">Deadline: {new Date(job.deadline).toLocaleDateString("en-GB")}</span>}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => setDetailJob(job)}
                          className="border border-gray-200 text-gray-600 px-4 py-2.5 text-xs font-semibold hover:bg-gray-50 transition-colors rounded">
                          View Details
                        </button>
                        <button onClick={() => setApplyJob(job)}
                          className="bg-red-600 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition-colors flex items-center gap-1.5 rounded">
                          Apply <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Speculative */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-5">Don't See Your Role?</h2>
          <p className="text-white/70 font-light mb-8 text-lg">MTC Group is always looking for exceptional talent. Send your speculative application and we'll keep you in our talent pool.</p>
          <button
            onClick={() => setApplyJob({ id: 0, jobId: null, title: "Speculative Application", department: "General", division: null, location: "Global", type: "Full-time", level: "Mid-level", workMode: null, description: "Open application for future opportunities at MTC Group of Companies.", responsibilities: null, requirements: null, benefits: null, deadline: null, status: "published", publishedAt: null })}
            className="bg-red-600 text-white font-bold px-10 py-4 uppercase tracking-wide hover:bg-red-700 transition-colors rounded">
            Submit Speculative Application
          </button>
        </div>
      </section>
    </Layout>
  );
}