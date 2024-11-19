export interface Stat {
  name: string;
  value: string;
  icon: any; // Replace with proper icon type
  trend: string;
  color: string;
}

export interface Activity {
  id: number;
  name: string;
  date: string;
  type: "submission" | "attendance" | "grade"; // Update this to use literal types
  course: string;
}
