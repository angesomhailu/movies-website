import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//hc4c8@3WhZVrtRY
//mongodb+srv://movies-website:<db_password>@cluster0.miam60b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0