import { getPage } from "./api/pages";
import Hero from "./_components/pages/home/Hero";
import SalesChallengesSection from "./_components/pages/home/SalesChallengesSection";
import HowWeHelpSection from "./_components/pages/home/HowWeHelpSection";
import GetStartedSection from "./_components/pages/home/GetStartedSection";

export default async function Home() {
  const data = await getPage('home');
  const content = data?.data?.data?.content || {};

  return (
    <div className="">
      {
        // JSON.stringify(data)
      }
      {/* ******** Hero ******** */}
      <Hero hero = {content.hero} />

      {/* ******** Sales Challanges ******** */}

      <SalesChallengesSection data = {content.sales_challenges} />
        
      {/* ******** How We help ******** */}

       <HowWeHelpSection data={content.how_we_help}/>

      {/* ******** Get Started ******** */}
        
      <GetStartedSection data ={content.get_started}/>

    </div>
  );
}
