"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Github, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"

const projectCategories = {
  "data-science": {
    title: "Data Science & Machine Learning",
    description: "",
    projects: [
      {
        id: "clustering-algorithms",
        title: "Comparative Analysis of Clustering Algorithms for Song Lyrics Clustering",
        description:
          "Compared K-Means, Agglomerative, and DBSCAN for clustering 7,315 song lyrics scraped from Genius.com. Used text preprocessing and Word2Vec for feature extraction. Evaluated with silhouette scores and word clouds; K-Means and Agglomerative performed best.",
        image: "/images/projects/datmin.png",
        tags: ["Python", "Machine Learning", "NLP", "Data Analysis"],
        github: "https://github.com/nano141004/datmin-project",
        demo: ""
      },
      {
        id: "face-recognition",
        title: "Person Detection and Face Recognition, with Crowd Detection",
        description:
          "Built a system to detect people, recognize faces, and measure crowd density from video. Used YOLO for person detection, YuNet + FaceNet for face recognition. Improved accuracy through dataset cleaning, preprocessing, and augmentation.",
        image: "/images/projects/robotika.png",
        tags: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
        github: "https://github.com/narendradzulqarnain/robot-uas",
        demo: ""
      },
      {
        id: "subscription-prediction",
        title: "Deposit Product Subscription Prediction – Competition by Data Science Indonesia (DSI) 2025",
        description:
          "Built a model to predict customer subscription to deposit products. Used EDA, feature engineering, and trained various models including stacking. Achieved 0.7897 AUC, close to top 3 scores (0.794 - 0.798).",
        image: "/images/projects/dsi.png",
        tags: ["Python", "Machine Learning", "Feature Engineering", "Ensemble Methods"],
        github: "",
        demo: "https://drive.google.com/drive/folders/1ijoLOKxOuNPch-YVB1YttUWgNZs3q0Qc?usp=sharing",
      },
      {
        id: "citation-network",
        title: "Paper Citation Network Prediction – Competition by Gammafest IPB 2025",
        description:
          "Predicted citation links between academic papers in a team of three. Preprocessed text and extracted features using TF-IDF and metadata. Trained binary classifiers and achieved an MCC score of 0.437.",
        image: "/images/projects/gammafest.png",
        tags: ["Python", "Graph ML", "NLP", "Network Analysis"],
        github: "",
        demo: "https://drive.google.com/drive/folders/1vkYKnLGMseN3dcdhfWoVkSPYjVx5U2zd?usp=sharing"
      },
      {
        id: "commodity-price",
        title: "Commodity Price Prediction – Competition by Datavidia 9 ITB 2025",
        description:
          "Worked in a team of three to forecast commodity prices across Indonesian provinces. Conducted time series analysis and used models like ARIMA and VAR, achieving an MAPE score of 0.0525.",
        image: "/images/projects/datavidia.png",
        tags: ["Python", "Teamwork", "Problem Solving", "Critical Thinking"],
        github: "",
        demo: "https://drive.google.com/drive/folders/1NrFc1tuxqQg2ueCVVP9W_qYugsC1uFWu?usp=sharing"
      },
    ],
  },
  "software-development": {
    title: "Software Development",
    description: "",
    projects: [
      {
        id: "amtiss",
        title: "Webdev Fullstack - Work Collaboration Chat App",
        description:
          "A work collaboration chat app for industries like mining to improve communication flow. Built by 8 people using Scrum. Features include user, asset, and report mentions. Developed with Django REST (backend) and React TypeScript (frontend).",
        image: "/images/projects/ppl.png",
        tags: ["React TS", "Django REST", "Python", "Scrum", "Git"],
        github: "",
        demo: "",
      },
    ],
  },
  other: {
    title: "Other Projects",
    description: "",
    projects: [
      {
        id: "plaguewalker",
        title: "Gamedev - Plaguewalker",
        description:
          "An endless runner game similar to Google Dino game, developed by me using Godot engine 4.3 (GDScript).",
        image: "/images/projects/plaguewalker.png",
        tags: ["Godot", "Problem Solving", "Critical Thinking"],
        github: "",
        demo: "https://nano1410.itch.io/plaguewalker",
      },
      {
        id: "callisto",
        title: "Gamedev - Callisto",
        description:
          "Collection of Python scripts for automating daily tasks including file organization, email processing, and data backup. Includes GUI applications and command-line tools for various productivity enhancements.",
        image: "/images/projects/callisto.png",
        tags: ["Godot", "Problem Solving", "Critical Thinking"],
        github: "",
        demo: "https://absolute-cinema.itch.io/callisto"
      },
    ],
  },
}

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "R", "SQL"] },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost"] },
  { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] },
  { category: "Web Development", items: ["React", "Next.js", "Node.js", "FastAPI", "Django"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Google Cloud", "Vercel"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"] },
]

const experiences = [
  {
    title: "Staff of Back End Web Developer – UI Battlegrounds 2024",
    // company: "",
    location: "Depok, Indonesia",
    period: "Jul 2024 - Oct 2024",
    description:
      "● Collaborated in a team of three to develop the back-end system for the official UI Battlegrounds 2024 website ● Designed a scalable UML Class Diagram to support future system expansion and maintainabilitytions.",
    logo: "/images/logos/logo.png",
    color: "bg-blue-500",
  },
  {
    title: "Staff of Human Resources Development – KMK Fasilkom UI",
    // company: "",
    location: "Depok, Indonesia",
    period: "Mar 2023 - Dec 2023",
    description:
      "● Staff of Catholic Student Body Organization for Fakultas Ilmu Komputer (Fasilkom) UI ● Participated in strengthening the bond between members of KMK Fasilkom UI by keeping birthday records and delivering personalized birthday greetings to each memberogies.",
    logo: "/images/logos/school-logo.png",
    color: "bg-green-500",
  }
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Universitas Indonesia",
    location: "Depok, Indonesia",
    period: "2022 - Now",
    description:
      "GPA: 3.26/4.0",
    logo: "/images/logos/univ.png",
    color: "bg-red-500",
  },
  {
    degree: "High School Diploma",
    school: "SMA Lokon St. Nikolaus Tomohon",
    location: "Tomohon, Indonesia",
    period: "2019 - 2022",
    description:
      "GPA: 93.29/100 - Member of Informatics Competition Club - Finalist of Kompetisi Sains Nasional (KSN) Informatika 2021, ranked among the top 100 at the national level",
    logo: "/images/logos/school-logo.png",
    color: "bg-yellow-500",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projectCategories>("data-science")

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Mariano Gerardus Senduk</h1>
              <p className="text-muted-foreground">Data Enthusiast</p>
            </div>
            <nav className="flex gap-6">
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#education" className="hover:text-primary transition-colors">
                Education
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/images/profile/profile.jpg"
                alt="Your Name - Profile Photo"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
                priority
              />
            </div>
          </div>
          {/* <h2 className="text-5xl font-bold mb-6">Building</h2> */}
          <p className="text-xl text-muted-foreground mb-8 max-w-5xl mx-auto">
            A Computer Science undergraduate student, passionate about Data Science, backed by hands-on experience in multiple projects involving machine learning, data analysis, and software development. Strong in problem solving with critical and analytical thinking, coding, and turning real-world problems into effective data solutions.
          </p>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline marker */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${edu.color} flex-shrink-0`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Card>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl">{edu.degree}</CardTitle>
                              <p className="text-lg font-semibold text-primary">{edu.school}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {edu.period}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline marker */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${exp.color} flex-shrink-0`}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Card>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl">{exp.title}</CardTitle>
                              {/* <p className="text-lg font-semibold text-primary">{exp.company}</p> */}
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {exp.period}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          {/* <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Explore my work across different domains - from data science and machine learning to full-stack development
          </p> */}

          {/* Project Category Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border p-1 bg-muted">
              <button
                onClick={() => setActiveCategory("data-science")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "data-science"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Data Science & ML
              </button>
              <button
                onClick={() => setActiveCategory("software-development")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "software-development"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Software Development
              </button>
              <button
                onClick={() => setActiveCategory("other")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "other"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Other Projects
              </button>
            </div>
          </div>

          {/* Active Category Display */}
          <div className="max-w-6xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{projectCategories[activeCategory].title}</h3>
              <p className="text-muted-foreground">{projectCategories[activeCategory].description}</p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectCategories[activeCategory].projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`
                            ${activeCategory === "data-science" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" : ""}
                            ${activeCategory === "software-development" ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                            ${activeCategory === "other" ? "bg-purple-100 text-purple-800 hover:bg-purple-200" : ""}
                          `}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                    <div className="flex items-center justify-between pt-4">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex gap-2">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        )}
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="mailto:your.email@example.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
