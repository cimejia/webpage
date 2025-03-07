import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SAMPLE_TEACHINGS } from "@/lib/data";

export default function Teaching() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Teaching</h1>

        <div className="space-y-6">
          {SAMPLE_TEACHINGS.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {course.courseName}
                      {course.courseCode && <span className="ml-2 text-muted-foreground">({course.courseCode})</span>}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.institution}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Last taught: {format(course.lastTaught, "MMMM yyyy")}
                  </span>
                </div>
              </CardHeader>
              {course.description && (
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
