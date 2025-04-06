import Container from "@/app/components/Container";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Steps from "@/app/components/Steps";
//import WhyUs from "@/app/components/WhyUs";
import Lead from "./components/Lead";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Steps />
      {/* <WhyUs /> */}
      <Lead />
      <Faq />
    </Container>
  );
}
