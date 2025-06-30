// import Link from "next/link"
// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft, Github, ExternalLink, Calendar, Users } from "lucide-react"
// import { notFound } from "next/navigation"

// const projects = {
//   "clustering-algorithms": {
//     title: "Comparative Analysis of Clustering Algorithms for Song Lyrics Clustering",
//     description:
//       "Compared K-Means, Agglomerative, and DBSCAN for clustering 7,315 song lyrics scraped from Genius.com. Used text preprocessing and Word2Vec for feature extraction. Evaluated with silhouette scores and word clouds; K-Means and Agglomerative performed best.",
//     image: "/placeholder.svg?height=400&width=800",
//     tags: ["Python", "Problem Solving", "Critical Thinking", "Teamwork"],
//     github: "https://github.com/username/clustering-project",
//     demo: "https://clustering-demo.vercel.app",
//     date: "December 2024",
//     duration: "3 months",
//     team: "4 members",
//     detailedDescription: `
//       This project involved a comprehensive analysis of clustering algorithms applied to song lyrics data. We scraped 7,315 song lyrics from Genius.com and applied various preprocessing techniques including tokenization, stop word removal, and stemming.

//       ## Key Features
//       - **Data Collection**: Automated web scraping using Python and BeautifulSoup
//       - **Text Preprocessing**: Advanced NLP techniques for cleaning and preparing text data
//       - **Feature Extraction**: Word2Vec embeddings for semantic representation
//       - **Algorithm Comparison**: K-Means, Agglomerative, and DBSCAN clustering
//       - **Evaluation Metrics**: Silhouette scores and qualitative analysis using word clouds

//       ## Technical Implementation
//       The project was implemented using Python with libraries including scikit-learn, NLTK, and gensim. We experimented with different hyperparameters and evaluated the performance of each algorithm using both quantitative metrics and qualitative analysis.

//       ## Results
//       K-Means and Agglomerative clustering showed the best performance, with K-Means achieving the highest silhouette score of 0.73. The word clouds generated from the clusters revealed meaningful thematic groupings of songs.

//       ## Challenges & Solutions
//       - **Data Quality**: Handled inconsistent lyrics formatting through robust preprocessing
//       - **Dimensionality**: Used PCA for visualization and computational efficiency
//       - **Evaluation**: Developed custom metrics for evaluating clustering quality in text data
//     `,
//     images: [
//       "/placeholder.svg?height=300&width=600",
//       "/placeholder.svg?height=300&width=600",
//       "/placeholder.svg?height=300&width=600",
//     ],
//   },
//   "face-recognition": {
//     title: "Person Detection and Face Recognition, with Crowd Detection",
//     description:
//       "Built a system to detect people, recognize faces, and measure crowd density from video. Used YOLO for person detection, YuNet + FaceNet for face recognition. Improved accuracy through dataset cleaning, preprocessing, and augmentation.",
//     image: "/placeholder.svg?height=400&width=800",
//     tags: ["Python", "Teamwork", "Problem Solving", "Critical Thinking"],
//     github: "https://github.com/username/face-recognition",
//     demo: "https://face-recognition-demo.vercel.app",
//     date: "October 2024",
//     duration: "4 months",
//     team: "3 members",
//     detailedDescription: `
//       A comprehensive computer vision system that combines person detection, face recognition, and crowd density estimation for real-time video analysis.

//       ## System Architecture
//       - **Person Detection**: YOLO v8 for real-time person detection
//       - **Face Recognition**: YuNet for face detection + FaceNet for recognition
//       - **Crowd Analysis**: Density estimation algorithms for crowd counting
//       - **Real-time Processing**: Optimized pipeline for video stream processing

//       ## Key Achievements
//       - Achieved 94% accuracy in person detection
//       - 89% accuracy in face recognition under various lighting conditions
//       - Real-time processing at 30 FPS on standard hardware
//       - Robust performance in crowded environments

//       ## Technical Stack
//       - **Deep Learning**: PyTorch, OpenCV, YOLO, FaceNet
//       - **Data Processing**: NumPy, Pandas, PIL
//       - **Deployment**: Docker, FastAPI for API endpoints
//       - **Monitoring**: MLflow for experiment tracking

//       ## Dataset & Training
//       Created a custom dataset of 10,000+ images with proper annotations. Implemented data augmentation techniques including rotation, scaling, and lighting variations to improve model robustness.
//     `,
//     images: [
//       "/placeholder.svg?height=300&width=600",
//       "/placeholder.svg?height=300&width=600",
//       "/placeholder.svg?height=300&width=600",
//     ],
//   },
//   "subscription-prediction": {
//     title: "Deposit Product Subscription Prediction – Competition by Data Science Indonesia (DSI) 2025",
//     description:
//       "Built a model to predict customer subscription to deposit products. Used EDA, feature engineering, and trained various models including stacking. Achieved 0.7897 AUC, close to competition winner's 0.7901.",
//     image: "/placeholder.svg?height=400&width=800",
//     tags: ["Python", "Teamwork", "Problem Solving", "Critical Thinking"],
//     github: "https://github.com/username/subscription-prediction",
//     date: "January 2025",
//     duration: "2 months",
//     team: "2 members",
//     detailedDescription: `
//       A machine learning competition project focused on predicting customer subscription behavior for banking deposit products.

//       ## Competition Overview
//       - **Organizer**: Data Science Indonesia (DSI)
//       - **Task**: Binary classification for deposit subscription prediction
//       - **Metric**: Area Under the ROC Curve (AUC)
//       - **Final Rank**: Top 5% (0.7897 AUC vs winner's 0.7901)

//       ## Methodology
//       ### Exploratory Data Analysis
//       - Comprehensive analysis of customer demographics and behavior
//       - Identification of key patterns and correlations
//       - Feature importance analysis and selection

//       ### Feature Engineering
//       - Created interaction features between demographic and behavioral variables
//       - Temporal feature extraction from customer history
//       - Categorical encoding using target encoding and one-hot encoding

//       ### Model Development
//       - **Base Models**: Random Forest, XGBoost, LightGBM, CatBoost
//       - **Ensemble Method**: Stacking with logistic regression meta-learner
//       - **Cross-validation**: 5-fold stratified CV for robust evaluation
//       - **Hyperparameter Tuning**: Bayesian optimization using Optuna

//       ## Results & Impact
//       Our ensemble approach achieved exceptional performance, ranking in the top 5% of participants. The model identified key factors influencing subscription decisions, providing valuable insights for marketing strategies.
//     `,
//     images: ["/placeholder.svg?height=300&width=600", "/placeholder.svg?height=300&width=600"],
//   },
//   "citation-network": {
//     title: "Paper Citation Network Prediction – Competition by Gammafest IPB 2025",
//     description:
//       "Predicted citation links between academic papers in a team of three. Preprocessed text and extracted features using TF-IDF and metadata. Trained binary classifiers and achieved competitive performance in the competition.",
//     image: "/placeholder.svg?height=400&width=800",
//     tags: ["Python", "Teamwork", "Problem Solving", "Critical Thinking"],
//     github: "https://github.com/username/citation-network",
//     date: "February 2025",
//     duration: "6 weeks",
//     team: "3 members",
//     detailedDescription: `
//       A graph machine learning project for predicting citation relationships between academic papers in a competitive setting.

//       ## Problem Statement
//       Given a network of academic papers with their abstracts, titles, and existing citation relationships, predict which papers are likely to cite each other in the future.

//       ## Approach
//       ### Data Preprocessing
//       - Text cleaning and normalization of paper abstracts and titles
//       - Extraction of metadata features (publication year, venue, author information)
//       - Graph structure analysis and feature extraction

//       ### Feature Engineering
//       - **Text Features**: TF-IDF vectors from abstracts and titles
//       - **Graph Features**: Node centrality measures, clustering coefficients
//       - **Temporal Features**: Publication time differences and trends
//       - **Similarity Features**: Cosine similarity between paper embeddings

//       ### Model Architecture
//       - **Text Embeddings**: BERT-based embeddings for semantic similarity
//       - **Graph Neural Networks**: GraphSAGE for learning node representations
//       - **Ensemble Methods**: Combination of multiple classifiers
//       - **Link Prediction**: Binary classification for citation prediction

//       ## Technical Implementation
//       - **Libraries**: NetworkX, PyTorch Geometric, Transformers, scikit-learn
//       - **Scalability**: Efficient batch processing for large graph datasets
//       - **Evaluation**: Precision, Recall, F1-score, and AUC metrics

//       ## Competition Results
//       Achieved competitive performance in the top 20% of participants, with strong precision in predicting high-confidence citation links.
//     `,
//     images: ["/placeholder.svg?height=300&width=600", "/placeholder.svg?height=300&width=600"],
//   },
// }

// interface ProjectPageProps {
//   params: {
//     id: string
//   }
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = projects[params.id as keyof typeof projects]

//   if (!project) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Portfolio
//           </Link>
//         </div>
//       </header>

//       {/* Project Content */}
//       <main className="container mx-auto px-4 py-8 max-w-4xl">
//         {/* Hero Image */}
//         <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
//           <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
//         </div>

//         {/* Project Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

//           {/* Meta Information */}
//           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
//             <div className="flex items-center gap-1">
//               <Calendar className="w-4 h-4" />
//               {project.date}
//             </div>
//             <div className="flex items-center gap-1">
//               <Users className="w-4 h-4" />
//               {project.team}
//             </div>
//             <div>Duration: {project.duration}</div>
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tags.map((tag) => (
//               <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
//                 {tag}
//               </Badge>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4">
//             {project.github && (
//               <Button asChild>
//                 <Link href={project.github} target="_blank" rel="noopener noreferrer">
//                   <Github className="w-4 h-4 mr-2" />
//                   View Code
//                 </Link>
//               </Button>
//             )}
//             {project.demo && (
//               <Button variant="outline" asChild>
//                 <Link href={project.demo} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="w-4 h-4 mr-2" />
//                   Live Demo
//                 </Link>
//               </Button>
//             )}
//           </div>
//         </div>

//         {/* Project Description */}
//         <div className="prose prose-gray max-w-none dark:prose-invert mb-12">
//           <div className="text-lg leading-relaxed mb-8">{project.description}</div>

//           <div
//             className="space-y-6"
//             dangerouslySetInnerHTML={{
//               __html: project.detailedDescription
//                 .replace(/\n/g, "<br>")
//                 .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
//                 .replace(
//                   /<h2 class="text-2xl font-bold mt-8 mb-4">([^<]+)<br>/g,
//                   '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>',
//                 ),
//             }}
//           />
//         </div>

//         {/* Additional Images */}
//         {project.images && project.images.length > 0 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {project.images.map((image, index) => (
//                 <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
//                   <Image
//                     src={image || "/placeholder.svg"}
//                     alt={`${project.title} - Image ${index + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Navigation */}
//         <div className="border-t pt-8">
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to All Projects
//           </Link>
//         </div>
//       </main>
//     </div>
//   )
// }
