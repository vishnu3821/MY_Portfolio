import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import FileText from 'lucide-react/dist/esm/icons/file-text';

interface PRDPageProps {
    isOpen: boolean;
    projectTitle: string | null;
    onClose: () => void;
}

const PRDModal: React.FC<PRDPageProps> = ({ isOpen, projectTitle, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const modalContent = document.getElementById('prd-modal-content');
            if (modalContent) modalContent.scrollTop = 0;
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    let prdContent = null;
    let prdSubtitle = "";

    if (projectTitle === "Disaster Management System") {
        prdSubtitle = "DisasterSOS – Rapid Disaster Response Platform";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Executive Summary</h3>
                    <p className="leading-relaxed text-slate-700">DisasterSOS is a web-based emergency response platform that connects people affected by disasters with nearby volunteers who can provide immediate help. The primary goal is to reduce response time during emergencies by focusing on fast incident reporting, local volunteer activation, real-time coordination, and community-driven disaster response.</p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-800 mb-3">Key Objectives:</p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                            <li>Enable victims to report disasters in under 60 seconds.</li>
                            <li>Notify nearby volunteers instantly.</li>
                            <li>Provide real-time status tracking.</li>
                            <li>Build a reliable volunteer response network.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Target Users</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-red-50 border border-red-100 rounded-xl">
                            <h4 className="text-lg font-bold text-red-700 mb-2">Affected Individuals</h4>
                            <p className="text-sm text-slate-600 mb-4">People facing emergencies who need quick help.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs: Simple reporting, fast assistance, clear status.</p>
                        </div>
                        <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
                            <h4 className="text-lg font-bold text-green-700 mb-2">Volunteers</h4>
                            <p className="text-sm text-slate-600 mb-4">Trained or willing helpers ready to respond.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs: Instant alerts, location assignments, status tools.</p>
                        </div>
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                            <h4 className="text-lg font-bold text-blue-700 mb-2">Admin</h4>
                            <p className="text-sm text-slate-600 mb-4">Platform operators managing safety.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs: Incident monitoring, volunteer control, analytics.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Core Features & Modules</h3>
                    <div className="space-y-6">
                        <div className="bg-orange-50/50 p-5 rounded-xl border border-orange-200">
                            <h4 className="font-bold text-orange-700 mb-2">Disaster Reporting & Incident Management</h4>
                            <p className="text-sm text-slate-700 mb-2">Fast reporting via form (Type, Severity, Location via GPS, Details). Tracks incident lifecycle (Reported → Assigned → En Route → In Progress → Resolved) with real-time updates for victims and volunteers.</p>
                        </div>
                        <div className="bg-green-50/50 p-5 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-700 mb-2">Volunteer Module</h4>
                            <p className="text-sm text-slate-700 mb-2">Volunteer registration with skills and service radius, requiring admin approval. Alerts are dispatched to eligible volunteers based on location matching, allowing them to accept/decline and mark en-route.</p>
                        </div>
                        <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-2">Map & Location System</h4>
                            <p className="text-sm text-slate-700 mb-2">Interactive map displaying active disasters, volunteer locations, and severity color coding with live refresh.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">Admin Panel</h4>
                            <p className="text-sm text-slate-700">Comprehensive controls for User Management, Incident Monitoring, Analytics Dashboard, and full Audit Logs for all actions.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Technical Architecture</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Frontend</p>
                            <p className="font-semibold text-cyan-600">React, Tailwind CSS</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Backend</p>
                            <p className="font-semibold text-green-600">Node.js, Express</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Database</p>
                            <p className="font-semibold text-blue-600 text-lg">MySQL</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Infra</p>
                            <p className="font-semibold text-red-500 text-sm">Redis, Maps API</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Non-Functional Requirements</h4>
                        <ul className="space-y-1 text-sm text-slate-700 list-disc pl-5">
                            <li><strong>Performance:</strong> Submit reports &lt; 2s, notifications &lt; 5s, supports 10k users.</li>
                            <li><strong>Security:</strong> JWT auth, RBAC, Encrypted passwords, Rate limiting.</li>
                            <li><strong>Reliability:</strong> 99.9% uptime, graceful failures, backup strategy.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. Additional Project Context</h3>
                    
                    <h4 className="font-bold text-slate-800 mt-6 mb-3">Disaster Types Supported</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-700 mb-6">
                        <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg">🌊 Flood</span>
                        <span className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-lg">🔥 Fire</span>
                        <span className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-lg">🌍 Earthquake</span>
                        <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-lg">🌀 Hurricane</span>
                    </div>

                    <h4 className="font-bold text-slate-800 mb-3">Risks & Mitigations</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-6">
                        <li><strong>False Reports:</strong> Mitigated via report verification flow and rate limiting.</li>
                        <li><strong>Volunteer Reliability:</strong> Addressed via a volunteer rating system.</li>
                        <li><strong>High Traffic:</strong> Modular services and horizontal scaling.</li>
                    </ul>

                    <h4 className="font-bold text-slate-800 mb-3">Launch Criteria</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-6">
                        <li>Core reporting and location parsing functional.</li>
                        <li>Real-time updates stable for victims/volunteers.</li>
                        <li>Admin controls fully operational with security checks passed.</li>
                    </ul>

                    <h4 className="font-bold text-slate-800 mb-3">Future Enhancements</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-slate-100 rounded-md">Mobile apps</span>
                        <span className="px-2 py-1 bg-slate-100 rounded-md">AI severity prediction</span>
                        <span className="px-2 py-1 bg-slate-100 rounded-md">Auto volunteer routing</span>
                        <span className="px-2 py-1 bg-slate-100 rounded-md">Offline reporting mode</span>
                    </div>
                </section>
            </div>
        );
    } else if (projectTitle === "CodeWise – Smart Learning & Practice Platform") {
        prdSubtitle = "CodeWise — A Full-Stack Technical Interview Preparation Platform";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Executive Summary</h3>
                    <p className="leading-relaxed text-slate-700">CodeWise is a comprehensive learning management platform built to bridge the gap between academic learning and real-world industry expectations for aspiring software engineers.</p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-800 mb-2">The Problem</p>
                        <p className="text-sm text-slate-700">Students preparing for technical placements often juggle scattered resources — random coding sites, unstructured notes, generic mock tests, and little visibility into what specific companies actually look for. CodeWise brings all of this into one structured, intelligent platform.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Target Users</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                            <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">👨‍🎓 Students</h4>
                            <p className="text-sm text-slate-700">A personalized dashboard tracking progress, recent activity, and recommended topics.</p>
                        </div>
                        <div className="p-5 bg-purple-50 border border-purple-100 rounded-xl">
                            <h4 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">✍️ Content Managers</h4>
                            <p className="text-sm text-slate-700">A full CMS to create languages, topics, questions, exams, notes, and company modules with rich text support and activity tracking.</p>
                        </div>
                        <div className="p-5 bg-slate-100 border border-slate-200 rounded-xl">
                            <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">🛡️ Administrators</h4>
                            <p className="text-sm text-slate-700">A global dashboard with audit logs, content review workflows, user management, and platform-wide analytics.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Core Features & Modules</h3>
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">🎯 Structured Language Practice</h4>
                            <p className="text-sm text-slate-700">A hierarchical learning path — Language → Topic → Subtopic → Coding Questions — powered by an integrated Monaco Editor with live code execution and test case validation.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">📄 Smart Study Notes</h4>
                            <p className="text-sm text-slate-700">Curated PDF study materials accessible directly within the platform via an interactive viewer, so students never leave their workflow.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">🏢 Company-Specific Preparation Modules</h4>
                            <p className="text-sm text-slate-700">Detailed company profiles covering hiring processes, technical rounds, HR questions, aptitude sections, and insider preparation strategies — tailored to real placement interviews.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">⏱️ Timed Training Exams</h4>
                            <p className="text-sm text-slate-700">Realistic mock assessments that simulate actual technical tests, complete with post-exam performance summaries and detailed analytics.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">🤖 AI Coding Assistant</h4>
                            <p className="text-sm text-slate-700">Integrated Google Gemini AI helps students debug code, understand concepts, and receive contextual hints without ever leaving the platform.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Technical Architecture</h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-sm text-left text-slate-600">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-100 border-b border-slate-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-bold border-r border-slate-200 w-1/4">Layer</th>
                                    <th scope="col" className="px-6 py-4 font-bold">Technology</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">Frontend</td>
                                    <td className="px-6 py-4">React 19, React Router v7, Tailwind, Monaco Editor, React PDF</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">Backend</td>
                                    <td className="px-6 py-4">Node.js, Express.js</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">Database</td>
                                    <td className="px-6 py-4">MySQL</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">Auth</td>
                                    <td className="px-6 py-4">JWT, Google OAuth, bcrypt</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">AI</td>
                                    <td className="px-6 py-4">Google Gemini API</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800 border-r border-slate-200">Files</td>
                                    <td className="px-6 py-4">Multer (PDFs & images)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Security & Architecture</h4>
                        <p className="text-sm text-slate-700">The platform is built with production-grade security in mind — bcrypt password hashing, JWT-based stateless authentication, parameterized SQL queries to prevent injection, and role-based middleware enforcing strict access control across all routes.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. Additional Project Context</h3>
                    
                    <h4 className="font-bold text-slate-800 mt-6 mb-3">What I Learned Building This</h4>
                    <p className="leading-relaxed text-sm text-slate-700 mb-6">Designing CodeWise was more than a coding exercise — it was a lesson in systems thinking. Building a multi-role RBAC system from scratch, integrating an AI assistant into a real-time coding workflow, and architecting a scalable content management pipeline challenged me to think beyond features and consider the full user experience at every layer.</p>

                    <h4 className="font-bold text-slate-800 mb-3">What's Next</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700 mb-6">
                        <li>Real-time collaborative coding for peer-to-peer mock interviews</li>
                        <li>Predictive AI scoring for exam readiness</li>
                        <li>Gamification with badges and streaks</li>
                        <li>Migration of file storage to AWS S3 / Google Cloud Storage</li>
                    </ul>
                </section>
            </div>
        );
    } else if (projectTitle === "Expense Monitor") {
        prdSubtitle = "Expense Monitor — Personal Finance Command Center";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Executive Summary</h3>
                    <p className="leading-relaxed text-slate-700"><strong>Expense Monitor</strong> is a personal finance command center designed for daily use on mobile devices. It helps individuals track every rupee they spend, manage their bank savings across multiple accounts, log educational fee receipts, and receive automated daily financial summaries — all inside a beautifully designed, offline-capable Progressive Web App.</p>
                    <p className="mt-4 text-slate-700"><strong>Core Philosophy:</strong> Every feature must be immediately useful, data must be real (no fake placeholders), and the UI must feel premium and responsive on a phone.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Target Users</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Individual users (primary: students and working professionals in India)</li>
                        <li>Uses UPI for most payments</li>
                        <li>Wants to understand spending patterns without using a spreadsheet</li>
                        <li>Manages savings across 1-3 bank accounts</li>
                        <li>May pay educational/hostel fees periodically and needs to keep receipts</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Core Features & Modules</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">📊 Command Center Dashboard</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Real-time financial metrics (Today, Monthly, Annual)</li>
                                <li>Interactive Month-view Expense Calendar (Heatmap styling)</li>
                                <li>Doughnut chart for category breakdown</li>
                                <li>Recent transactions feed</li>
                            </ul>
                        </div>
                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                            <h4 className="text-lg font-bold text-emerald-800 mb-2">📸 Smart Add Expense + OCR</h4>
                            <ul className="list-disc pl-5 text-sm text-emerald-900 space-y-1">
                                <li>Full logging (Name, Amount, Category, Payment Mode, etc.)</li>
                                <li>Tesseract.js OCR auto-extracts Transaction IDs from receipts</li>
                                <li>PWA Share Target: directly share UPI screenshots to the app</li>
                                <li>"Elite Pro" multi-step submission animation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                            <h4 className="text-lg font-bold text-blue-800 mb-2">🏦 Savings Vault</h4>
                            <ul className="list-disc pl-5 text-sm text-blue-900 space-y-1">
                                <li>Manage balances across 1-3 bank accounts</li>
                                <li>3D Tilt effect premium bank cards</li>
                                <li>Transfer money between accounts with a Digital Ticket receipt</li>
                                <li>"Liquid Wealth" visual distribution bar</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                            <h4 className="text-lg font-bold text-purple-800 mb-2">🎓 Educational Fees Tracker</h4>
                            <ul className="list-disc pl-5 text-sm text-purple-900 space-y-1">
                                <li>4-level hierarchy (Year → Semester → Folder → Records)</li>
                                <li>Attach and OCR receipt images</li>
                                <li>Export to PDF or Excel</li>
                                <li>Audit mode for quick review</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4 className="font-bold text-slate-800 mt-6 mb-3">Advanced Capabilities</h4>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-slate-100 p-2 rounded-lg mt-1 shrink-0">📱</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Progressive Web App (PWA)</h4>
                                <p className="text-sm text-slate-700">Installable on iOS/Android, works offline via Workbox service worker caching, and uses the Share Target API to accept images natively.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-slate-100 p-2 rounded-lg mt-1 shrink-0">🔔</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Automated Push Notifications</h4>
                                <p className="text-sm text-slate-700">Vercel Cron jobs trigger daily financial summaries and monthly reports sent directly to devices via Firebase Cloud Messaging.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-slate-100 p-2 rounded-lg mt-1 shrink-0">🛡️</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Admin Controls & Security</h4>
                                <p className="text-sm text-slate-700">Supabase Row Level Security (RLS), biometric-style login animations, and a secure Admin Dashboard for broadcasting email announcements.</p>
                            </div>
                        </div>
                    </div>
                    
                    <h4 className="font-bold text-slate-800 mt-6 mb-3">UI / UX Highlights</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                        <li><strong>Dark Mode Support:</strong> Fully integrated light/dark themes with deep Slate 950 backgrounds for true dark mode.</li>
                        <li><strong>Micro-Interactions:</strong> Receipt pop animations, money flow particles, pulse rings, and scanning laser lines.</li>
                        <li><strong>Glassmorphism:</strong> Extensive use of backdrop blurs and semi-transparent layers for a premium app feel.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Technical Architecture</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Frontend Stack</h4>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">React 19</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">Vite 8</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">Tailwind CSS v4</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">React Router v7</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">Recharts</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">Tesseract.js (OCR)</span>
                                <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg font-medium text-slate-700">idb-keyval (PWA Share)</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Backend & Database</h4>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg font-medium">Supabase (PostgreSQL, Auth, Storage)</span>
                                <span className="px-3 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-lg font-medium">Firebase (Push Notifications)</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg font-medium">Vercel (Hosting & Serverless Functions)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else if (projectTitle === "RISE Placement Prep Platform") {
        prdSubtitle = "RISE — Enterprise-grade Placement Preparation Platform";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Executive Summary</h3>
                    <p className="leading-relaxed text-slate-700"><strong>RISE</strong> is a comprehensive, enterprise-grade Placement Preparation Platform designed to bridge the gap between students and corporate expectations. The platform provides end-to-end preparation tools, including strictly proctored mock tests, an AI-driven voice mock interview system, previous year question banks, and a structured learning hub. It is split into two primary interfaces: the <strong>Student Portal</strong> for learning and assessment, and the <strong>Enterprise Admin Suite</strong> for content management, user administration, and analytics.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Target Users</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                            <h4 className="text-lg font-bold text-blue-800 mb-2">👨‍🎓 Students</h4>
                            <p className="text-sm text-slate-700">Primary users who access the Student Portal for learning, practicing mock tests, and AI voice mock interviews.</p>
                        </div>
                        <div className="p-5 bg-purple-50 border border-purple-100 rounded-xl">
                            <h4 className="text-lg font-bold text-purple-800 mb-2">🛡️ Admins</h4>
                            <p className="text-sm text-slate-700">Manage mock tests, question banks, AI rubrics, and monitor student performance via the Enterprise Admin Suite.</p>
                        </div>
                        <div className="p-5 bg-slate-100 border border-slate-200 rounded-xl">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">👑 Super Admins</h4>
                            <p className="text-sm text-slate-700">Platform owners with global oversight, access to system settings, and the ability to bypass maintenance mode.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Core Features & Modules</h3>
                    
                    <h4 className="font-bold text-slate-800 mb-4">Student Portal Features</h4>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">Student Dashboard & Learning</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Overview metrics, recent activity resume links, and in-app notifications.</li>
                                <li><strong>PYQ:</strong> Company-wise filtering and built-in PDF/Document viewer.</li>
                                <li><strong>Learning Hub:</strong> Structured learning paths, progress tracking, and embedded video player.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">Proctored Mock Test Engine</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Tab switching detection, full-screen enforcement, webcam snapshotting, and AI face detection.</li>
                                <li>Timer countdown, section-wise navigation, and built-in basic calculator overlay.</li>
                                <li>Detailed post-test scorecard and analytics.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 sm:col-span-2">
                            <h4 className="font-bold text-slate-800 mb-2">AI Mock Interviews (Voice-Enabled)</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Global Practice Modules or specific Companies → Interview Rounds.</li>
                                <li>Conversational AI utilizing Speech-to-Text (STT) and Text-to-Speech (TTS).</li>
                                <li>Real-time feedback and grading against predefined rubrics.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 className="font-bold text-slate-800 mb-4">Admin Portal Features</h4>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
                        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                            <li><strong>System Overview & Users:</strong> Live metrics dashboard, student and admin management with isolated session handling.</li>
                            <li><strong>Communications Center:</strong> In-app notification broadcaster and Resend API email broadcasts.</li>
                            <li><strong>Content Management:</strong> Upload PYQ PDFs with metadata tagging, and a Course Builder for the Learning Hub.</li>
                            <li><strong>Assessment Config:</strong> Configure mock tests, build sections/questions, set marking rules, and review proctoring logs.</li>
                            <li><strong>AI Mock Interviews Admin:</strong> Manage Companies, Rounds, Global Modules, and Question Banks with ideal answers/rubrics.</li>
                            <li><strong>System Controls:</strong> Feedback inbox and Maintenance mode toggle with dynamic messaging.</li>
                        </ul>
                    </div>
                    
                    <h4 className="font-bold text-slate-800 mb-4">Global System Settings</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">UI / UX & Theming</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700">
                                <li><strong>Dynamic Theming:</strong> Global Light/Dark mode toggle applied across all components.</li>
                                <li><strong>Responsive Design:</strong> Mobile-first Tailwind CSS implementation.</li>
                                <li><strong>Cinematic Landing Page:</strong> Features a hero section, animated journey timeline, mock interview interactive preview, floating statistics, and testimonials.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">Maintenance Mode</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700">
                                <li><strong>Maintenance Lockout:</strong> Global route guard that intercepts traffic when Maintenance Mode is active.</li>
                                <li><strong>Bypass for Super Admins:</strong> super_admin roles bypass the maintenance lock.</li>
                                <li><strong>Dynamic Under Construction Page:</strong> Highly animated maintenance page utilizing WebGL shaders (aurora/particles).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Technical Architecture</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                            <p className="text-xs font-bold text-slate-500 uppercase">Frontend</p>
                            <p className="text-sm font-semibold text-slate-800">React (Vite)<br/>Tailwind CSS</p>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                            <p className="text-xs font-bold text-slate-500 uppercase">Backend</p>
                            <p className="text-sm font-semibold text-slate-800">Supabase<br/>(PostgreSQL)</p>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                            <p className="text-xs font-bold text-slate-500 uppercase">AI & Integrations</p>
                            <p className="text-sm font-semibold text-slate-800">OpenAI / Gemini<br/>Resend (Emails)</p>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-lg text-center">
                            <p className="text-xs font-bold text-slate-500 uppercase">State & Routing</p>
                            <p className="text-sm font-semibold text-slate-800">React Context<br/>React Router DOM</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Authentication & Authorization</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-700">
                            <li><strong>Role-Based Access Control (RBAC):</strong> Three distinct roles: student, admin, and super_admin.</li>
                            <li><strong>Session Management:</strong> Secure Supabase authentication with JWT tokens and automatic session persistence.</li>
                            <li><strong>Role-based Redirection:</strong> Users are automatically routed to /dashboard or /admin upon login.</li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }

    const modalContentContainer = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[2147483647] bg-white text-slate-900 overflow-y-auto block"
                    id="prd-modal-content"
                >
                    <div className="w-full bg-slate-50 sticky top-0 z-[2147483647] border-b border-slate-200 shadow-sm flex items-center px-4 sm:px-8 py-3 justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">Product Requirements Document</h2>
                                <p className="text-sm text-slate-500 font-medium">{prdSubtitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="p-3 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 hover:shadow-md rounded-full transition-all flex items-center gap-2 shrink-0 border border-slate-300 ml-4 group"
                            aria-label="Back / Close"
                            title="Close PRD"
                        >
                            <span className="hidden sm:inline font-semibold text-sm group-hover:text-slate-900">Back</span>
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="w-full max-w-4xl mx-auto px-4 py-12 sm:px-8">
                        {prdContent}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContentContainer, document.body);
};

export default PRDModal;
