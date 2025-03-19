import { GlareCard } from "./glare-card";
import { Sparkles } from "lucide-react";

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <h2 className="font-bold text-white text-2xl text-center">Trusted Service</h2>
        <p className="font-normal text-base text-neutral-200 mt-4 text-[16px]">
          Thousands of travelers trust us every year for easy, worry-free airport transfers and rides.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://i.imgur.com/BKZrmVQ.jpeg"
          alt="Experience Royal Transfer EU"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <h2 className="font-bold text-white text-2xl text-center">Premium Experience</h2>
        <p className="font-normal text-base text-neutral-200 mt-4 text-[16px]">
          Experience luxury transportation with our premium fleet and professional service.
        </p>
      </GlareCard>
    </div>
  );
}