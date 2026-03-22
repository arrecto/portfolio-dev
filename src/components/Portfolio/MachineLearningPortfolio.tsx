import React from 'react'
import PortfolioCard from '../ui/PortfolioCard'

const mlItems = [
  {
    id: 'agent-matching',
    title: 'AI Agent Matching',
    description: 'Gemini-powered agent matching system that ranks real estate agents by personality compatibility, language, and cultural fit.',
    expandedDetails: 'Multi-step AI pipeline that matches homebuyers with agents based on personality compatibility, language, cultural background, and professional track record. Combines full-text search pre-filtering with LLM-powered ranking to produce a personalized shortlist with compatibility scores and AI-generated explanations for each match.',
    techStack: ['Gemini API', 'FastAPI', 'Meilisearch', 'PostgreSQL', 'Python'],
    mainImage: '/icons/openwebui.svg',
  },
  {
    id: 'market-analysis',
    title: 'AI Market Analysis',
    description: 'LLM-powered market analysis feature that translates 5 years of real estate transaction data into plain-English insights.',
    expandedDetails: 'Aggregates historical transaction data and current market status across multiple geographic scopes — state, city, neighborhood, and building level — then feeds structured summaries to an LLM to generate a professional market overview and key actionable metrics. Results are cached to reduce latency with graceful fallback if the LLM is unavailable.',
    techStack: ['Gemini API', 'FastAPI', 'PostgreSQL', 'Redis', 'Python'],
    mainImage: '/icons/pricing.svg',
  },
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
      <h3 className='font-heading text-lg md:text-xl font-semibold mb-4'>Machine Learning</h3>
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
