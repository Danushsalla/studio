export type Employee = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  team: string;
};

export type LeaveRequest = {
  id: string;
  employeeName: string;
  employeeId: string;
  startDate: Date;
  endDate: Date;
  type: 'Vacation' | 'Sick Leave' | 'Personal';
  status: 'Pending' | 'Approved' | 'Denied';
};

export type PerformanceReview = {
  id: string;
  date: Date;
  summary: string;
  rating: number; // out of 5
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  reviews: PerformanceReview[];
};

export type Document = {
  id: string;
  name: string;
  type: 'PDF' | 'Word' | 'Spreadsheet';
  lastModified: Date;
  size: string;
};

export type OnboardingStep = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};
