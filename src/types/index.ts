import { ReactNode } from "react";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isSpecial?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  itemsCount: ReactNode;
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  type: 'wine-night' | 'chef-special' | 'live-music' | 'seasonal'| 'festival' | 'food-event' | 'entertainment';
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}