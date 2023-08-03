import { TheHero } from "@/components/TheHero/TheHero";
import { TheBenefits } from "@/components/TheBenefits/TheBenefits";
import { TheInspired } from "@/components/TheInspired/TheInspired";
import { TheEnjoy } from "@/components/TheEnjoy/TheEnjoy";

export default function Home() {
  return (
    <>
      <main className="main">
        <TheHero />
        <TheBenefits />
        <TheInspired />
        <TheEnjoy />
      </main>
    </>
  );
}
