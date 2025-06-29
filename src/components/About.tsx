import React from 'react';
import { User, MapPin, Calendar, Coffee } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                I'm a passionate Full Stack Software Engineer with extensive experience in building
                                scalable web applications and robust backend systems. My journey in software development
                                has equipped me with a diverse skill set spanning modern frontend frameworks to enterprise-level
                                backend technologies.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                I specialize in creating seamless user experiences while ensuring optimal performance
                                and maintainability. Whether it's developing responsive web applications with React and Angular,
                                or architecting robust APIs with Spring Boot and Laravel, I'm committed to delivering
                                high-quality solutions that meet business objectives.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Currently Available For</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Full-time opportunities</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Freelance projects</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Consulting engagements</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <User className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800">Experience</h4>
                                        <p className="text-gray-600">5+ Years</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Coffee className="h-8 w-8 text-teal-600" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800">Projects</h4>
                                        <p className="text-gray-600">50+ Completed</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <MapPin className="h-8 w-8 text-orange-600" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800">Location</h4>
                                        <p className="text-gray-600">Remote/Global</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Calendar className="h-8 w-8 text-purple-600" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800">Availability</h4>
                                        <p className="text-gray-600">Immediate</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-600 italic">
                                    "Code is like humor. When you have to explain it, it's bad." - Cory House
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;