import React from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';
import type { Skill } from '../types';

/**
 * Skills Component
 * 
 * Displays my technical skills organized by categories with visual progress bars.
 * Each skill has a proficiency level (0-100%) and is grouped into frontend, backend,
 * database, and tools categories. The component uses a responsive grid layout and
 * includes smooth animations for the progress bars.
 */
const Skills: React.FC = () => {
    // Define all my technical skills with proficiency levels and categories
    // Levels are subjective assessments of my comfort and experience with each technology
    const skills: Skill[] = [
        // Frontend technologies - my strongest area
        { name: 'React', level: 80, category: 'frontend' },
        { name: 'Angular', level: 70, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 90, category: 'frontend' },
        { name: 'HTML/CSS', level: 90, category: 'frontend' },
        { name: 'Tailwind CSS', level: 60, category: 'frontend' },

        // Backend frameworks and languages
        { name: 'Spring Boot', level: 80, category: 'backend' },
        { name: 'Laravel', level: 70, category: 'backend' },
        { name: 'Node.js', level: 50, category: 'backend' },
        { name: 'Python', level: 50, category: 'backend' },
        { name: 'Java', level: 60, category: 'backend' },
        { name: 'PHP', level: 80, category: 'backend' },

        // Database technologies I work with
        { name: 'MySQL', level: 90, category: 'database' },
        { name: 'PostgreSQL', level: 85, category: 'database' },
        { name: 'MongoDB', level: 80, category: 'database' },
        { name: 'Redis', level: 40, category: 'database' },

        // DevOps and development tools
        { name: 'Git', level: 95, category: 'tools' },
        { name: 'Docker', level: 75, category: 'tools' },
        { name: 'Kubernetes', level: 25, category: 'tools' },
        { name: 'AWS', level: 20, category: 'tools' },
        { name: 'Linux', level: 40, category: 'tools' },
    ];

    // Define the four main skill categories with their display properties
    // Each category has an icon, title, and color scheme for consistent theming
    const categories = [
        { key: 'frontend', title: 'Frontend Development', icon: Code, color: 'blue' },
        { key: 'backend', title: 'Backend Development', icon: Server, color: 'teal' },
        { key: 'database', title: 'Database Management', icon: Database, color: 'orange' },
        { key: 'tools', title: 'Tools & DevOps', icon: Wrench, color: 'purple' },
    ];

    /**
     * Returns the appropriate Tailwind CSS classes for category styling
     * Creates a consistent color scheme for each category's icon and border
     */
    const getColorClasses = (color: string) => {
        const colors = {
            blue: 'bg-blue-100 text-blue-600 border-blue-500',
            teal: 'bg-teal-100 text-teal-600 border-teal-500',
            orange: 'bg-orange-100 text-orange-600 border-orange-500',
            purple: 'bg-purple-100 text-purple-600 border-purple-500',
        };
        return colors[color as keyof typeof colors];
    };

    /**
     * Returns the progress bar color for each category
     * Matches the category's theme color for visual consistency
     */
    const getProgressColor = (color: string) => {
        const colors = {
            blue: 'bg-blue-500',
            teal: 'bg-teal-500',
            orange: 'bg-orange-500',
            purple: 'bg-purple-500',
        };
        return colors[color as keyof typeof colors];
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section header with title and description */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            Skills & Technologies
                        </h2>
                        {/* Decorative gradient line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A comprehensive toolkit for building modern, scalable applications
                        </p>
                    </div>

                    {/* Skills grid - responsive layout that adapts to screen size */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category) => {
                            // Filter skills for this specific category
                            const categorySkills = skills.filter(skill => skill.category === category.key);
                            const IconComponent = category.icon;

                            return (
                                <div key={category.key} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    {/* Category header with icon and title */}
                                    <div className="text-center mb-6">
                                        <div className={`inline-flex p-3 rounded-lg ${getColorClasses(category.color)} border-2`}>
                                            <IconComponent className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mt-4">{category.title}</h3>
                                    </div>

                                    {/* Skills list with progress bars */}
                                    <div className="space-y-4">
                                        {categorySkills.map((skill) => (
                                            <div key={skill.name} className="space-y-2">
                                                {/* Skill name and percentage */}
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium text-slate-700">{skill.name}</span>
                                                    <span className="text-sm text-gray-500">{skill.level}%</span>
                                                </div>
                                                {/* Animated progress bar */}
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(category.color)}`}
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Call-to-action section emphasizing continuous learning */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Always Learning</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring
                                cloud architecture patterns, AI/ML integration, and advanced microservices design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;