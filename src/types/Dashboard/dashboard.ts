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
  type: string;
  course: string;
}
