import { TheHero } from "@/components/(home)/TheHero/TheHero";
import { TheBenefits } from "@/components/(home)/TheBenefits/TheBenefits";
import { TheInspired } from "@/components/(home)/TheInspired/TheInspired";
import { TheEnjoy } from "@/components/(home)/TheEnjoy/TheEnjoy";

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
