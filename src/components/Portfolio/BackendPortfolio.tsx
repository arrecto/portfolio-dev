import React from 'react'
import PortfolioCard from '../ui/PortfolioCard'

const backendItems = [
  {
    id: 'microservices',
    title: 'Microservices',
    description: 'Dedicated video processing microservice with resumable uploads, AI-powered captioning using Whisper, and automated compression pipelines.',
    expandedDetails: 'FastAPI microservice implementing TUS protocol for chunked resumable uploads that survive network interruptions. OpenAI Whisper integration for video-to-text captioning. FFmpeg pipeline with H.264/AAC encoding, dynamic CRF compression (18-28), and watermark overlay. ARQ background workers with Redis job queue for non-blocking processing. S3-compatible object storage with CDN delivery',
    techStack: ['FastAPI', 'TUS Protocol', 'Whisper AI', 'FFmpeg', 'Redis', 'ARQ', 'Docker', 'S3'],
    mainImage: '/icons/microservices.svg',
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'Workflow automation using N8N for data processing, API integrations, and automated notification pipelines across services.',
    expandedDetails: 'Self-hosted N8N instance with custom workflows for automated data ingestion and webhook-triggered pipelines. Scheduled cron jobs for cross-service data synchronization. SMTP email automation via Gmail relay, REST API orchestration across FastAPI microservices, and conditional branching logic for multi-step processes.',
    techStack: ['N8N', 'Webhooks', 'REST APIs', 'SMTP', 'Cron'],
    mainImage: '/icons/automation.svg',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Server setup and maintenance using Coolify for deploying and managing multi-service applications in production.',
    expandedDetails: 'All infrastructure managed through Coolify PaaS on Hetzner dedicated servers. Responsible for provisioning new servers, configuring deployment pipelines, monitoring logs, and applying updates across services. Multi-service stacks deployed via Coolify: FastAPI backends, Next.js frontends, Redis, PostgreSQL, and Meilisearch. Coolify handles Docker orchestration, SSL provisioning, Nginx reverse proxy, and Git-triggered builds.',
    techStack: ['Coolify', 'Docker', 'Nginx', 'Hetzner', 'SSL/TLS'],
    mainImage: '/icons/devops.svg',
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Multi-schema PostgreSQL architecture with Prisma ORM, Redis caching layer, and full-text search integration.',
    expandedDetails: 'PostgreSQL with multi-schema design separating app data from production analytics. Prisma ORM with async Python client and TypeScript client for type-safe queries. UUID primary keys, soft deletes via end_date timestamps, and audit trails on all tables. Redis caching layer via fastapi-cache2 with custom cache key builders. Meilisearch integration for full-text property search indexing.',
    techStack: ['PostgreSQL', 'Prisma', 'Redis', 'Meilisearch', 'SQL'],
    mainImage: '/icons/database.svg',
  },
]

const BackendPortfolio = () => {
  const category = 'backend' as const
  return (
    <div className='mx-2 md:mx-5'>
      <h2 className='font-heading text-xl md:text-2xl font-bold mb-4'>Backend</h2>
      <div className='overflow-x-scroll scrollbar-hide'>
        <div className='flex flex-row gap-5 h-65 w-fit mx-auto'>
          {backendItems.map(item => (
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

export default BackendPortfolio
