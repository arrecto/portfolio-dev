import Header from "@/components/Header";
import BackendPortfolio from "@/components/Portfolio/BackendPortfolio";
import MachineLearningPortfolio from "@/components/Portfolio/MachineLearningPortfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-sans dark:bg-black">
      <main className="m-5 overflow-x-hidden">
        <div className="space-y-5 md:space-y-15">
          <Header/>
          <BackendPortfolio/>
          <MachineLearningPortfolio/>
        </div>
      </main>
    </div>
  );
}
