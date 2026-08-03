import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { avisoLegal } from "@/lib/legal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Aviso legal | ${brand.name}`,
  description:
    "Condiciones de uso y datos identificativos del titular del sitio web de Locura Burger.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      titulo={avisoLegal.titulo}
      subtitulo={avisoLegal.subtitulo}
      intro={avisoLegal.intro}
      secciones={avisoLegal.secciones}
    />
  );
}
