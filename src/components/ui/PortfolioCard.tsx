"use client"
import React, { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Dialog, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import Image from 'next/image';

interface PortfolioCardProps {
    id: string;
    title: string;
    description: string;
    expandedDetails: string;
    category: "backend" | "machineLearning" | "projects";
    techStack: string[];
    mainImage: string;
    url?: string;
    urlLogo?: string;
}

const PortfolioCard = ({id, title, description, expandedDetails, category, techStack, mainImage, url, urlLogo}: PortfolioCardProps) => {

    const [cardExtend, setCardExtend] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const isMobile = useMediaQuery("(max-width:640px)")

    const handleClose = () => {
        setOpenDialog(false)
    }

    const TechTags = () => (
        <div className='flex flex-wrap gap-1.5 mt-3'>
            {techStack.map(tech => (
                <span key={tech} className='text-xs px-2 py-0.5 rounded-full bg-accent/15 text-accent font-medium'>
                    {tech}
                </span>
            ))}
        </div>
    )

    return (
    <div className="flex flex-row shrink-0">
        <div className='group relative'>
            <div className="p-5 h-60 w-60 shadow-lg rounded flex flex-col">
                <div className='relative w-[70px] h-[70px] shrink-0'>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${mainImage}`} alt={title} fill className='object-contain'/>
                </div>
                <h2 className='mt-3 text-accent font-bold'>
                    {title}
                </h2>
                <span className='text-sm leading-tight overflow-y-auto flex-1 min-h-0'>
                    {description}
                </span>
                {url && urlLogo && (
                    <a href={url} target='_blank' rel='noopener noreferrer'
                       className='mt-2 shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-accent text-white hover:opacity-85 transition-opacity w-fit'
                       onClick={(e) => e.stopPropagation()}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${urlLogo}`} alt="" width={14} height={14}/>
                        View Project
                    </a>
                )}
            </div>
            <div className='opacity-100 md:opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                <ArrowDropUpIcon
                    className={`bg-secondary-foreground text-secondary-background
                        shadow-[2px_-2px_10px_rgba(0,0,0,0.1)]
                        absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
                        transition-transform duration-300 cursor-pointer ${cardExtend ? 'sm:rotate-270' : 'rotate-90'}`}
                    sx={{
                        fontSize: 60,
                        borderRadius: '50%',
                        }}
                    onClick={()=>{
                        if (isMobile) {
                            setOpenDialog(true)
                        }
                        else {
                            setCardExtend(!cardExtend)
                        }
                    }}/>
            </div>
        </div>
        {cardExtend &&
        <div>
            <div className='hidden sm:block'>
                <div className='p-4 h-60 w-90 bg-secondary-background text-secondary-foreground rounded overflow-y-auto'>
                    <h3 className='text-accent font-bold text-sm mb-2'>{title}</h3>
                    <div className='text-sm leading-tight'>
                        {expandedDetails}
                    </div>
                    <TechTags />
                    {url && urlLogo && (
                        <a href={url} target='_blank' rel='noopener noreferrer'
                           className='mt-3 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full bg-accent text-white hover:opacity-85 transition-opacity w-fit'>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${urlLogo}`} alt="" width={16} height={16}/>
                            View Project
                        </a>
                    )}
                </div>
            </div>
        </div>
        }
        <Dialog
            open={openDialog}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle sx={{ bgcolor: '#273F4F', color: '#EFEEEA', fontWeight: 'bold', fontSize: '1rem' }}>
                {title}
            </DialogTitle>
            <DialogContent sx={{ bgcolor: '#273F4F', color: '#EFEEEA' }}>
                <div className='text-sm leading-tight'>
                    {expandedDetails}
                </div>
                <TechTags />
                {url && urlLogo && (
                    <a href={url} target='_blank' rel='noopener noreferrer'
                       className='mt-3 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full bg-accent text-white hover:opacity-85 transition-opacity w-fit'>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${urlLogo}`} alt="" width={16} height={16}/>
                        View Project
                    </a>
                )}
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default PortfolioCard
