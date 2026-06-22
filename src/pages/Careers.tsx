import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useQuery } from "@tanstack/react-query";
import {
  MapPin, Briefcase, Clock, ChevronRight, Users, Globe,
  TrendingUp, Star, X, Upload, Loader2, CheckCircle2,
  AlertCircle, ExternalLink, Search, SlidersHorizontal
} from "lucide-react";

// ── Config ─────────────────────────────────────────────────────────────────────
const STAFF_PORTAL_API = "https://staff-portal-production-2d9f.up.railway.app";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzbnoje"; // fallback

// ── Types ──────────────────────────────────────────────────────────────────────
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  requirements: string | null;
  status: string;
  publishedAt: string | null;
}

// ── Static fallback jobs (shown if API is unreachable) ────────────────────────
const FALLBACK_JOBS: Job[] = [
  { id: -1, title: "Senior Crude Oil Trader", department: "Energy & Trading", location: "London, UK", type: "Full-time", level: "Senior", description: "Lead trading operations for crude oil and refined products across global markets.", requirements: "5+ years commodity trading experience.", status: "published", publishedAt: null },
  { id: -2, title: "Tank Farm Operations Manager", department: "Energy & Petroleum", location: "Lagos, Nigeria", type: "Full-time", level: "Management", description: "Oversee tank farm operations, HSE compliance, and logistics coordination.", requirements: "Engineering degree + 7 years operations experience.", status: "published", publishedAt: null },
  { id: -3, title: "International Commodity Analyst", department: "Trading & Commodities", location: "Washington D.C., USA", type: "Full-time", level: "Mid-level", description: "Analyse global commodity markets and provide trading intelligence.", requirements: "Finance or Economics degree, 3+ years analyst experience.", status: "published", publishedAt: null },
  { id: -4, title: "Corporate Finance Associate", department: "Finance", location: "Washington D.C., USA", type: "Full-time", level: "Mid-level", description: "Support corporate finance activities including M&A, fundraising, and financial modelling.", requirements: "CFA or MBA preferred, investment banking background.", status: "published", publishedAt: null },
];

// ── Value props ────────────────────────────────────────────────────────────────
const VALUES = [
  { icon: Globe, title: "Global Reach", desc: "Work across 20+ countries and build a career that spans continents." },
  { icon: TrendingUp, title: "Growth & Advancement", desc: "Fast-moving organisation with real promotion paths and visible leadership." },
  { icon: Users, title: "Diverse Teams", desc: "A multinational workforce bringing together the best talent from around the world." },
  { icon: Star, title: "Meaningful Work", desc: "Contribute to energy infrastructure, trade, and development that impacts millions." },
];

const LEVEL_COLOURS: Record<string, string> = {
  Senior: "bg-mtc-charcoal text-white",
  Management: "bg-mtc-red text-white",
  Executive: "bg-purple-700 text-white",
  "Mid-level": "bg-mtc-grey text-mtc-charcoal",
  Junior: "bg-blue-100 text-blue-800",
};

// ── Application Modal ─────────────────────────────────────────────────────────
function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", linkedin: "", coverLetter: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const f = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim()) {
      setErrorMsg("Full name and email are required."); return;
    }
    setState("submitting");
    setErrorMsg("");

    try {
      // Convert CV to base64 if provided
      let cvUrl: string | null = null;
      let cvFileName: string | null = null;

      if (cvFile) {
        cvFileName = cvFile.name;
        // Try to submit to staff portal API first
        if (job.id > 0) {
          const reader = new FileReader();
          const base64 = await new Promise<string>((res, rej) => {
            reader.onload = () => res((reader.result as string).split(",")[1]);
            reader.onerror = rej;
            reader.readAsDataURL(cvFile);
          });
          cvUrl = `data:${cvFile.type};base64,${base64}`;
        }
      }

      // Try staff portal API if it's a real job (not fallback)
      if (job.id > 0) {
        const res = await fetch(`${STAFF_PORTAL_API}/api/public/jobs/${job.id}/apply`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, cvUrl, cvFileName }),
        });
        if (!res.ok) throw new Error((await res.json()).error ?? "Failed");
      } else {
        // Fallback: send via Formspree for static jobs
        const fd = new FormData();
        fd.append("_subject", `Job Application: ${job.title}`);
        fd.append("job", job.title);
        fd.append("department", job.department);
        Object.entries(form).forEach(([k, v]) => fd.append(k, v));
        if (cvFile) fd.append("cv", cvFile);
        const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("Failed to send application");
      }

      setState("success");
    } catch (err: any) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setState("error");
    }
  };

  const inputCls = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-mtc-red/30 focus:border-mtc-red transition-colors";
  const labelCls = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between rounded-t-2xl z-10">
          <div>
            <p className="text-xs font-bold text-mtc-red uppercase tracking-widest mb-0.5">Apply Now</p>
            <h2 className="text-lg font-serif font-bold text-mtc-charcoal leading-tight">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{job.department} · {job.location}</p>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors mt-0.5">
            <X className="w-5 h-5" />
          </button>
        </div>

        {state === "success" ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-mtc-charcoal mb-2">Application Submitted!</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you for applying for <strong>{job.title}</strong>. Our HR team will review your application and be in touch within 5-7 business days.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-mtc-red text-white px-8 py-2.5 text-sm font-semibold hover:bg-red-800 transition-colors rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className={labelCls}>Full Name *</label>
                <input type="text" required value={form.fullName} onChange={f("fullName")} className={inputCls} placeholder="Your full name" />
              </div>
              <div>
                <label className={labelCls}>Email Address *</label>
                <input type="email" required value={form.email} onChange={f("email")} className={inputCls} placeholder="you@example.com" />
              </div>
              <div>
                <label className={labelCls}>Phone Number</label>
                <input type="tel" value={form.phone} onChange={f("phone")} className={inputCls} placeholder="+1 234 567 8900" />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>LinkedIn Profile</label>
                <input type="url" value={form.linkedin} onChange={f("linkedin")} className={inputCls} placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Cover Letter</label>
                <textarea
                  value={form.coverLetter} onChange={f("coverLetter")} rows={5}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us why you're a great fit for this role and what you bring to MTC Group..."
                />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>CV / Resume</label>
                <label className={`flex items-center gap-3 border-2 border-dashed rounded px-4 py-3 cursor-pointer transition-colors ${cvFile ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-mtc-red/40 hover:bg-red-50/30"}`}>
                  <Upload className={`w-5 h-5 shrink-0 ${cvFile ? "text-green-500" : "text-gray-400"}`} />
                  <span className="text-sm text-gray-600">
                    {cvFile ? <span className="font-medium text-green-700">{cvFile.name}</span> : "Upload CV (PDF, DOC, DOCX — max 5MB)"}
                  </span>
                  <input
                    type="file" accept=".pdf,.doc,.docx" className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size > 5 * 1024 * 1024) { setErrorMsg("File size must be under 5MB."); return; }
                      setCvFile(file ?? null);
                    }}
                  />
                </label>
              </div>
            </div>

            {(state === "error" || errorMsg) && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button type="button" onClick={onClose} className="flex-1 border border-gray-200 text-gray-600 py-2.5 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                disabled={state === "submitting"}
                className="flex-1 bg-mtc-red text-white py-2.5 text-sm font-semibold rounded hover:bg-red-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state === "submitting" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <>Submit Application <ChevronRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center">
              By submitting, you consent to MTC Group processing your personal data for recruitment purposes.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}

// ── Main Careers Page ─────────────────────────────────────────────────────────
export default function Careers() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const { data: liveJobs, isLoading, isError } = useQuery<Job[]>({
    queryKey: ["public-jobs"],
    queryFn: async () => {
      const res = await fetch(`${STAFF_PORTAL_API}/api/public/jobs`);
      if (!res.ok) throw new Error("API unavailable");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const jobs: Job[] = (!isError && liveJobs && liveJobs.length > 0) ? liveJobs : FALLBACK_JOBS;
  const usingFallback = isError || !liveJobs || liveJobs.length === 0;

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department))).sort()];

  const filtered = jobs.filter((j) => {
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase()) || j.location.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === "All" || j.department === filterDept;
    return matchSearch && matchDept;
  });

  return (
    <Layout>
      <AnimatePresence>
        {activeJob && <ApplicationModal job={activeJob} onClose={() => setActiveJob(null)} />}
      </AnimatePresence>

      {/* Hero */}
      <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero4.jpg)" }}>
        <div className="absolute inset-0 bg-mtc-charcoal/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-mtc-red font-bold tracking-widest text-sm uppercase mb-4 block">Join Our Team</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">
              Build Your Career<br />at MTC Group
            </h1>
            <div className="h-1 w-24 bg-mtc-red mx-auto mb-8" />
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
                <div className="text-center p-8 bg-mtc-grey border-b-4 border-transparent hover:border-mtc-red transition-all">
                  <div className="w-14 h-14 bg-mtc-red rounded-full flex items-center justify-center text-white mx-auto mb-5">
                    <v.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-mtc-charcoal mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-mtc-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-mtc-red font-bold tracking-widest text-sm uppercase mb-3 block">Opportunities</span>
            <h2 className="text-4xl font-serif font-bold text-mtc-charcoal mb-3">Open Positions</h2>
            <div className="h-1 w-20 bg-mtc-red mb-4" />
            <p className="text-gray-600 text-sm">
              {isLoading ? "Loading current openings..." : `${filtered.length} position${filtered.length !== 1 ? "s" : ""} available${usingFallback ? "" : " — updated in real time"}`}
            </p>
          </ScrollReveal>

          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, department, or location..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-mtc-red/20 focus:border-mtc-red"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={filterDept} onChange={(e) => setFilterDept(e.target.value)}
                className="pl-9 pr-8 py-2.5 border border-gray-200 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-mtc-red/20 focus:border-mtc-red appearance-none cursor-pointer"
              >
                {departments.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              {[1,2,3].map((i) => (
                <div key={i} className="bg-white p-7 shadow-sm animate-pulse h-24 rounded" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white p-12 text-center rounded shadow-sm">
              <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No positions match your search. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 40}>
                  <div className="bg-white p-7 shadow-sm hover:shadow-lg transition-all group border-l-4 border-transparent hover:border-mtc-red rounded-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`text-xs px-3 py-1 font-bold uppercase tracking-wide rounded-full ${LEVEL_COLOURS[job.level] ?? "bg-gray-100 text-gray-600"}`}>
                            {job.level}
                          </span>
                          <span className="text-xs text-mtc-red font-semibold uppercase tracking-widest">{job.department}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-mtc-charcoal group-hover:text-mtc-red transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">{job.description}</p>
                        <div className="flex items-center gap-6 mt-2 text-gray-500 text-sm flex-wrap">
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-mtc-red" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-mtc-red" />{job.type}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-mtc-red" />{job.department}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveJob(job)}
                        className="bg-mtc-red text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-red-800 transition-colors flex items-center gap-2 whitespace-nowrap rounded-sm"
                      >
                        Apply Now <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Speculative CTA */}
      <section className="py-20 bg-mtc-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-5">Don't See Your Role?</h2>
          <p className="text-white/70 font-light mb-8 text-lg">
            MTC Group is always looking for exceptional talent. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <button
            onClick={() => setActiveJob({ id: -99, title: "Speculative Application", department: "General", location: "Global", type: "Full-time", level: "Mid-level", description: "Open application for future opportunities at MTC Group.", requirements: null, status: "published", publishedAt: null })}
            className="bg-mtc-red text-white font-bold px-10 py-4 uppercase tracking-wide hover:bg-red-800 transition-colors"
          >
            Send Speculative Application
          </button>
        </div>
      </section>
    </Layout>
  );
}