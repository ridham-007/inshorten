export type ActionResponse<T> = {
  success: boolean;
  errors?: string;
  data?: T;
} | null;

export interface Article {
  title: string;
  featureImage: string;
  createdAt?: string;
  slug: string;
  content: any;
  description?:string;
  category?: {
    name: string;
  }
}
