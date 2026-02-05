import React from 'react'
import PortfolioCard from '../ui/PortfolioCard'

const mlItems = [
  {
    id: 'pricing-models',
    title: 'Property Pricing Models',
    description: 'XGBoost regression models for real estate rental price predictions across long-term and short-term rental markets.',
    expandedDetails: 'Trained XGBoost models for LTR and STR rental predictions: revenue, expense, and fee forecasting. Feature engineering from property attributes (bedrooms, sqft, location, amenities). Joblib-serialized label encoders for categorical feature transformation. Served via FastAPI endpoints for real-time inference in production at a real estate website.',
    techStack: ['XGBoost', 'Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    mainImage: '/icons/pricing.svg',
  },
  {
    id: 'caprate-models',
    title: 'Property Cap Rate Models',
    description: 'Capitalization rate prediction models for investment property analysis in the Honolulu real estate market.',
    expandedDetails: 'Cap rate estimation models using property financial data and a "US state" market indicators. Feature preprocessing pipeline with label-encoded categoricals and normalized numerics. Integrated with production FastAPI endpoints for on-demand predictions. Used for investment return analysis and comparative property valuation.',
    techStack: ['XGBoost', 'Python', 'Pandas', 'NumPy', 'Joblib'],
    mainImage: '/icons/caprate.svg',
  },
  {
    id: 'mlops',
    title: 'MLOps',
    description: 'Self-hosted MLFlow server for experiment tracking, model versioning, and ML lifecycle management.',
    expandedDetails: 'MLFlow tracking server for parameterized training runs with logged metrics, hyperparameters, and model artifacts. Model registry for version control and production stage transitions. Reproducible training pipelines with centralized artifact storage. Docker deployment with persistent backend store on dedicated infrastructure.',
    techStack: ['MLFlow', 'Python', 'Docker', 'Model Registry'],
    mainImage: '/icons/mlops.svg',
  },
  {
    id: 'open-webui',
    title: 'Open WebUI',
    description: 'Self-hosted Open WebUI deployment for LLM interactions, custom model configurations, and AI-assisted workflows.',
    expandedDetails: 'Deployed Open WebUI connected to local and cloud LLM providers including Ollama. Custom model configurations and prompt templates for domain-specific real estate tasks. Docker deployment with persistent storage and user management. Used for AI-assisted content generation via Google Gemini and property data analysis.',
    techStack: ['Open WebUI', 'LLM', 'Docker', 'Ollama'],
    mainImage: '/icons/openwebui.svg',
  },
]

const MachineLearningPortfolio = () => {
  const category = 'machineLearning' as const
  return (
    <div className='mx-2 md:mx-5'>
      <h2 className='font-heading text-xl md:text-2xl font-bold mb-4'>Machine Learning</h2>
      <div className='overflow-x-scroll scrollbar-hide'>
        <div className='flex flex-row gap-5 h-65 w-fit mx-auto'>
          {mlItems.map(item => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              category={category}
              title={item.title}
              description={item.description}
              expandedDetails={item.expandedDetails}
              techStack={item.techStack}
              mainImage={item.mainImage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MachineLearningPortfolio
