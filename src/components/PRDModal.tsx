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
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Product Overview</h3>
                    <p className="leading-relaxed text-slate-700">DisasterSOS is a web-based emergency response platform that connects people affected by disasters with nearby volunteers who can provide immediate help.</p>
                    <div className="mt-4">
                        <p className="font-semibold text-slate-800">The system focuses on:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 text-slate-700">
                            <li>Fast incident reporting</li>
                            <li>Local volunteer activation</li>
                            <li>Real-time coordination</li>
                            <li>Community-driven disaster response</li>
                        </ul>
                    </div>
                    <p className="mt-4 text-slate-700"><strong className="text-slate-900">Primary goal:</strong> Reduce response time during emergencies.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Product Objectives</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Enable victims to report disasters in under 60 seconds.</li>
                        <li>Notify nearby volunteers instantly.</li>
                        <li>Provide real-time status tracking.</li>
                        <li>Build a reliable volunteer response network.</li>
                        <li>Maintain clear audit and communication records.</li>
                    </ul>
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-800 mb-3">Success metrics:</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full border border-green-200 font-medium whitespace-nowrap">Average response time</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200 font-medium whitespace-nowrap">Volunteer acceptance rate</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200 font-medium whitespace-nowrap">Incident resolution rate</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200 font-medium whitespace-nowrap">Active volunteer count</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full border border-pink-200 font-medium whitespace-nowrap">User satisfaction score</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Target Users</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-5 bg-red-50 border border-red-100 rounded-xl">
                            <h4 className="text-lg font-bold text-red-700 mb-2">Affected Individuals</h4>
                            <p className="text-sm text-slate-600 mb-4">People facing emergencies who need quick help.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Simple reporting</li>
                                <li>Fast assistance</li>
                                <li>Clear status updates</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
                            <h4 className="text-lg font-bold text-green-700 mb-2">Volunteers</h4>
                            <p className="text-sm text-slate-600 mb-4">Trained or willing helpers ready to respond.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Instant alerts</li>
                                <li>Location-based assignments</li>
                                <li>Clear task details</li>
                                <li>Status update tools</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl sm:col-span-2 md:col-span-1">
                            <h4 className="text-lg font-bold text-blue-700 mb-2">Admin</h4>
                            <p className="text-sm text-slate-600 mb-4">Platform operators who manage safety and operations.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Incident monitoring</li>
                                <li>Volunteer management</li>
                                <li>Content control</li>
                                <li>Analytics and logs</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Core Features</h3>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <h4 className="text-lg font-bold text-slate-800">🏠 Home Page</h4>
                                <p className="text-sm text-slate-600 mb-3">Purpose: introduce platform and drive action.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Sections:</p>
                                <div className="flex flex-wrap gap-2 text-xs mb-4">
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">Hero message</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">CTA buttons</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">How it works</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">Disaster types</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">Volunteer recruitment</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">Testimonials</span>
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">Footer resources</span>
                                </div>
                                <p className="text-sm text-slate-700 mt-2">Primary CTAs: <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded border border-slate-300">Get Started</span> <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded border border-slate-300">Become a Volunteer</span> <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded border border-slate-300">Create an Account</span> <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded border border-slate-300">Sign In</span></p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <h4 className="text-lg font-bold text-slate-800">🔐 Authentication</h4>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 mt-2">User Registration Fields:</p>
                                <ul className="list-disc pl-5 text-sm text-slate-700">
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Password</li>
                                    <li>Role selection (Victim/User or Volunteer)</li>
                                </ul>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 mt-3">Validation & Login:</p>
                                <ul className="list-disc pl-5 text-sm text-slate-700">
                                    <li>Email uniqueness, Password strength, Required fields</li>
                                    <li>Email and password</li>
                                    <li>Secure session handling & Role based redirect</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. Disaster Reporting Module</h3>
                    <div className="p-6 bg-orange-50/50 border border-orange-200 rounded-xl">
                        <p className="text-lg font-medium text-slate-800 mb-4">🎯 Goal: Allow users to report incidents quickly.</p>
                        <h4 className="font-bold text-orange-700 mb-4">Report Form Fields</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                            <div>
                                <span className="font-semibold text-slate-900">Type:</span> Flood, Fire, Earthquake, Hurricane, Other
                            </div>
                            <div>
                                <span className="font-semibold text-slate-900">Severity:</span> Low, Medium, High, Critical
                            </div>
                            <div>
                                <span className="font-semibold text-slate-900">Location:</span> Auto detect GPS, Manual entry
                            </div>
                            <div>
                                <span className="font-semibold text-slate-900">Details:</span> Description, Optional photo upload, Contact phone
                            </div>
                        </div>
                        <div className="mt-6 pt-5 border-t border-orange-200">
                            <h5 className="font-bold text-slate-800 mb-3">Submission Flow</h5>
                            <div className="flex flex-wrap items-center text-sm text-slate-700 gap-2 font-medium">
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded-full shadow-sm">User submits report</span>
                                <span>→</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded-full shadow-sm">System validates data</span>
                                <span>→</span>
                                <span className="text-yellow-700 font-semibold border border-yellow-300 bg-yellow-100 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">Incident: Pending</span>
                                <span>→</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded-full shadow-sm whitespace-nowrap">Nearby volunteers notified</span>
                                <span>→</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded-full shadow-sm whitespace-nowrap">Incident visible on admin dashboard</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">6. Volunteer Module</h3>
                    <div className="space-y-6">
                        <div className="p-5 bg-green-50/50 border border-green-200 rounded-xl content-wrapper">
                            <h4 className="text-lg font-bold text-green-700 mb-3">🧑‍🚒 Volunteer Registration</h4>
                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-slate-800">Additional Fields:</p>
                                    <ul className="list-disc pl-5 mt-1 text-slate-600">
                                        <li>Skills</li>
                                        <li>Availability</li>
                                        <li>Service radius</li>
                                        <li>Phone number</li>
                                        <li>ID verification upload</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">Status:</p>
                                    <ul className="list-disc pl-5 mt-1 text-slate-600">
                                        <li>Pending approval</li>
                                        <li>Approved</li>
                                        <li>Suspended</li>
                                    </ul>
                                    <p className="mt-2 italic text-slate-500">* Admin approval required before activation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                                <h4 className="text-lg font-bold text-slate-800 mb-3">🔔 Volunteer Alerts</h4>
                                <p className="text-sm text-slate-600 mb-2 font-medium">When a disaster is reported:</p>
                                <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1">
                                    <li>Location matching runs</li>
                                    <li>Eligible volunteers notified</li>
                                    <li>First-accept or multi-accept based on config</li>
                                </ol>
                                <p className="text-sm text-slate-700 mt-3"><span className="font-semibold">Channels:</span> In-app, Email, Push (future)</p>
                            </div>
                            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                                <h4 className="text-lg font-bold text-slate-800 mb-3">✅ Accept Incident</h4>
                                <p className="text-sm text-slate-600 mb-2 font-medium">Volunteer can:</p>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li>View incident details</li>
                                    <li>Accept or Decline request</li>
                                    <li>Mark as en route</li>
                                    <li>Mark as completed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">7. Incident Management</h3>
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-3">Status Lifecycle</h4>
                            <div className="flex flex-wrap items-center text-sm font-medium gap-2 text-slate-600">
                                <span className="bg-white border border-slate-300 px-3 py-1 rounded shadow-sm">Reported</span> <span>→</span>
                                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded shadow-sm">Assigned</span> <span>→</span>
                                <span className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded shadow-sm">En Route</span> <span>→</span>
                                <span className="bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded shadow-sm">In Progress</span> <span>→</span>
                                <span className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded shadow-sm">Resolved</span> <span>→</span>
                                <span className="bg-slate-200 text-slate-700 border border-slate-300 px-3 py-1 rounded shadow-sm">Closed</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-3 italic">* Admin can override any status.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-3">Real Time Updates</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white border border-slate-200 rounded min-h-[120px]">
                                    <p className="font-semibold text-slate-700 mb-2 border-b border-slate-100 pb-1">Victim sees:</p>
                                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                        <li>Volunteer assigned</li>
                                        <li>ETA (Estimated Time of Arrival)</li>
                                        <li>Status changes</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 rounded min-h-[120px]">
                                    <p className="font-semibold text-slate-700 mb-2 border-b border-slate-100 pb-1">Volunteer sees:</p>
                                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                        <li>Navigation info</li>
                                        <li>Task updates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">8. Map and Location System</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-2">Interactive map displays:</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Active disasters</li>
                                <li>Volunteer locations</li>
                                <li>Incident severity indicators</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-2">Map features & Future:</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Marker clustering</li>
                                <li>Severity color coding</li>
                                <li>Live refresh</li>
                                <li>Location search</li>
                            </ul>
                            <p className="text-sm text-slate-600 font-semibold mt-3">Future capabilities:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-600">
                                <li>Heatmaps</li>
                                <li>Route optimization</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">9. Disaster Types Supported</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center flex flex-col items-center">
                            <span className="text-3xl mb-2">🌊</span>
                            <h4 className="font-bold text-blue-800 mb-2 line-clamp-1">Flood</h4>
                            <ul className="text-xs text-left text-slate-600 space-y-1 px-2">
                                <li className="list-disc">Evacuation support</li>
                                <li className="list-disc">Temp shelter help</li>
                                <li className="list-disc">Clean water supply</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center flex flex-col items-center">
                            <span className="text-3xl mb-2">🔥</span>
                            <h4 className="font-bold text-orange-800 mb-2 line-clamp-1">Fire</h4>
                            <ul className="text-xs text-left text-slate-600 space-y-1 px-2">
                                <li className="list-disc">Wildfire response</li>
                                <li className="list-disc">Building fire evac</li>
                                <li className="list-disc">Emergency coord</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-center flex flex-col items-center">
                            <span className="text-3xl mb-2">🌍</span>
                            <h4 className="font-bold text-stone-800 mb-2 line-clamp-1">Earthquake</h4>
                            <ul className="text-xs text-left text-slate-600 space-y-1 px-2">
                                <li className="list-disc">Search and rescue</li>
                                <li className="list-disc">Medical help</li>
                                <li className="list-disc">Temporary shelter</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg text-center flex flex-col items-center">
                            <span className="text-3xl mb-2">🌀</span>
                            <h4 className="font-bold text-cyan-800 mb-2 line-clamp-1">Hurricane</h4>
                            <ul className="text-xs text-left text-slate-600 space-y-1 px-2">
                                <li className="list-disc">Pre storm prep</li>
                                <li className="list-disc">Evacuation help</li>
                                <li className="list-disc">Post storm clean</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 italic bg-white inline-block px-3 py-1 rounded border border-slate-200 shadow-sm">* System must allow adding new disaster types from admin panel.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">10. Community Impact Section</h3>
                    <p className="text-slate-700 font-semibold mb-3">Purpose: build trust.</p>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-600 mb-2">Content to display on site:</p>
                        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                            <li>User testimonials</li>
                            <li>Volunteer stories</li>
                            <li>Community leader feedback</li>
                        </ul>
                        <p className="mt-3 text-xs text-slate-500 font-medium">All content is strictly admin manageable.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">11. Admin Panel</h3>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 inline-flex items-center gap-2">🛠️ Admin Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                            <h5 className="font-bold text-slate-700 mb-2">User Management</h5>
                            <ul className="list-disc pl-5 text-sm text-slate-600"><li>View users</li><li>Approve volunteers</li><li>Suspend accounts</li><li>Reset passwords</li></ul>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                            <h5 className="font-bold text-slate-700 mb-2">Incident Management</h5>
                            <ul className="list-disc pl-5 text-sm text-slate-600"><li>View all reports</li><li>Override assignments</li><li>Update statuses</li><li>Priority tagging</li></ul>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                            <h5 className="font-bold text-slate-700 mb-2">Volunteer Monitoring</h5>
                            <ul className="list-disc pl-5 text-sm text-slate-600"><li>Active volunteers</li><li>Response times</li><li>Acceptance rates</li><li>Availability tracking</li></ul>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                            <h5 className="font-bold text-slate-700 mb-2">Content Management</h5>
                            <ul className="list-disc pl-5 text-sm text-slate-600"><li>Disaster types</li><li>Static pages</li><li>FAQ</li><li>Resources</li></ul>
                        </div>
                    </div>
                    <div className="mt-6 p-5 bg-indigo-50/50 rounded-xl border border-indigo-100">
                        <h5 className="font-bold text-indigo-900 mb-4">Analytics Dashboard & Audit Logs</h5>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h6 className="font-semibold text-indigo-800 text-sm mb-2">Metrics:</h6>
                                <ul className="list-disc pl-5 text-sm text-slate-700">
                                    <li>Active incidents</li>
                                    <li>Avg response time</li>
                                    <li>Volunteer coverage</li>
                                    <li>Resolution rate</li>
                                    <li>Geographic heatmap</li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="font-semibold text-indigo-800 text-sm mb-2">Audit Logs Track (Actor, Action, Entity, Timestamp, Metadata):</h6>
                                <ul className="list-disc pl-5 text-sm text-slate-700">
                                    <li>Admin actions</li>
                                    <li>Status changes</li>
                                    <li>Volunteer assignments</li>
                                    <li>Critical edits</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">12. Notifications System</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-3">Phase 1</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700">
                                <li>In-app notifications</li>
                                <li>Email alerts</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-3">Phase 2</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700">
                                <li>Push notifications</li>
                                <li>SMS for critical alerts</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">13. Non Functional Requirements</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Performance</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>Submit under 2 seconds</li>
                                <li>Notify under 5 seconds</li>
                                <li>Support 10k users</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Security</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>JWT based auth</li>
                                <li>RBAC control</li>
                                <li>Encrypted passwords</li>
                                <li>Secure file uploads</li>
                                <li>Rate limiting</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Reliability</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>99.9% uptime target</li>
                                <li>Graceful failure</li>
                                <li>Retry for notify</li>
                                <li>Backup strategy</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Scalability</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>Modular services</li>
                                <li>Horizontal scaling</li>
                                <li>CDN for statics</li>
                                <li>Queue based notify</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">14. Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Frontend</p>
                            <p className="font-semibold text-cyan-600">React<br />Tailwind CSS</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Backend</p>
                            <p className="font-semibold text-green-600">Node.js<br />Express</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Database</p>
                            <p className="font-semibold text-blue-600 text-lg">MySQL</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Infra</p>
                            <p className="font-semibold text-red-500 text-sm">Redis (queue)<br />Cloud Storage<br />Map API</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">15. Future Enhancements</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">Mobile apps</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">AI severity prediction</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">Auto volunteer routing</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">Multi language support</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">Government integration</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">Offline reporting mode</span>
                        <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">SOS one tap button</span>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">16. Risks and Considerations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                            <h4 className="font-bold text-red-800 mb-3">Potential Risks</h4>
                            <ul className="list-disc pl-5 text-sm text-red-900 space-y-1">
                                <li>False reports</li>
                                <li>Volunteer reliability</li>
                                <li>Location accuracy</li>
                                <li>High traffic during major disasters</li>
                                <li>Data privacy compliance</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                            <h4 className="font-bold text-green-800 mb-3">Mitigation Strategies</h4>
                            <ul className="list-disc pl-5 text-sm text-green-900 space-y-1">
                                <li>Report verification flow</li>
                                <li>Volunteer rating system</li>
                                <li>Rate limiting</li>
                                <li>Admin moderation tools</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">17. Launch Criteria</h3>
                    <p className="text-slate-700 font-semibold mb-3">Product is ready when:</p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li><strong className="text-slate-800">Core reporting works:</strong> Form submission, location parsing, severity assignment.</li>
                        <li><strong className="text-slate-800">Volunteer assignment works:</strong> Notifications dispatch and accept/decline features operate flawlessly.</li>
                        <li><strong className="text-slate-800">Real-time updates stable:</strong> Both victim and volunteer receive instant state changes.</li>
                        <li><strong className="text-slate-800">Admin controls functional:</strong> Ability to moderate incidents, manage volunteers, and track system health.</li>
                        <li><strong className="text-slate-800">Security checks passed:</strong> Penetration testing, data validation, protected endpoints.</li>
                    </ul>
                </section>
            </div>
        );
    } else if (projectTitle === "CodeWise – Smart Learning & Practice Platform") {
        prdSubtitle = "CodeWise — A Full-Stack Technical Interview Preparation Platform";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <div>
                    <p className="leading-relaxed text-slate-700 text-lg">After months of design, development, and iteration, I'm proud to present CodeWise — a comprehensive learning management platform built to bridge the gap between academic learning and real-world industry expectations for aspiring software engineers.</p>
                </div>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">The Problem I Set Out to Solve</h3>
                    <p className="leading-relaxed text-slate-700">Students preparing for technical placements often juggle scattered resources — random coding sites, unstructured notes, generic mock tests, and little visibility into what specific companies actually look for. CodeWise brings all of this into one structured, intelligent platform.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">What CodeWise Offers</h3>
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
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Built for Three Roles</h3>
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
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Tech Stack</h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
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
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Security & Architecture</h3>
                    <p className="leading-relaxed text-slate-700">The platform is built with production-grade security in mind — bcrypt password hashing, JWT-based stateless authentication, parameterized SQL queries to prevent injection, and role-based middleware enforcing strict access control across all routes.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">What I Learned Building This</h3>
                    <p className="leading-relaxed text-slate-700">Designing CodeWise was more than a coding exercise — it was a lesson in systems thinking. Building a multi-role RBAC system from scratch, integrating an AI assistant into a real-time coding workflow, and architecting a scalable content management pipeline challenged me to think beyond features and consider the full user experience at every layer.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">What's Next</h3>
                    <p className="leading-relaxed text-slate-700 mb-4">The roadmap includes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Real-time collaborative coding for peer-to-peer mock interviews</li>
                        <li>Predictive AI scoring for exam readiness</li>
                        <li>Gamification with badges and streaks</li>
                        <li>Migration of file storage to AWS S3 / Google Cloud Storage</li>
                    </ul>
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
