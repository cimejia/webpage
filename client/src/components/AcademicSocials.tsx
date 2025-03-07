import { Button } from "@/components/ui/button";
import { SiOrcid, SiResearchgate, SiGooglescholar } from "react-icons/si";
import { IoNewspaper, IoLibrary } from "react-icons/io5";

export type AcademicSocialsProps = {
  orcid?: string;
  researchgate?: string;
  googleScholar?: string;
  webOfScience?: string;
  researchId?: string;
}

export function AcademicSocials({
  orcid = "#",
  researchgate = "#",
  googleScholar = "#",
  webOfScience = "#",
  researchId = "#"
}: AcademicSocialsProps) {
  return (
    <div className="flex gap-2 mt-4">
      <Button variant="outline" size="icon" asChild>
        <a
          href={orcid}
          target="_blank"
          rel="noopener noreferrer"
          title="ORCID"
        >
          <SiOrcid className="h-5 w-5 text-[#A6CE39]" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href={researchgate}
          target="_blank"
          rel="noopener noreferrer"
          title="ResearchGate"
        >
          <SiResearchgate className="h-5 w-5 text-[#00CCBB]" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href={googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          title="Google Scholar"
        >
          <SiGooglescholar className="h-5 w-5 text-[#4285F4]" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href={webOfScience}
          target="_blank"
          rel="noopener noreferrer"
          title="Web of Science"
        >
          <IoNewspaper className="h-5 w-5 text-[#000000]" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href={researchId}
          target="_blank"
          rel="noopener noreferrer"
          title="ResearchID"
        >
          <IoLibrary className="h-5 w-5 text-[#000000]" />
        </a>
      </Button>
    </div>
  );
}
