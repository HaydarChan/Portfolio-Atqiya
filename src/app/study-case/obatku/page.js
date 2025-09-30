'use client'
import { ArrowLeft, Heart, Target, Lightbulb, Smartphone, FileText, Calendar, Pill, AlertTriangle, Brain, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function StudyCaseObatku() {
    const router = useRouter()
    
    const designThinkingStages = [
        { name: 'Empathize', icon: Heart, color: 'bg-gray-300', active: false },
        { name: 'Define', icon: Target, color: 'bg-gray-300', active: false },
        { name: 'Ideate', icon: Lightbulb, color: 'bg-gray-300', active: false },
        { name: 'Prototype', icon: Smartphone, color: 'bg-gray-300', active: false },
        { name: 'Testing', icon: FileText, color: 'bg-blue-500', active: true },
    ];

    const interviewFindings = [
        {
            icon: Calendar,
            text: "Medication schedule management still relies on manual alarms and help from others",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Users,
            text: "Medication reminders depend on spouse, not self or independent system",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: AlertTriangle,
            text: "Don't understand risks of drug interactions or consequences of missing doses",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Brain,
            text: "Choose medications based on past experience and habits, not professional advice",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Clock,
            text: "Don't check expiration dates regularly, only when needed",
            color: "bg-blue-50 border-blue-200"
        }
    ];

    const affinityCategories = [
        {
            title: "Medication Management",
            color: "bg-blue-500",
            items: [
                "External reminder systems are very helpful",
                "Need special alarms as reminders",
                "Need simple activities to help with consistency"
            ]
        },
        {
            title: "Self-Medication",
            color: "bg-pink-500",
            items: [
                "Fear is more dominant than medical considerations",
                "No valid sources available",
                "Decisions based on habits rather than medical knowledge"
            ]
        },
        {
            title: "Medication Stock Management",
            color: "bg-purple-500",
            items: [
                "No classification system",
                "No regular checking → risk of running out",
                "Risk of consuming expired medications",
                "Positive response to potential digital solutions"
            ]
        },
        {
            title: "Technology Usage",
            color: "bg-orange-500",
            items: [
                "Basic reminder functions could be main app features",
                "Can help with education"
            ]
        },
        {
            title: "Drug Interaction Awareness",
            color: "bg-teal-500",
            items: [
                "No clear understanding system",
                "Low literacy level"
            ]
        },
        {
            title: "Healthy Living Habits",
            color: "bg-red-500",
            items: [
                "No recording habits",
                "Low motivation is the main barrier"
            ]
        }
    ];

    const statistics = [
        { percentage: "46%", description: "Don't consult doctors for minor illnesses", source: "BPS, 2021" },
        { percentage: "84.23%", description: "People practice self-medication", source: "BPS, 2021" },
        { percentage: "37.42%", description: "Have insufficient knowledge about medications", source: "Yulianti, 2023" }
    ];

    const userJourneyStages = [
        {
            stage: "Awareness of Symptoms",
            action: "Recognize symptoms",
            tasks: ["Feel sick symptoms", "Decide to self-medicate"],
            painPoints: "Don't know which medication is appropriate",
            emotions: "Uncomfortable, want to recover quickly",
            opportunities: "Clear symptom guidance to help self-medication decisions"
        },
        {
            stage: "Searching for Medication Info",
            action: "Search for medication information",
            tasks: ["Search for appropriate medication through internet, medication packaging, or past experience", "Read usage instructions and side effects"],
            painPoints: "Too much unclear information",
            emotions: "Trusting, but not very confident",
            opportunities: "Medication recommendations based on symptoms"
        },
        {
            stage: "Checking Medication Stock",
            action: "Check medication stock",
            tasks: ["Check medication storage at home"],
            painPoints: "Don't know when medication stock runs out",
            emotions: "Calm if stock available, frustrated if out of stock",
            opportunities: "Medication stock recording system for easier checking"
        },
        {
            stage: "Consuming Medication",
            action: "Consume medication",
            tasks: ["Follow usage instructions on packaging", "Record medication consumption time"],
            painPoints: "Afraid of wrong consumption",
            emotions: "Relieved, slightly worried about side effects",
            opportunities: "Medication consumption reminders to avoid missing doses"
        },
        {
            stage: "Evaluating Medication Effects",
            action: "Evaluate medication effects",
            tasks: ["Wait for medication to take effect", "Evaluate whether condition improves or needs doctor consultation"],
            painPoints: "Not sure whether to continue consuming or see doctor",
            emotions: "Satisfied if improving, anxious if no change",
            opportunities: "Notifications for when to seek help if symptoms don't improve"
        }
    ];

    const problemStatements = [
        {
            number: 1,
            text: "Difficulty managing medication consumption schedule consistently",
            highlight: ["managing", "consistently"]
        },
        {
            number: 2,
            text: "Don't know important information about medications"
        },
        {
            number: 3,
            text: "Risk of running out of medication without realizing it often occurs",
            highlight: ["running out of medication"]
        }
    ];

    const goalStatements = [
        {
            text: "Regular, Safe, and Informed Medication Consumption",
            highlight: ["Regular", "Safe", "Informed"]
        },
        {
            text: "Improve self-medication quality by helping users consume medications correctly, safely, and without disruption",
            highlight: ["self-medication quality", "without disruption"]
        },
        {
            text: "Provide ease in managing information, schedules, and medication stock automatically and integrated",
            highlight: ["ease", "automatically and integrated"]
        },
        {
            text: "Measure effectiveness through analysis of consumption compliance and user medication management efficiency",
            highlight: ["management efficiency"]
        }
    ];

    const competitors = [
        { name: "Obatku", logo: "💊", color: "bg-blue-500", isMain: true },
        { name: "MyTherapy", logo: "💊", color: "bg-red-500" },
        { name: "Medisafe", logo: "🟢", color: "bg-green-500" },
        { name: "Drugs.com", logo: "🌈", color: "bg-purple-500" },
        { name: "MediStock", logo: "📦", color: "bg-blue-600" },
        { name: "Halodoc", logo: "🩺", color: "bg-red-600" }
    ];

    const features = [
        "Medication Reminder",
        "Medication Stock Management", 
        "Medication Scheduling",
        "Medication Expiration",
        "Medication Side Effects",
        "Disease Search",
        "Medication Search"
    ];

    const competitorFeatures = {
        "Obatku": [true, true, true, true, true, true, true],
        "MyTherapy": [true, false, true, false, false, false, true],
        "Medisafe": [true, false, true, false, true, false, true],
        "Drugs.com": [false, false, false, false, true, true, true],
        "MediStock": [false, true, false, true, false, false, false],
        "Halodoc": [true, false, true, false, true, true, true]
    };

    const featureMapping = [
        {
            feature: "Medication Reminder",
            icon: "⏰",
            description: "Automatic reminders to consume medication according to schedule",
            userBenefit: "Helps users not forget to take medication, improves treatment compliance",
            businessBenefit: "Increases user retention as the app becomes part of daily routine"
        },
        {
            feature: "Medication Stock Management",
            icon: "✏️",
            description: "Feature to record and monitor the amount of medication users have",
            userBenefit: "Makes it easier for users to know available medication stock and when to buy more",
            businessBenefit: "Can be integrated with medication repurchasing, increasing transaction potential"
        },
        {
            feature: "Medication Scheduling",
            icon: "📋",
            description: "Setting medication dose schedule based on time and frequency",
            userBenefit: "Gives users full control in setting medication consumption time",
            businessBenefit: "Increases engagement through features that are personalization and important"
        },
        {
            feature: "Medication Expiration",
            icon: "🔔",
            description: "Medication expiration reminders to avoid consuming unfit medications",
            userBenefit: "Prevents consuming expired medications that are risky for health",
            businessBenefit: "Encourages users to buy new medications, creating monetization opportunities"
        },
        {
            feature: "Medication Side Effects",
            icon: "⚠️",
            description: "Information about potential side effects of certain medications",
            userBenefit: "Helps users be more aware of symptoms and risks that may occur",
            businessBenefit: "Increases user trust in the app as a reliable source of information"
        },
        {
            feature: "Disease Search",
            icon: "🤒",
            description: "Search for symptoms and possible related diseases independently",
            userBenefit: "Makes it easier for users to understand health conditions quickly",
            businessBenefit: "Attracts high traffic and expands user coverage with self-medication features"
        },
        {
            feature: "Medication Search",
            icon: "🔍",
            description: "Feature to search for medication names, uses, dosages, and prices",
            userBenefit: "Makes it easier for users to find medications that suit their needs",
            businessBenefit: "Can be linked to affiliate services or e-commerce for medication sales"
        }
    ];

    const howMightWeQuestions = [
        {
            question: "Create a fully automatic medication management system, so users don't need to remember or record manually?",
            highlight: ["automatic"],
            action: "Change the status quo"
        },
        {
            question: "Transform the \"troublesome\" experience of managing medications into something \"easy and enjoyable\" through more interactive UI/UX design?",
            highlight: ["easy and enjoyable"],
            action: "Remove the bad"
        },
        {
            question: "Eliminate the risk of users missing medication schedules with a system that automatically reminds them according to predetermined times?",
            highlight: ["reminds"],
            action: "Remove the bad"
        }
    ];

    const uxLaws = [
        {
            name: "Jakob's Law",
            description: "Using commonly recognized UI to avoid additional time for users to learn new interface workings.",
            icon: "⚖️",
            examples: [
                {
                    title: "Medication Reminder",
                    description: "Like task/event system in calendar apps",
                    features: ["Time 8:00 and 13:00", "Status 'Already Taken'", "Button 'Confirm Medication Taken'"]
                },
                {
                    title: "Chatbot",
                    description: "Resembles common LLM chatbot interface",
                    features: ["Header 'New Conversation'", "Greeting message 'Hello, John'", "Hamburger menu"]
                }
            ]
        },
        {
            name: "Progressive Disclosure",
            description: "Prioritizing presentation of information or advanced features gradually to help users focus on main information first.",
            icon: "📊",
            examples: [
                {
                    title: "Medication Details (Paracetamol)",
                    description: "Main information visible, details hidden",
                    features: ["Nearest expiration date", "Remaining Stock: 3 tablets", "Button 'View details >'"]
                },
                {
                    title: "Disease Information",
                    description: "Tab navigation for gradual information",
                    features: ["Tabs: Overview, Symptoms, Causes, Treatment", "Information summary", "Full details hidden"]
                }
            ]
        },
        {
            name: "Law of Proximity",
            description: "Grouping similar objects closer together so users can more easily understand and organize information.",
            icon: "📦",
            examples: [
                {
                    title: "Today's Schedule",
                    description: "Schedule cards group related information",
                    features: ["Time 13:00 WIB - Paracetamol", "Time 15:00 WIB - Antacid", "Each card contains complete info"]
                },
                {
                    title: "Medication Search",
                    description: "Search results grouped in cards",
                    features: ["Paracetamol (500 mg) - Fever, mild pain", "Cough Syrup (120 ml)", "Related information in one card"]
                }
            ]
        },
        {
            name: "Fitt's Law",
            description: "Enlarging buttons/targets and placing them close to user tasks to reduce error risk.",
            icon: "🎯",
            examples: [
                {
                    title: "Medication Quantity Adjustment",
                    description: "Large and easily accessible buttons",
                    features: ["Large '+' and '-' buttons", "'Save Changes' button in easily accessible area", "Touch-zone optimization"]
                },
                {
                    title: "Mobile Touch-zone",
                    description: "Finger reach area optimized",
                    features: ["Green: Comfortable (easy to reach)", "Yellow: Stretch (needs stretching)", "Red: Hard (difficult to reach)"]
                }
            ]
        }
    ];

    const testingResults = [
        {
            iteration: 1,
            sus: 78.75,
            seq: 5.8,
            nps: 100,
            susDescription: "SUS results show that the app is usable, but needs development",
            seqDescription: "SEQ results show that the app is quite easy to use, but can be developed",
            feedback: [
                "Success pop-up is confusing because it shows 'Successfully Took Medication' when just creating a schedule",
                "Pop-up back button cannot be clicked",
                "Users are slightly confused because the button is similar to the schedule page",
                "Addition of option to customize medication when adding medication to folder"
            ],
            generalFeedback: "The app is considered beneficial and has potential, but needs improvement in UI consistency, interaction flow, and information clarity to be more intuitive and efficient for daily use."
        },
        {
            iteration: 2,
            sus: 90,
            seq: 6,
            nps: 100,
            susDescription: "SUS results show that the app is already user-friendly and usable",
            seqDescription: "SEQ results show that the app is easy to use and intuitive",
            feedback: [
                "There is duplication of information in the causes and symptoms section, confusing users",
                "Users are not sure if the dosage information '500mg' means for personal consumption or just reference",
                "The 'Add Medication' button label is considered inappropriate for context; suggested to change to 'Add Schedule'",
                "Success screen says 'Successfully Took Medication' when the context is adding a schedule is confusing",
                "The 'Add Medication' button is too similar to the one on the Schedule page, making users confused about context",
                "The 'Add New Medication to Folder' action redirects to the initial Medication Stock page, not staying in the selected folder"
            ],
            generalFeedback: "Overall, users suggest improving wording and navigation to increase flow clarity, consistency between pages, and button context appropriateness, so the app feels more intuitive and user-friendly."
        },
        {
            iteration: 3,
            sus: 92.5,
            seq: 6.1,
            nps: 100,
            susDescription: "SUS results show that the app is already user-friendly and usable",
            seqDescription: "SEQ results show that the app is easy to use and intuitive",
            feedback: [
                "For medications that need to be taken more than once a day, users expect addition of frequency information",
                "Time labels should be more specific to avoid confusion",
                "Users hope there are automatic notifications when medication stock is running low, especially for regularly consumed medications",
                "Medications consumed periodically should have special markers, such as different labels or colors to distinguish priority levels"
            ],
            generalFeedback: "Obatku has strong potential in helping daily medication management, but needs improvement in visual design, wording, interaction flow, and feature personalization to be more intuitive, attractive, and relevant for active users."
        }
    ];

    const iterations = [
        {
            iteration: 1,
            page: "Medication Stock Page",
            problem: "Medication options are not customizable, can only add those available in Database",
            solution: "Addition of option to add medication from users",
            change: "'Create New Medication' button added next to search bar"
        },
        {
            iteration: 2,
            page: "Schedule Page",
            problem: "'Add Medication' button is still ambiguous",
            solution: "Change to 'Add Schedule' to be clearer",
            change: "Button label changed from 'Add Medication +' to '+ Add Schedule'"
        },
        {
            iteration: 2,
            page: "Search Page",
            problem: "Less clear about medication variant information",
            solution: "Addition of Medication Variant Explanation",
            change: "'Paracetamol Variants' header added above medication variant list"
        },
        {
            iteration: 3,
            page: "Schedule Page",
            problem: "No information if medication can be taken more than once a day",
            solution: "Addition of Tooltip",
            change: "Tooltip 'You can select more than one medication time' added"
        },
        {
            iteration: 3,
            page: "Schedule Page",
            problem: "No option to enter regular medication",
            solution: "Addition of option to add regular medication",
            change: "'Create as Regular Medication' checkbox added"
        },
        {
            iteration: 3,
            page: "Schedule Page",
            problem: "No information about medication consumption duration",
            solution: "Addition of medication consumption duration",
            change: "'Start date' and 'End date' information added"
        },
        {
            iteration: 3,
            page: "Medication Stock Page",
            problem: "Monotonous icons, no markers distinguishing medication types",
            solution: "Replacement of icon colors for each medication type",
            change: "Medication icons given different colors according to type (green for vitamins, orange for cough medicine)"
        },
        {
            iteration: 3,
            page: "Medication Stock Page",
            problem: "No notification if medication is running low/out",
            solution: "Addition of notification if medication is out and running low",
            change: "'Stock Running Low' label with orange color added for medications that are almost out"
        }
    ];
    
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Back Button */}
             <motion.button
                onClick={() => router.push('/')}
                className="fixed top-8 left-8 flex items-center gap-x-3 transition-all font-medium px-6 py-3 cursor-pointer bg-white border border-gray-200 text-gray-700 text-sm z-10 hover:bg-gray-50"
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
            >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
            </motion.button>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Pill className="w-10 h-10 text-gray-600" />
                            </div>
                            <h1 className="text-7xl font-caveat text-gray-900 mb-4">Obatku</h1>
                            <p className="text-xl text-gray-600 mb-2">A UX Case Study</p>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                How we helped students manage their medication better through thoughtful design
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Our Design Journey</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Following the Design Thinking methodology to create a solution that truly serves our users
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {designThinkingStages.map((stage, index) => (
                            <motion.div
                                key={stage.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                                    stage.active ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                <stage.icon className="w-4 h-4" />
                                <span>{stage.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Empathize Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Understanding the Problem</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We started by understanding who our users are and what challenges they face. 
                            Through interviews with 5 participants, we discovered the real struggles students 
                            face when managing their medication.
                        </p>
                    </motion.div>

                    {/* User Persona */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-600">B</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">Meet Bimo</h3>
                                    <p className="text-gray-600">Student, 20 years old</p>
                                </div>
                            </div>
                            
                            <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-gray-300 pl-6">
                                "I often forget to take medication because the schedule varies and I'm busy at campus. 
                                Usually take medication without prescription for minor illnesses, but don't understand the risks of mixing medications."
                            </blockquote>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Challenges</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Often forget to take medication due to busy schedule</li>
                                        <li>• No effective reminder system</li>
                                        <li>• Don't understand medication interaction risks</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Consistently take medication despite busy schedule</li>
                                        <li>• Get automatic reminders</li>
                                        <li>• Stay healthy despite busy schedule</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Insights from Research</h3>
                        <div className="space-y-4">
                            {interviewFindings.map((finding, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 border-l-2 border-gray-200"
                                >
                                    <finding.icon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">{finding.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">The Bigger Picture</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our research revealed that this isn't just Bimo's problem. The data shows a broader issue in Indonesia:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center p-6 border border-gray-200 rounded-lg"
                                >
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.percentage}</div>
                                    <p className="text-gray-600 mb-2">{stat.description}</p>
                                    <p className="text-sm text-gray-400">({stat.source})</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Define Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Defining the Challenge</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With our research insights, we mapped out the user journey and identified the core problems 
                            that needed solving. This helped us focus on what truly matters to our users.
                        </p>
                    </motion.div>

                    {/* User Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">The User Journey</h3>
                        <div className="space-y-6">
                            {userJourneyStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h4 className="text-xl font-semibold text-gray-900">{stage.stage}</h4>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{stage.action}</p>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Tasks</h5>
                                            <ul className="space-y-1 text-gray-600">
                                                {stage.tasks.map((task, taskIndex) => (
                                                    <li key={taskIndex}>• {task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-red-600 mb-2">Pain Points</h5>
                                            <p className="text-gray-600">{stage.painPoints}</p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-green-600 mb-2">Opportunities</h5>
                                            <p className="text-gray-600">{stage.opportunities}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Problem Statements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Core Problems</h3>
                        <div className="space-y-6">
                            {problemStatements.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {problem.number}
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {problem.highlight ? (
                                                problem.text.split(' ').map((word, wordIndex) => {
                                                    const cleanWord = word.replace(/[.,!?]/g, '');
                                                    const isHighlighted = problem.highlight.some(h => 
                                                        cleanWord.toLowerCase().includes(h.toLowerCase())
                                                    );
                                                    return (
                                                        <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                            {word}{' '}
                                                        </span>
                                                    );
                                                })
                                            ) : (
                                                problem.text
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Goal Statements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Our Goals</h3>
                        <div className="space-y-6">
                            {goalStatements.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {goal.highlight ? (
                                            goal.text.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = goal.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            goal.text
                                        )}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ideate Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Exploring Solutions</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With clear problems defined, we explored various solutions through competitor analysis, 
                            feature mapping, and creative ideation sessions to find the best approach.
                        </p>
                    </motion.div>

                    {/* Competitor Analysis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Competitive Landscape</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            We analyzed existing solutions to understand what works and identify opportunities for improvement.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 font-semibold text-gray-900">Features</th>
                                            {competitors.map((competitor, index) => (
                                                <th key={index} className="text-center py-3 font-semibold text-gray-900">
                                                    <div className="flex flex-col items-center gap-1">
                                                        {competitor.isMain && <span className="text-xs">👑</span>}
                                                        <span className="text-lg">{competitor.logo}</span>
                                                        <span className="text-xs">{competitor.name}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {features.map((feature, featureIndex) => (
                                            <tr key={featureIndex} className="border-b border-gray-100">
                                                <td className="py-3 font-medium text-gray-900">{feature}</td>
                                                {competitors.map((competitor, competitorIndex) => {
                                                    const hasFeature = competitorFeatures[competitor.name][featureIndex];
                                                    return (
                                                        <td key={competitorIndex} className="py-3 text-center">
                                                            {hasFeature ? (
                                                                <span className="text-green-600">✓</span>
                                                            ) : (
                                                                <span className="text-gray-300">✗</span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                <span className="font-semibold text-gray-900">Obatku</span> is the only app with all features compared
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Features</h3>
                        <div className="space-y-6">
                            {featureMapping.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.feature}</h4>
                                            <p className="text-gray-600 mb-4">{feature.description}</p>
                                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-1">User Benefit</h5>
                                                    <p className="text-gray-600">{feature.userBenefit}</p>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-1">Business Benefit</h5>
                                                    <p className="text-gray-600">{feature.businessBenefit}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* How Might We Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">How Might We?</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            These questions guided our ideation process and helped us think creatively about solutions.
                        </p>
                        
                        <div className="space-y-6">
                            {howMightWeQuestions.map((hmw, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                        {hmw.highlight ? (
                                            hmw.question.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = hmw.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            hmw.question
                                        )}
                                    </p>
                                    <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        {hmw.action}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prototype Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Building the Solution</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With our research insights and feature planning complete, we designed a prototype that 
                            follows proven UX principles and addresses our users' core needs.
                        </p>
                    </motion.div>

                    {/* Interactive Prototype */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Prototype</h3>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Experience the complete user journey through our interactive prototype
                            </p>
                            <motion.a
                                href="https://www.figma.com/proto/w5u4Z5mWb0twh3YytkLq5t/ObatKu---UX-Design?page-id=103%3A15366&node-id=287-7767&p=f&viewport=-295%2C59%2C0.07&t=5JFENNVytrZz5y7z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=287%3A7697&show-proto-sidebar=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15.852 8.981h-4.588v-1.25c0-.412.335-.75.75-.75h3.088c.415 0 .75.338.75.75v1.25zm0 0v1.25c0 .412-.335.75-.75.75h-3.838c-.415 0-.75-.338-.75-.75V8.981zm-4.588-1.25v1.25c0 .412-.335.75-.75.75H6.676c-.415 0-.75-.338-.75-.75V7.731c0-.412.335-.75.75-.75h3.838c.415 0 .75.338.75.75zm0 0V6.481c0-.412-.335-.75-.75-.75H6.676c-.415 0-.75.338-.75.75v1.25c0 .412.335.75.75.75h3.838c.415 0 .75-.338.75-.75zm8.5-1.5c0-.828-.672-1.5-1.5-1.5H5.176c-.828 0-1.5.672-1.5 1.5v11.5c0 .828.672 1.5 1.5 1.5h13.088c.828 0 1.5-.672 1.5-1.5V6.231zm-1.5 10H5.176c-.276 0-.5-.224-.5-.5V6.731c0-.276.224-.5.5-.5h13.088c.276 0 .5.224.5.5v9.5c0 .276-.224.5-.5.5z"/>
                                </svg>
                                View Prototype
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Design Principles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Design Principles</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our design follows established UX laws to ensure intuitive and effective user experiences.
                        </p>
                        
                        <div className="space-y-8">
                            {uxLaws.map((law, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{law.icon}</span>
                                        <h4 className="text-xl font-semibold text-gray-900">{law.name}</h4>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {law.description}
                                    </p>
                                    
                                    <div className="space-y-4">
                                        {law.examples.map((example, exampleIndex) => (
                                            <div key={exampleIndex} className="bg-gray-50 p-4 rounded-lg">
                                                <h5 className="font-semibold text-gray-900 mb-2">{example.title}</h5>
                                                <p className="text-sm text-gray-600 mb-3">{example.description}</p>
                                                <ul className="space-y-1">
                                                    {example.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                                            <span className="text-gray-400 mt-1">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Core Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Core Features</h3>
                        <p className="text-lg text-gray-600 mb-12">
                            Three key features that address our users' main pain points
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Medication Reminders</h4>
                                <p className="text-gray-600">
                                    Automated reminders with confirmation tracking to ensure consistent medication intake
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Pill className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Stock Management</h4>
                                <p className="text-gray-600">
                                    Track medication inventory and get notifications when supplies are running low
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">AI Health Assistant</h4>
                                <p className="text-gray-600">
                                    Get reliable health information and medication guidance through our AI chatbot
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testing Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Testing & Iteration</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We tested our solution with real users through three iterations, measuring usability 
                            and gathering feedback to continuously improve the experience.
                        </p>
                    </motion.div>

                    {/* Testing Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Usability Testing</h3>
                            <div className="inline-block bg-white p-6 rounded-lg border border-gray-200">
                                <span className="text-5xl font-bold text-gray-900">3</span>
                                <p className="text-lg text-gray-600 mt-2">Iterations</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testing Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Testing Results</h3>
                        
                        <div className="space-y-12">
                            {testingResults.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-2xl font-semibold text-gray-900">Iteration {result.iteration}</h4>
                                        <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                                            <span className="text-lg font-semibold">NPS {result.nps}%</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        {/* SUS Score */}
                                        <div className="text-center">
                                            <div className="relative w-24 h-24 mx-auto mb-4">
                                                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="6"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#374151"
                                                        strokeWidth="6"
                                                        fill="none"
                                                        strokeDasharray={`${(result.sus / 100) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xl font-bold text-gray-900">{result.sus}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">SUS Score</h5>
                                            <p className="text-sm text-gray-600">{result.susDescription}</p>
                                        </div>

                                        {/* SEQ Score */}
                                        <div className="text-center">
                                            <div className="relative w-24 h-24 mx-auto mb-4">
                                                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="6"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#374151"
                                                        strokeWidth="6"
                                                        fill="none"
                                                        strokeDasharray={`${(result.seq / 7) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xl font-bold text-gray-900">{result.seq}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">SEQ Score</h5>
                                            <p className="text-sm text-gray-600">{result.seqDescription}</p>
                                        </div>
                                    </div>

                                    {/* Feedback */}
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Feedback:</h5>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {result.feedback.map((item, feedbackIndex) => (
                                                <div key={feedbackIndex} className="bg-gray-50 p-4 rounded-lg">
                                                    <p className="text-sm text-gray-700">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* General Feedback */}
                                    <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r-lg">
                                        <p className="text-gray-700 font-medium">{result.generalFeedback}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Iterations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Improvements</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Based on user feedback, we made several important improvements across different iterations.
                        </p>
                        
                        <div className="space-y-6">
                            {iterations.map((iteration, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {iteration.iteration}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">{iteration.page}</h4>
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                                                    Iteration {iteration.iteration}
                                                </span>
                                            </div>
                                            
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-red-50 border-l-4 border-red-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-red-800 mb-1">Problem</h5>
                                                    <p className="text-sm text-red-700">{iteration.problem}</p>
                                                </div>
                                                
                                                <div className="bg-green-50 border-l-4 border-green-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-green-800 mb-1">Solution</h5>
                                                    <p className="text-sm text-green-700">{iteration.solution}</p>
                                                </div>
                                                
                                                <div className="bg-gray-50 border-l-4 border-gray-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-gray-800 mb-1">Change</h5>
                                                    <p className="text-sm text-gray-700">{iteration.change}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Final Results</h3>
                        
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">92.5</div>
                                    <p className="text-lg text-gray-600">SUS Score</p>
                                    <p className="text-sm text-gray-500">Excellent</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">6.1</div>
                                    <p className="text-lg text-gray-600">SEQ Score</p>
                                    <p className="text-sm text-gray-500">Very Easy</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                                    <p className="text-lg text-gray-600">NPS Score</p>
                                    <p className="text-sm text-gray-500">Promoters</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <p className="text-lg text-gray-700">
                                    Obatku achieved excellent usability with a SUS score of 92.5, 
                                    demonstrating that the app is highly user-friendly and effective.
                                </p>
                            </div>
                        </div>
                    </motion.div>
            </div>
            </section>
        </div>
    )
}
