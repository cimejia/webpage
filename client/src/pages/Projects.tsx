import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { SAMPLE_PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Research Projects</h1>

        <div className="space-y-6">
          {SAMPLE_PROJECTS.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      {format(project.startDate, "MMM yyyy")} -{" "}
                      {project.endDate ? format(project.endDate, "MMM yyyy") : "Present"}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
