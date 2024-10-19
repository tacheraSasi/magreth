import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { auth } from "@/app/(auth)/auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ApplicationError extends Error {
  info: string;
  status: number;
}

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data.",
    ) as ApplicationError;

    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
};

export function getLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
  return [];
}

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function playSound(audioPath:string,soundType:string=""){
  const sound = new Audio(audioPath)

  sound.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
  console.log("sound played")

}

export function vibrate(length:number) {
  if ('vibrate' in navigator) {
    navigator.vibrate(length);
  } else {
    console.log("Vibration not supported on this device.");
  }
}

export function getCurrentDateTime(){
  "use client"
  let date = new Date().toLocaleString()
  return date
}

export function speechToText(){

}


