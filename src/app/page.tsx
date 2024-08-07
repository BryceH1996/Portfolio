"use client"

import CardLayout from "@/components/card-layout/card-layout";
import SliderBottom from "../components/slider/bottom-slider"
import TopCard from "@/components/cards/top-card";
import AboutCard from "@/components/cards/about-card";

export default function Home() {

  return (
    <main>
      <CardLayout minHeight="min-h-with-nav" primary="bg-primary" secondary="bg-white" layer="z-30" overflow="overflow-hidden" alignment="items-end">
        <TopCard />
      </CardLayout>
      <CardLayout minHeight="min-h-card" primary="bg-white" secondary="bg-primary" layer="z-20" margining="-mt-4" overflow="overflow-hidden" alignment="items-center" animate={true} bottomValue={-400}>
        <AboutCard/>
      </CardLayout>
      <CardLayout minHeight="min-h-card" primary="bg-primary" secondary="bg-light-gray" layer="z-10" margining="-mt-4 -mb-4" alignment="items-end" animate={true} bottomValue={-800}>
        <SliderBottom />
      </CardLayout>
    </main>
  );
}
