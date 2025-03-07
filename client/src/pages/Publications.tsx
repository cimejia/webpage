import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SAMPLE_PUBLICATIONS } from "@/lib/data";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = Array.from(
    new Set(SAMPLE_PUBLICATIONS.map((pub) => pub.year))
  ).sort().reverse();

  const filteredPublications = SAMPLE_PUBLICATIONS.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter === "all" || pub.year === yearFilter;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:max-w-sm"
          />
          
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <Card key={pub.id}>
              <CardHeader>
                <CardTitle className="text-xl">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </CardTitle>
                <CardDescription>
                  {pub.authors} • {pub.venue} • {pub.year}
                </CardDescription>
              </CardHeader>
              {pub.abstract && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
