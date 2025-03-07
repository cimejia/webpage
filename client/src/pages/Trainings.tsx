import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SAMPLE_TRAININGS } from "@/lib/data";

export default function Trainings() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Training Courses</h1>

        <div className="space-y-6">
          {SAMPLE_TRAININGS.map((training) => (
            <Card key={training.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {training.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {training.organization} • {training.duration}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {format(training.date, "MMMM d, yyyy")}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Audience:</span> {training.audience}
                  </p>
                  <p className="text-muted-foreground">
                    {training.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
