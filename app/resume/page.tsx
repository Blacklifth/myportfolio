"use client";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";

const tabMenu = [
    { title: "Experience", value: "experience", icon: Briefcase },
    { title: "Education", value: "education", icon: GraduationCap },
    { title: "Skills", value: "skills", icon: Code2 },
    { title: "About me", value: "about", icon: User },
];

const tabContent = {
    experience: {
        title: "Professional Experience",
        items: [
            {
                role: "Technical Support IT",
                company: "Escuela Roquer",
                period: "2023 - Present",
                description:
                    "Provided maintenance and support for internal systems, ensuring operational continuity. Redesigned the institutional website (escuelaroquer.com) and automated email processes. Managed the Kimche educational platform, resolving technical issues and administrating user permissions. Delivered technical support for hardware, networks, and digital tools.",
                highlights: [
                    "Node.js",
                    "Express.js",
                    "HTML",
                    "CSS",
                    "Kimche platform management",
                    "Technical troubleshooting",
                    "Web development",
                    "System administration",
                ],
            },
            {
                role: "Freelance Web Developer",
                company: "Hemmo Peonetas Chile",
                period: "2023",
                description:
                    "Developed a responsive landing page optimized for SEO and mobile devices. Enhanced the company's digital presence through user-centered design and advanced SEO techniques. Website: peonetaschile.com.",
                highlights: [
                    "SEO optimization",
                    "Responsive design",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "User experience design",
                ],
            },
            {
                role: "Thesis Project Developer",
                company: "Universidad Andrés Bello",
                period: "March 2023 - October 2023",
                description:
                    "Designed and developed an attendance management WebApp using Next.js, Tailwind CSS, NextAuth, and MongoDB. Implemented secure authentication, user management, and CRUD functionalities. Applied Agile methodologies such as Scrum for project planning and tracking. Created documentation, use cases, and process modeling with BPMN using Bizagi.",
                highlights: [
                    "Next.js",
                    "Tailwind CSS",
                    "NextAuth",
                    "MongoDB",
                    "BPMN modeling",
                    "Bizagi",
                    "Agile methodologies",
                    "Authentication systems",
                    "Documentation creation",
                ],
            },
            {
                role: "Junior Front-End Developer",
                company: "Tesseract Softwares",
                period: "October 2021 - March 2022",
                description:
                    "Learned React to develop a landing page from design to API integration. Designed responsive interfaces using Bootstrap and Styled Components. Participated in Agile workflows using Scrum and Azure Boards. Conducted unit testing in React and collaborated with the design team to implement key application features. Utilized Azure DevOps for version control and backlog management.",
                highlights: [
                    "React.js",
                    "Bootstrap",
                    "Styled Components",
                    "Azure Boards",
                    "Scrum methodology",
                    "Unit testing",
                    "API integration",
                    "Azure DevOps",
                ],
            },
        ],
    },
    education: {
        title: "Educational Background",
        items: [
            {
                degree: "Civil Informatics Engineer",
                institution: "Universidad Andrés Bello",
                period: "2018 - 2024",
                description:
                    "Civil Informatics Engineer. Graduated with a strong foundation in computer science and informatics engineering, focusing on process optimization, software development, and database management.",
                achievements: [
                    "Process management using BPM BPMN and Bizagi",
                    "Proficiency in Agile methodologies, including Scrum and Agile design thinking",
                    "Database design and management using SQL and NoSQL systems",
                    "Development of secure web applications with modern technologies such as Next.js and MongoDB",
                ],
            },
        ],
    },
    skills: {
        title: "Technical Skills",
        categories: [
            {
                name: "Frontend Development",
                description:
                    "Proficient in creating responsive and user-centric interfaces using modern frameworks and libraries for seamless user experiences.",
                skills: [
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Bootstrap",
                    "HTML",
                    "CSS",
                    "Styled Components",
                    "JavaScript",
                ],
            },
            {
                name: "Backend Development",
                description:
                    "Experienced in building robust server-side applications, managing APIs, and working with secure authentication systems.",
                skills: [
                    "Node.js",
                    "Express.js",
                    "NextAuth",
                    "REST API Development",
                ],
            },
            {
                name: "Database Management",
                description:
                    "Skilled in designing, implementing, and managing both relational and non-relational databases.",
                skills: ["SQL", "MongoDB", "Database Design"],
            },
            {
                name: "Process Management",
                description:
                    "Expertise in modeling and improving business processes using industry-standard tools and methodologies.",
                skills: ["BPMN", "Bizagi", "Process Improvement"],
            },
            {
                name: "Version Control and Collaboration",
                description:
                    "Proficient in version control systems and collaboration tools to streamline development workflows.",
                skills: ["Git", "Azure Boards", "Jira", "Azure DevOps"],
            },
            {
                name: "Agile Methodologies",
                description:
                    "Experienced in Agile frameworks to efficiently manage and deliver projects.",
                skills: ["Scrum", "Scrum++", "Agile Design Thinking"],
            },
            {
                name: "Infrastructure and Automation",
                description:
                    "Familiar with infrastructure management and scripting for automating processes and tasks.",
                skills: [
                    "Linux Administration",
                    "DNS Configuration",
                    "Virtualization (VMbox)",
                    "Bash",
                    "Python (Basic)",
                ],
            },
            {
                name: "SEO Optimization",
                description:
                    "Skilled in optimizing websites for search engines to improve visibility and user engagement.",
                skills: [
                    "SEO Best Practices",
                    "Responsive Design",
                    "User-Centered Design",
                ],
            },
        ],
    },
    about: {
        title: "About Me",
        bio: "I am Marcelo Loyola, a Civil Informatics Engineer passionate about creating impactful digital solutions through innovative web development and process optimization. With a proven track record in technical support, responsive design, and database management, I combine technical expertise with a proactive mindset to deliver high-quality results. Whether developing seamless user experiences, automating workflows, or managing digital platforms, I am committed to driving continuous improvement and exceeding expectations. Let's build the future together!",
        interests: [
            "Web Development",
            "Process Management",
            "SEO Optimization",
            "Agile Methodologies",
            "Business Process Modeling",
            "Martial Arts",
            "Technology Trends",
        ],
        languages: ["English (Intermediate-Advanced)", "Spanish (Native)"],
    },
};

const ResumePage = () => {
    return (
        <div className="flex flex-col justify-center py-10 ">
            <PageLayout>
                <Tabs
                    defaultValue="experience"
                    className="w-full flex flex-col md:flex-row gap-6 md:gap-10 p-5"
                >
                    <TabsList className="flex flex-col h-full bg-transparent md:w-64 gap-4">
                        {tabMenu?.map((item) => (
                            <TabsTrigger
                                key={item?.value}
                                value={item?.value}
                                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                            >
                                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                                    {item?.title}
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="flex-1 min-h-[400px]">
                        <TabsContent value="experience">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >
                                {tabContent?.experience.title}
                            </motion.h2>
                            <div className="space-y-6 ">
                                {tabContent?.experience.items.map(
                                    (item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={index}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="">
                                                    <h3 className="text-lg font-semibold">
                                                        {item?.role}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {item?.company}
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-muted-foreground">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    {item?.period}
                                                </div>
                                            </div>
                                            <p className="mb-4 text-white">
                                                {item?.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.highlights.map(
                                                    (highlight, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                        >
                                                            {highlight}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </TabsContent>
                        <TabsContent value="education">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >
                                {tabContent?.education.title}
                            </motion.h2>
                            <div className="space-y-6 ">
                                {tabContent?.education.items.map(
                                    (item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={index}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="">
                                                    <h3 className="text-lg font-semibold">
                                                        {item?.degree}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {item?.institution}
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-muted-foreground">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    {item?.period}
                                                </div>
                                            </div>
                                            <p className="mb-4 text-white">
                                                {item?.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.achievements.map(
                                                    (achievement, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                        >
                                                            {achievement}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </TabsContent>
                        <TabsContent value="skills">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >
                                {tabContent.skills.title}
                            </motion.h2>
                            <div className="space-y-6 ">
                                {tabContent?.skills.categories.map(
                                    (item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={index}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="">
                                                    <h3 className="text-lg font-semibold">
                                                        {item?.name}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {item?.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.skills.map(
                                                    (skill, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </TabsContent>
                        <TabsContent value="about">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >
                                {tabContent?.about.title}
                            </motion.h2>
                            <div className="space-y-6 ">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="border rounded-lg border-lightSky/20 p-6"
                                >
                                    <p className="text-white/90 mb-6 text-lg">
                                        {tabContent?.about.bio}
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Interests
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tabContent.about.interests.map(
                                                    (interest, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                        >
                                                            {interest}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Languages
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tabContent.about.languages.map(
                                                    (language, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                        >
                                                            {language}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </PageLayout>
        </div>
    );
};

export default ResumePage;
