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
        prdSubtitle = "CodeWise – Secure Coding Environment & Exam Platform";
        prdContent = (
            <div className="prose prose-slate max-w-none space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Product Overview</h3>
                    <p className="leading-relaxed text-slate-700">CodeWise is a web-based coding practice and training platform. It helps students learn programming, practice problems, and take secure training exams inside a real IDE environment.</p>
                    <div className="mt-4">
                        <p className="font-semibold text-slate-800">The system focuses on:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2 text-slate-700">
                            <li>🎯 Structured coding practice</li>
                            <li>🧠 Real exam simulation</li>
                            <li>🤖 AI assisted learning</li>
                            <li>📊 Progress visibility</li>
                            <li>🔐 Role based content control</li>
                        </ul>
                    </div>
                    <p className="mt-4 text-slate-700"><strong className="text-slate-900">Primary goal:</strong> Help students improve problem solving and prepare for technical interviews and exams.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Product Objectives</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>🖥️ Provide a real IDE experience in the browser</li>
                        <li>⚡ Enable fast and reliable code execution</li>
                        <li>🛡️ Deliver secure training exams</li>
                        <li>📈 Track learner progress at topic level</li>
                        <li>🧩 Support scalable content management</li>
                    </ul>
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-800 mb-3">Success metrics:</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full border border-green-200 font-medium whitespace-nowrap">📅 Daily active users</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200 font-medium whitespace-nowrap">🧮 Avg problems solved/user</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200 font-medium whitespace-nowrap">📝 Exam completion rate</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200 font-medium whitespace-nowrap">⚙️ Code execution success</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full border border-pink-200 font-medium whitespace-nowrap">🔁 User retention (30 days)</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Target Users</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                            <h4 className="text-lg font-bold text-blue-700 mb-2">👨‍🎓 Students</h4>
                            <p className="text-sm text-slate-600 mb-4">People learning programming and preparing for placements.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Clean coding environment</li>
                                <li>Structured practice path</li>
                                <li>Instant feedback & tracking</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-purple-50 border border-purple-100 rounded-xl">
                            <h4 className="text-lg font-bold text-purple-700 mb-2">🧑‍💼 Content Managers</h4>
                            <p className="text-sm text-slate-600 mb-4">Users who create and manage questions and learning content.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Easy question creation</li>
                                <li>Hidden test case support</li>
                                <li>Topic organization</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-slate-100 border border-slate-200 rounded-xl">
                            <h4 className="text-lg font-bold text-slate-700 mb-2">🛠️ Admins</h4>
                            <p className="text-sm text-slate-600 mb-4">Platform operators monitoring system health and exams.</p>
                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Needs:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>Full system control</li>
                                <li>User moderation</li>
                                <li>Audit visibility & Analytics</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Core Product Modules</h3>
                    <div className="space-y-8">

                        {/* 4.1 Coding IDE */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="text-xl font-bold text-slate-800 mb-3">4.1 Coding IDE</h4>
                            <p className="text-sm text-slate-600 mb-4 font-medium">Purpose: Provide a professional coding experience directly in the browser.</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-semibold text-slate-700 mb-2">Key capabilities:</h5>
                                    <ul className="list-none space-y-1 text-sm text-slate-700">
                                        <li>🧠 Monaco editor integration</li>
                                        <li>🎨 Syntax highlighting & dark theme (🌙)</li>
                                        <li>🌐 Multi language support</li>
                                        <li>🪟 Split layout with resizable panes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-slate-700 mb-2">Execution & Console:</h5>
                                    <ul className="list-none space-y-1 text-sm text-slate-700">
                                        <li>🧪 C and C++ compilation</li>
                                        <li>🗄️ SQL execution with SQLite</li>
                                        <li>⏱️ Time/memory limits + custom input</li>
                                        <li>🔍 Output, Error, and Test results tabs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 4.2 Code Persistence */}
                            <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                                <h4 className="text-lg font-bold text-emerald-800 mb-2">4.2 Code Persistence & Autosave</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-3">
                                    <li>💾 <code className="bg-emerald-100 rounded px-1">code_drafts</code> table</li>
                                    <li>🔄 Debounced autosave</li>
                                    <li>🟢 Live save indicators & secure backend sync</li>
                                </ul>
                                <p className="text-xs font-semibold text-slate-500 uppercase">User States: Saving / Saved / Error</p>
                            </div>

                            {/* 4.3 Training Exam */}
                            <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                                <h4 className="text-lg font-bold text-red-800 mb-2">4.3 Training Exam Module</h4>
                                <p className="text-sm text-slate-600 mb-2">Simulate real exams with strict integrity controls.</p>
                                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                    <li>🔐 Password protected & locked viewport</li>
                                    <li>👁️ Tab switch, blur, and visibility tracking</li>
                                    <li>📤 Auto submit on violation</li>
                                    <li>🔒 Hidden backend test cases</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 4.4 Progress Tracking */}
                            <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
                                <h4 className="text-lg font-bold text-indigo-800 mb-2">4.4 Progress Tracking</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mb-3">
                                    <li>📌 Topic level completion & dependencies</li>
                                    <li>🧭 Visual breadcrumbs & 100% completion gating</li>
                                </ul>
                                <p className="text-xs text-slate-500 italic">Curriculum includes Functions, Pointers, Memory management, Exception handling, File handling, STL.</p>
                            </div>

                            {/* 4.5 AI Assistant */}
                            <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
                                <h4 className="text-lg font-bold text-amber-800 mb-2">4.5 AI Assistant</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                    <li>🧠 Context aware problem help</li>
                                    <li>📝 Markdown rendered responses</li>
                                    <li>🎯 Syntax highlighted responses</li>
                                    <li>📋 Copy code buttons</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. User Experience & Content Systems</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="p-5 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-slate-800 mb-3">UI/UX Interface</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li>✨ Glassmorphism UI & Light iOS style theme</li>
                                <li>🔄 Global transition loader & fixed layout gaps</li>
                                <li>📱 Responsive dashboard</li>
                                <li>🚀 Dynamic hero, Trusted companies grid</li>
                            </ul>
                        </div>
                        <div className="p-5 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-slate-800 mb-3">6. Content Management System</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li><strong className="text-slate-900">RBAC:</strong> Admin, Content Manager, Student.</li>
                                <li><strong className="text-slate-900">Question Bank:</strong> Add constraints, formatted statements, execution limits, hidden cases.</li>
                                <li><strong className="text-slate-900">Review Queue:</strong> Manager creates → Admin reviews → Publish/Reject.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">7. IT Systems & Non-Functional</h3>

                    <div className="space-y-4 mb-8">
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">Admin, Auditing & User Management</h4>
                            <p className="text-sm text-slate-700 mb-2"><strong className="text-slate-900">Capabilities:</strong> View users, suspend, delete, force JWT logout.</p>
                            <p className="text-sm text-slate-700"><strong className="text-slate-900">Audit Logs:</strong> Automatically records Actor, Action, Entity, Timestamp, and Metadata via backend middleware.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Performance</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>Code run under 3s</li>
                                <li>Autosave under 2s</li>
                                <li>10k concurrent users</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Security</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>JWT + RBAC</li>
                                <li>Sandboxed code execution</li>
                                <li>Hidden test protection</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Reliability</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>Graceful exec failures</li>
                                <li>Retry mechanisms</li>
                                <li>Persistent drafts</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Scalability</h4>
                            <ul className="space-y-1 text-sm text-slate-600 list-disc pl-5">
                                <li>Modular Node services</li>
                                <li>Queue based execution</li>
                                <li>Horizontal scalability</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">10. Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center flex flex-col items-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Frontend</p>
                            <p className="font-semibold text-cyan-600 text-sm">⚛️ React<br />🎨 Tailwind CSS<br />🧠 Monaco Editor</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center flex flex-col items-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Backend</p>
                            <p className="font-semibold text-green-600 text-sm">🟢 Node.js<br />🚂 Express</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center flex flex-col items-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Database</p>
                            <p className="font-semibold text-blue-600 text-sm">🐬 MySQL<br />🗄️ SQLite (Mem)</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center flex flex-col items-center">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Infra</p>
                            <p className="font-semibold text-red-500 text-sm">🧱 Isolated Workers<br />📨 Redis Queues<br />☁️ Cloud Storage</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">11. Roadmap, Risks & Launch Criteria</h3>
                    <div className="space-y-6">
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-slate-800 mb-3">🚀 Future Enhancements</h4>
                            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">🌐 More language support</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">🤖 AI code review</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">🕵️ Plagiarism detection</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">👥 Live collaborative coding</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">📱 Mobile app</span>
                                <span className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm">🏆 Contest & Interview mode</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                                <h4 className="font-bold text-orange-800 mb-3">⚠️ Risks</h4>
                                <ul className="list-disc pl-5 text-sm text-orange-900 space-y-1">
                                    <li>Code execution abuse & Cheating</li>
                                    <li>High compute load</li>
                                    <li>Draft data loss</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                                <h4 className="font-bold text-emerald-800 mb-3">🛡️ Mitigations</h4>
                                <ul className="list-disc pl-5 text-sm text-emerald-900 space-y-1">
                                    <li>Sandboxed runners & Anti-cheat tracking</li>
                                    <li>Execution quotas</li>
                                    <li>Autosave redundancy & Admin workflows</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-100 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-3">📍 Launch Criteria</h4>
                            <ul className="list-none text-sm text-slate-700 space-y-2">
                                <li>✅ Monaco editor stable across browsers</li>
                                <li>✅ Code execution reliable for supported languages</li>
                                <li>✅ Training exam security validated</li>
                                <li>✅ Autosave works without data loss</li>
                                <li>✅ RBAC fully enforced with Admin review functional</li>
                                <li>✅ Progress tracking accurate</li>
                            </ul>
                        </div>
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
