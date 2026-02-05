import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center px-5 sm:px-25 md:px-50 pt-10 md:pt-20 text-left">
        <div className='font-heading space-y-2'>
            <div className="text-4xl lg:text-6xl">Hi, I&apos;m{' '}
                <a className='text-accent cursor-pointer' href='https://www.linkedin.com/in/allen-ivan-recto-802b341bb/' target='_blank'>
                    Allen
                </a>
                </div>
            <div className="text-2xl sm:text-3xl lg:text-5xl">a <span className='underline decoration-accent'>backend</span> and <span className='underline decoration-accent'>machine learning engineer</span></div>
        </div>
        <div className='mt-5 text-l lg:text-xl font-sans'>
            I work on production systems where machine learning, data pipelines,
            and backend services come together
        </div>
    </div>
  )
}

export default Header