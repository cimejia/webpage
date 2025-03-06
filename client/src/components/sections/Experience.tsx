import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SAMPLE_EXPERIENCES } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="space-y-6">
          {SAMPLE_EXPERIENCES.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.organization} •{" "}
                  {format(exp.startDate, "MMM yyyy")} -{" "}
                  {exp.endDate ? format(exp.endDate, "MMM yyyy") : "Present"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
