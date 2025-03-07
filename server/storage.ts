import { visits, type Visit, type InsertVisit } from "@shared/schema";

export interface IStorage {
  incrementVisit(page: string): Promise<number>;
  getVisitCount(page: string): Promise<number>;
}

export class MemStorage implements IStorage {
  private visits: Map<string, number>;

  constructor() {
    this.visits = new Map();
  }

  async incrementVisit(page: string): Promise<number> {
    const currentCount = this.visits.get(page) || 0;
    const newCount = currentCount + 1;
    this.visits.set(page, newCount);
    return newCount;
  }

  async getVisitCount(page: string): Promise<number> {
    return this.visits.get(page) || 0;
  }
}

export const storage = new MemStorage();