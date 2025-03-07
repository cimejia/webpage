import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch with me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Email:</strong> {PROFILE.contact.email}
              </p>
              <p>
                <strong>Office:</strong> {PROFILE.contact.office}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect with me online</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://twitter.com/${PROFILE.contact.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://${PROFILE.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://${PROFILE.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={`mailto:${PROFILE.contact.email}`}>
                    <FaEnvelope className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
