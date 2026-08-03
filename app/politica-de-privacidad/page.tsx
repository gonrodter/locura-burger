import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { politicaPrivacidad } from "@/lib/legal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Política de privacidad | ${brand.name}`,
  description:
    "Cómo tratamos tus datos personales en Locura Burger: finalidades, legitimación y derechos.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      titulo={politicaPrivacidad.titulo}
      subtitulo={politicaPrivacidad.subtitulo}
      intro={politicaPrivacidad.intro}
      secciones={politicaPrivacidad.secciones}
    />
  );
}
