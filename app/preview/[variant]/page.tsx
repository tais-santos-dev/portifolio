import { notFound } from "next/navigation";
import HomeShell from "@/components/HomeShell";
import PreviewSwitcher from "@/components/PreviewSwitcher";
import type { HeroVariant } from "@/components/Hero";

const VARIANTS: HeroVariant[] = ["side", "centered", "card"];

export function generateStaticParams() {
  return VARIANTS.map((variant) => ({ variant }));
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (!VARIANTS.includes(variant as HeroVariant)) notFound();
  const v = variant as HeroVariant;

  return (
    <>
      <HomeShell heroVariant={v} />
      <PreviewSwitcher active={v} />
    </>
  );
}
