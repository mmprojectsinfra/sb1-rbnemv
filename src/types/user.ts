export type UserRole = 'customer' | 'employee' | 'manager' | 'ceo';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  joinDate?: string;
}

export interface WorkProgress {
  id: string;
  projectId: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed';
  completionPercentage: number;
  lastUpdated: string;
  notes: string;
  assignedTo: string;
}

export interface BusinessMetrics {
  totalRevenue: number;
  projectsCompleted: number;
  activeProjects: number;
  customerSatisfaction: number;
  employeePerformance: number;
}

export interface ProjectStatus {
  id: string;
  title: string;
  client: string;
  startDate: string;
  deadline: string;
  status: 'pending' | 'in-progress' | 'completed' | 'delayed';
  budget: number;
  spent: number;
  team: string[];
  progress: number;
}