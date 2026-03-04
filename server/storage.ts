import { db } from "./db";
import {
  newsletterSubscribers,
  contactMessages,
  type InsertNewsletter,
  type InsertContact,
  type NewsletterSubscriber,
  type ContactMessage
} from "@shared/schema";

export interface IStorage {
  subscribeNewsletter(subscriber: InsertNewsletter): Promise<NewsletterSubscriber>;
  saveContactMessage(message: InsertContact): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async subscribeNewsletter(subscriber: InsertNewsletter): Promise<NewsletterSubscriber> {
    const [newSubscriber] = await db.insert(newsletterSubscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async saveContactMessage(message: InsertContact): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
