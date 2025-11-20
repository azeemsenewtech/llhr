import ClientSection from "./feacture/clientSection";
import HeroSection from "./feacture/heroSection";
import Features from "./feacture/listSection";
import MainSection from "./feacture/mainSection";
import QSection from "./feacture/qSection";
import ScoreSection from "./feacture/scoreSection";
import TenantSection from "./feacture/tenantSection";

import WorkSection from "./feacture/workSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MainSection />
      <Features />
      <WorkSection />
    <ScoreSection/>
    <TenantSection/>
    <QSection/>
    <ClientSection/>
    </>
  );
};

export default Home;
