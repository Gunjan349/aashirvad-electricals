import { ShieldCheck, UserRoundCheck, Rocket, Smile } from 'lucide-react';
import Photo1 from "../../assets/photo1.jpg"
import Photo2 from "../../assets/photo2.jpg"
import Photo3 from "../../assets/photo3.jpg"
import Photo4 from "../../assets/photo4.webp"
import Photo5 from "../../assets/photo5.jpeg"
import automation from '../../assets/automation.jpeg'
import installation from '../../assets/installation.jpeg'
import management from '../../assets/management.jpeg'
import repair from '../../assets/repair.jpeg'
import safety from '../../assets/safety.jpeg'
import testing from '../../assets/testing.jpeg'

export const navItems = [
    {
        label: "About Us", href: "/about-us",
    },
    {
        label: "Services", href: "/services",
    },
    {
        label: "Products", href: "#",
    },
    {
        label: "Certifications", href: "#",
    },
    {
        label: "Contact Us", href: "#",
    }
]


export const services = [
    {
        id: 1,
        service: "11KV & 33KV Power Distribution Solutions",
        img: Photo1
    },
    {
        id: 2,
        service: "Transformers & Substations",
        img: Photo2
    },
    {
        id: 3,
        service: "Switchgear & Protection Equipment",
        img: Photo3
    },
    {
        id: 4,
        service: "HT Cable Laying & Termination",
        img: Photo4
    },
    {
        id: 5,
        service: "AMC & Maintenance Services",
        img: Photo5
    }
]

export const features = [
    {
        id: 1,
        icon: <ShieldCheck />,
        feature: "Quality Assurance"
    },
    {
        id: 2,
        icon: <UserRoundCheck />,
        feature: "Experienced Team"
    },
    {
        id: 3,
        icon: <Rocket />,
        feature: "Turnkey Solutions"
    },
    {
        id: 4,
        icon: <Smile />,
        feature: "Customer Satisfaction"
    }
]

export const quickLinks = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/about-us",
        text: "About Us"
    },
    {
        href: "/services",
        text: "Services"
    },
    {
        href: "#",
        text: "Certifications"
    }
]


export const legalLinks = [
    {
        href: "#",
        text: "Privacy Policy"
    },
    {
        href: "#",
        text: "Return Policy"
    },
    {
        href: "#",
        text: "Terms & Conditions"
    }

]

export const ValuesList = [
    {
        value: "Quality: Delivering products and services that meet the highest standards."
    },
    {
        value: "Integrity: Conducting business with transparency and honesty."
    },
    {
        value: "Customer Focus: Understanding and fulfilling customer needs with dedication."
    },
    {
        value: "Innovation: Continuously evolving with the latest technologies and solutions."
    },
    {
        value: "Safety: Prioritizing safety in every project we undertake."
    }
]

export const IndustriesList = [{ industry: "~ Manufacturing and Industrial Plants" },

{ industry: "~ Commercial Complexes and Malls" },


{ industry: "~ Power Utilities and Substations" },
{ industry: "~ Government and Public Sector" },

{ industry: "~ Infrastructure Projects" },

]

export const serviceCategoies = [
    {
        heading: 'a. Electrical Installation Services',
        image: installation,
        description: 'Our comprehensive installation services cover everything from initial planning and design to on-site execution. We specialize in 11KV and 33KV systems, ensuring your projects are completed on time and within budget.',
        features: [
            { feature: "Custom Design: Tailored electrical designs to suit your facility's requirements." },
            { feature: 'Certified Technicians:Professional installation by licensed experts.' },
            { feature: 'Certified Technicians: Professional installation by licensed experts.' }
        ],
        subServices: [
            { subService: 'Power Distribution Systems: Design and installation of distribution networks.' },
            { subService: 'Switchgear Installation: Installation of circuit breakers, isolators, and relays.' },
            {
                subService: 'Transformer Installation: Step-up and step-down transformer setup.'
            }
        ],
        benefits: [
            { benefit: 'Reduced downtime and enhanced safety.' },
            { benefit: 'Efficient energy distribution and management.' },
            { benefit: 'Compliance with international standards.' }
        ]
    },
    {
        heading: 'b. Maintenance and Repair Services',
        image: repair,
        description: 'Preventive maintenance and timely repairs are crucial for uninterrupted operations. Our maintenance solutions are designed to extend the lifespan of your equipment and minimize downtime.',
        features: [
            { feature: '24/7 Support: Emergency repair services for critical issues.' },
            { feature: "Proactive Maintenance: Scheduled inspections to identify potential problems." },
            { feature: "Genuine Parts: Replacement with high-quality parts." }
        ],
        subServices: [
            { subService: "Regular Inspection and Testing: Voltage, current, and insulation testing." },
            { subService: "Fault Detection and Troubleshooting: Using advanced diagnostic tools." },
            { subService: "Cable Jointing and Termination: Secure and efficient connections." }
        ],
        benefits: [
            { benefit: "Enhanced operational safety and efficiency." },
            { benefit: "Minimization of unexpected breakdowns." },
            { benefit: "Cost savings through preventive measures." }
        ]
    },
    {
        heading: 'c. Testing and Commissioning',
        image: testing,
        description: 'Our testing and commissioning services ensure your electrical systems operate at peak efficiency and comply with regulatory standards.',
        features: [
            { feature: "Comprehensive Testing: Load, insulation, and protection testing." },
            { feature: 'Detailed Reports: Documentation of test results and compliance status.' },
            { feature: "Skilled Engineers: Certified professionals for precise execution." }
        ],
        subServices: [
            { subService: "Insulation Resistance Testing: Ensures system safety and longevity." },
            { subService: "Relay and Protection System Testing: Validates fault response mechanisms." },
            { subService: "Load Flow Analysis: Ensures balanced power distribution." }
        ],
        benefits: [
            { benefit: "Improved safety and reliability of electrical systems." },
            { benefit: "Assurance of compliance with industry standards." },
            { benefit: "Optimization of energy usage and performance." }
        ]
    },
    {
        heading: 'd. Energy Management Solutions',
        image: management,
        description: 'Optimize energy usage and reduce costs with our advanced energy management solutions. We provide comprehensive assessments and actionable strategies.',
        features: [
            { feature: "Real-time Monitoring: Track energy consumption efficiently." },
            { feature: 'Cost Reduction: Identify and eliminate energy wastage.' },
            { feature: "Sustainability: Promote eco-friendly energy practices." }
        ],
        subServices: [
            { subService: "Power Factor Correction: Enhance efficiency and reduce losses." },
            { subService: "Energy Audits: Comprehensive assessments to identify inefficiencies." },
            { subService: "Demand Response Solutions: Adapt energy use based on demand." }
        ],
        benefits: [
            { benefit: "Lower energy bills and improved efficiency." },
            { benefit: "Enhanced sustainability and compliance." },
            { benefit: "Better control over energy usage." }
        ]
    },
    {
        heading: 'e. Industrial Automation',
        image: automation,
        description: 'Transform your operations with our industrial automation solutions, integrating advanced control systems for seamless and efficient workflows.',
        features: [
            { feature: "Advanced Control Systems: PLC and SCADA integration." },
            { feature: 'Remote Monitoring: Control systems remotely with ease.' },
            { feature: "Customized Solutions: Tailored automation for various industries." }
        ],
        subServices: [
            { subService: "PLC and SCADA Systems: Automation and control for industrial processes." },
            { subService: "Motor Control Systems: Efficient start-stop control." },
            { subService: "Process Control and Instrumentation: Accurate monitoring and control." }
        ],
        benefits: [
            { benefit: "Reduced manual intervention and human error." },
            { benefit: "Increased productivity and efficiency." },
            { benefit: "Enhanced monitoring and control capabilities." }
        ]
    },
    {
        heading: 'f. Safety and Compliance Services',
        image: safety,
        description: 'Ensure compliance with safety standards and reduce risks with our specialized safety services.',
        features: [
            { feature: "Risk Assessment: Identify and mitigate potential hazards." },
            { feature: 'Compliance Audits: Ensure adherence to regulatory standards.' },
            { feature: "Training Programs: Educate staff on safety protocols." }
        ],
        subServices: [
            { subService: "Electrical Safety Audits: Evaluate safety compliance." },
            { subService: "Compliance Certification: Obtain necessary certifications." },
            { subService: "Arc Flash Analysis: Identify and mitigate arc flash risks." }
        ],
        benefits: [
            { benefit: "Improved workplace safety." },
            { benefit: "Reduced liability and regulatory risks." },
            { benefit: "Enhanced compliance and safety culture." }
        ]
    },
]

export const chooseUs = [
    {},
    {},
    {},
    {}
]