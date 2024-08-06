"use client"

import CardLayout from "@/components/card-layout/card-layout";
import SliderBottom from "../components/slider/bottom-slider"
import TopCard from "@/components/cards/top-card";
import AboutCard from "@/components/cards/about-card";

export default function Home() {

  return (
    <main>
      <CardLayout minHeight="min-h-with-nav" primary="bg-primary" secondary="bg-white" layer="z-10" padding="pb-4" overflow="overflow-hidden">
        <TopCard />
      </CardLayout>
      <CardLayout minHeight="min-h-full" primary="bg-white" secondary="bg-primary" layer="z-10" margining="-mt-4" padding="pb-4" overflow="overflow-hidden">
        <AboutCard/>
      </CardLayout>
      <CardLayout minHeight="min-h-full" primary="bg-primary" secondary="bg-white" layer="z-10" margining="-mt-4">
        <SliderBottom />
      </CardLayout>
    </main>
  );
}
