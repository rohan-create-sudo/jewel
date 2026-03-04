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
    if (!db) {
      throw new Error("Database is not configured");
    }

    const [newSubscriber] = await db.insert(newsletterSubscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async saveContactMessage(message: InsertContact): Promise<ContactMessage> {
    if (!db) {
      throw new Error("Database is not configured");
    }

    const [newMessage] = await db.insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }
}

class MemoryStorage implements IStorage {
  private nextSubscriberId = 1;
  private nextMessageId = 1;
  private subscribers: NewsletterSubscriber[] = [];
  private messages: ContactMessage[] = [];

  async subscribeNewsletter(
    subscriber: InsertNewsletter,
  ): Promise<NewsletterSubscriber> {
    const existing = this.subscribers.find((item) => item.email === subscriber.email);
    if (existing) {
      return existing;
    }

    const newSubscriber: NewsletterSubscriber = {
      id: this.nextSubscriberId++,
      email: subscriber.email,
      subscribedAt: new Date(),
    };

    this.subscribers.push(newSubscriber);
    return newSubscriber;
  }

  async saveContactMessage(message: InsertContact): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: this.nextMessageId++,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: new Date(),
    };

    this.messages.push(newMessage);
    return newMessage;
  }
}

export const storage = db ? new DatabaseStorage() : new MemoryStorage();
