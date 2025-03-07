import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add this route to the existing routes
  app.post("/api/visits/:page", async (req, res) => {
    const { page } = req.params;
    const count = await storage.incrementVisit(page);
    res.json({ count });
  });

  app.get("/api/visits/:page", async (req, res) => {
    const { page } = req.params;
    const count = await storage.getVisitCount(page);
    res.json({ count });
  });

  const httpServer = createServer(app);
  return httpServer;
}