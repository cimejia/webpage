import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import About from "@/pages/About";
import Publications from "@/pages/Publications";
import Experience from "@/pages/Experience";
import Teaching from "@/pages/Teaching";
import Theses from "@/pages/Theses";
import Trainings from "@/pages/Trainings";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={About} />
      <Route path="/publications" component={Publications} />
      <Route path="/experience" component={Experience} />
      <Route path="/teaching" component={Teaching} />
      <Route path="/theses" component={Theses} />
      <Route path="/trainings" component={Trainings} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;