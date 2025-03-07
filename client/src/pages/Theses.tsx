import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SAMPLE_THESES } from "@/lib/data";

export default function Theses() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Supervised Theses</h1>

        <div className="space-y-6">
          {SAMPLE_THESES.map((thesis) => (
            <Card key={thesis.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {thesis.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      {thesis.studentName} • {thesis.degreeLevel} • {thesis.year}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={thesis.status === "Completed" ? "default" : "secondary"}
                  >
                    {thesis.status}
                  </Badge>
                </div>
              </CardHeader>
              {thesis.description && (
                <CardContent>
                  <p className="text-muted-foreground">{thesis.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
