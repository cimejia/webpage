import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/data";
import { AcademicSocials } from "@/components/AcademicSocials";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Dr. Jane Smith"
                className="object-cover"
              />
            </div>
            <AcademicSocials {...PROFILE.academic} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{PROFILE.name}</h1>
              <p className="text-xl text-muted-foreground">{PROFILE.title}</p>
              <p className="text-lg text-muted-foreground">{PROFILE.institution}</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">{PROFILE.about}</p>

              <div>
                <h3 className="text-lg font-semibold mb-2">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <div className="space-y-2">
                  {PROFILE.education.map((edu) => (
                    <Card key={edu.degree}>
                      <CardContent className="p-4">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}