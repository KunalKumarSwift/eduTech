import { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export interface StatsCardProps {
  title: string;
  value: string;
  trend?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export interface TabItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface TabGroupProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}
