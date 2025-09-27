import { Project, DeveloperInfo } from '@/types';

export const developerInfo: DeveloperInfo = {
  name: "Alex Chen",
  title: "Data Scientist & ML Engineer",
  bio: "Passionate data scientist with 5+ years of experience in machine learning, data visualization, and statistical analysis. I transform complex data into actionable insights and build scalable ML solutions.",
  email: "alex.chen@email.com",
  linkedin: "https://linkedin.com/in/alexchen",
  github: "https://github.com/alexchen",
  skills: [
    "Python", "R", "SQL", "Machine Learning", "Deep Learning", 
    "Data Visualization", "Statistical Analysis", "Big Data", 
    "TensorFlow", "PyTorch", "Pandas", "Scikit-learn"
  ],
  avatar: "/placeholder.svg"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn using ensemble methods and feature engineering.",
    longDescription: "Built a comprehensive customer churn prediction system using ensemble machine learning techniques. The model combines XGBoost, Random Forest, and Logistic Regression to achieve 94% accuracy. Implemented advanced feature engineering including behavioral pattern analysis, RFM scoring, and temporal features. The solution helped reduce churn by 23% and is currently deployed in production.",
    category: "Machine Learning",
    image: "/placeholder.svg",
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/alexchen/churn-prediction",
    demoUrl: "https://churn-demo.com",
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Stock Market Analysis Dashboard",
    description: "Interactive dashboard for real-time stock market analysis with technical indicators and predictions.",
    longDescription: "Developed a comprehensive stock market analysis platform featuring real-time data processing, technical indicator calculations, and price prediction models. The dashboard includes candlestick charts, volume analysis, RSI, MACD, and Bollinger Bands. Implemented LSTM neural networks for price forecasting with backtesting capabilities.",
    category: "Data Visualization",
    image: "/placeholder.svg",
    technologies: ["Python", "Streamlit", "Plotly", "LSTM", "Alpha Vantage API"],
    githubUrl: "https://github.com/alexchen/stock-dashboard",
    demoUrl: "https://stock-analysis-demo.com",
    featured: true,
    createdAt: "2023-11-20"
  },
  {
    id: 3,
    title: "Sentiment Analysis of Social Media",
    description: "NLP pipeline for analyzing sentiment in social media posts using transformer models.",
    longDescription: "Created an end-to-end NLP pipeline for social media sentiment analysis using BERT and RoBERTa transformer models. The system processes 100k+ posts daily with 91% accuracy. Includes custom preprocessing, aspect-based sentiment analysis, and emotion detection. Built with scalable architecture using Apache Kafka for real-time processing.",
    category: "Natural Language Processing",
    image: "/placeholder.svg",
    technologies: ["Python", "BERT", "Transformers", "Apache Kafka", "Docker"],
    githubUrl: "https://github.com/alexchen/sentiment-analysis",
    featured: false,
    createdAt: "2023-09-10"
  },
  {
    id: 4,
    title: "Sales Forecasting Model",
    description: "Time series forecasting model for retail sales prediction using advanced statistical methods.",
    longDescription: "Developed a sophisticated time series forecasting system for retail sales prediction. Implemented multiple approaches including ARIMA, Prophet, and LSTM models with automatic hyperparameter tuning. The model accounts for seasonality, holidays, and external factors, achieving MAPE of 8.5%. Deployed with automated retraining pipeline.",
    category: "Data Analysis",
    image: "/placeholder.svg",
    technologies: ["Python", "Prophet", "ARIMA", "TensorFlow", "AWS"],
    githubUrl: "https://github.com/alexchen/sales-forecasting",
    featured: true,
    createdAt: "2023-07-05"
  },
  {
    id: 5,
    title: "Image Classification with CNNs",
    description: "Deep learning model for medical image classification using convolutional neural networks.",
    longDescription: "Built a medical image classification system using convolutional neural networks to detect anomalies in X-ray images. Implemented transfer learning with ResNet and DenseNet architectures, achieving 96% accuracy on the test set. Includes data augmentation, grad-CAM visualization for model interpretability, and DICOM image processing capabilities.",
    category: "Machine Learning",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "DICOM"],
    githubUrl: "https://github.com/alexchen/medical-image-classification",
    featured: false,
    createdAt: "2023-05-15"
  },
  {
    id: 6,
    title: "A/B Testing Framework",
    description: "Statistical framework for designing and analyzing A/B tests with bayesian inference.",
    longDescription: "Designed a comprehensive A/B testing framework using Bayesian inference methods. The system provides statistical power calculations, sample size determination, and automated result interpretation. Includes sequential testing capabilities, multi-armed bandit algorithms, and integration with experiment tracking systems.",
    category: "Data Analysis",
    image: "/placeholder.svg",
    technologies: ["Python", "PyMC3", "Scipy", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/alexchen/ab-testing-framework",
    featured: false,
    createdAt: "2023-03-20"
  }
];

export const categories = [
  "All",
  "Machine Learning",
  "Data Visualization", 
  "Natural Language Processing",
  "Data Analysis"
];