import React from 'react'
import PortfolioCard from '../ui/PortfolioCard'

const projectItems = [
  {
    id: 'pen',
    title: 'Pen',
    description: 'MCP-powered RAG chatbot that exposes structured retrieval tools to LLMs for context-grounded responses over custom knowledge bases.',
    expandedDetails: 'RAG chatbot built using the Model Context Protocol (MCP) to expose structured retrieval tools to LLMs, enabling context-grounded responses over custom knowledge bases through standardized tool-call interfaces. MCP allows the LLM to call retrieval tools with typed inputs and outputs, making the retrieval pipeline transparent and composable.',
    techStack: ['Python', 'MCP', 'RAG', 'LLM'],
    mainImage: '/icons/openwebui.svg',
    url: 'https://chat.pen-air.mooo.com',
    urlLogo: '/icons/github-logo.svg',
  },
  {
    id: 'perg-viewer',
    title: 'PERG Viewer',
    description: 'Desktop application for analyzing Pattern Electroretinogram signals from the PERG-IOBA medical database with wavelet-based denoising.',
    expandedDetails: 'Python GUI application for ophthalmologists and researchers to visualize and denoise PERG signals. Features Daubechies-4 wavelet decomposition with configurable levels, min-max signal normalization, and multi-episode binocular signal comparison. Includes patient database navigation for 337 records, real-time plotting, and coefficient extraction for downstream ML classification.',
    techStack: ['Python', 'PySimpleGUI', 'PyWavelets', 'Pandas', 'Matplotlib', 'NumPy'],
    mainImage: '/icons/perg.svg',
    url: 'https://github.com/arrecto/PERGViewer',
    urlLogo: '/icons/github-logo.svg',
  },
  {
    id: 'zillow-scraper',
    title: 'Zillow Scraper',
    description: 'Web scraping toolkit for collecting real estate property listings from Zillow using their internal search API endpoints.',
    expandedDetails: 'Scrapy-based scraper targeting Zillow\'s async search API for Hawaii property data. Uses PUT requests to the internal search endpoint with geographic bounds filtering for the Honolulu market. Extracts structured JSON responses with property listings, bypassing traditional HTML parsing. Built for automated data collection to feed real estate analytics pipelines.',
    techStack: ['Python', 'Scrapy', 'Pandas', 'BeautifulSoup', 'REST API'],
    mainImage: '/icons/scraper.svg',
    url: 'https://github.com/arrecto/Zillow-Scraper',
    urlLogo: '/icons/github-logo.svg',
  },
  {
    id: 'airbnb-predictor',
    title: 'Airbnb Revenue Predictor',
    description: 'XGBoost model predicting monthly revenue for short-term rental properties using Inside Airbnb public data.',
    expandedDetails: 'Machine learning pipeline for predicting Airbnb monthly revenue in Honolulu. Features geospatial encoding with H3 hexagons, competition analysis using BallTree neighbor search, and property classification. XGBoost regression trained on 26,000+ listings with listing-level train/test splits to prevent data leakage. Includes occupancy rate calculation, expense modeling, and comprehensive evaluation visualizations.',
    techStack: ['Python', 'XGBoost', 'Pandas', 'H3', 'scikit-learn', 'Matplotlib'],
    mainImage: '/icons/prediction.svg',
    url: 'https://colab.research.google.com/drive/1TYThy5Xaix6xRCxpr4mJenGH_AvSDAuq',
    urlLogo: '/icons/jupyter-logo.svg',
  },
]

const ProjectsPortfolio = () => {
  const category = 'projects' as const
  return (
    <div className='mx-2 md:mx-5'>
      <h2 className='font-heading text-xl md:text-2xl font-bold mb-4'>Projects</h2>
      <div className='overflow-x-scroll scrollbar-hide'>
        <div className='flex flex-row gap-5 h-65 w-fit mx-auto'>
          {projectItems.map(item => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              category={category}
              title={item.title}
              description={item.description}
              expandedDetails={item.expandedDetails}
              techStack={item.techStack}
              mainImage={item.mainImage}
              url={item.url}
              urlLogo={item.urlLogo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPortfolio
