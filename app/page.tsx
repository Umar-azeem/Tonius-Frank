import CardStack from "./components/Card";
import Community from "./components/Community";
import CreditBuild from "./components/CreditBuild";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import Loan from "./components/Loan";
import MortgageCalculator from "./components/MortgageCalculator";
import MortgageLandingPage from "./components/MortgageLandingPage";
import Refi from "./components/Refi";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
   <>
   <MortgageLandingPage />
   <Community/>
   <Education/>
   <Refi/>
   <CreditBuild/>
   <MortgageCalculator/>
   <Carousel/>
   {/* <Consider/> */}
   <CardStack/>
   <Loan/>
   <FAQ/>
   </>
  );
}
