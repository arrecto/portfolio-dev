import Header from "@/components/Header";
import BackendPortfolio from "@/components/Portfolio/BackendPortfolio";
import MachineLearningPortfolio from "@/components/Portfolio/MachineLearningPortfolio";
import ProjectsPortfolio from "@/components/Portfolio/ProjectsPortfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-sans dark:bg-black">
      <main className="m-5 overflow-x-hidden">
        <div className="space-y-5 md:space-y-15">
          <Header/>
          <ProjectsPortfolio/>
          <div className='space-y-5 md:space-y-10'>
            <h2 className='font-heading text-xl md:text-2xl font-bold mx-2 md:mx-5 opacity-60'>Experience</h2>
            <BackendPortfolio/>
            <MachineLearningPortfolio/>
          </div>
        </div>
      </main>
    </div>
  );
}
