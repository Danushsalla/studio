import type { Employee, LeaveRequest, TeamMember, Document, OnboardingStep } from './types';

export const employees: Employee[] = [
  { id: '1', name: 'Alice Johnson', role: 'Software Engineer', email: 'alice.j@example.com', phone: '123-456-7890', avatar: 'https://picsum.photos/seed/1/100/100', team: 'Engineering' },
  { id: '2', name: 'Bob Williams', role: 'Product Manager', email: 'bob.w@example.com', phone: '123-456-7891', avatar: 'https://picsum.photos/seed/2/100/100', team: 'Product' },
  { id: '3', name: 'Charlie Brown', role: 'UI/UX Designer', email: 'charlie.b@example.com', phone: '123-456-7892', avatar: 'https://picsum.photos/seed/3/100/100', team: 'Design' },
  { id: '4', name: 'Diana Prince', role: 'HR Manager', email: 'diana.p@example.com', phone: '123-456-7893', avatar: 'https://picsum.photos/seed/4/100/100', team: 'HR' },
  { id: '5', name: 'Ethan Hunt', role: 'QA Tester', email: 'ethan.h@example.com', phone: '123-456-7894', avatar: 'https://picsum.photos/seed/5/100/100', team: 'Engineering' },
  { id: '6', name: 'Fiona Glenanne', role: 'Marketing Lead', email: 'fiona.g@example.com', phone: '123-456-7895', avatar: 'https://picsum.photos/seed/6/100/100', team: 'Marketing' },
  { id: '7', name: 'George Costanza', role: 'Sales Representative', email: 'george.c@example.com', phone: '123-456-7896', avatar: 'https://picsum.photos/seed/7/100/100', team: 'Sales' },
  { id: '8', name: 'Hannah Montana', role: 'Frontend Developer', email: 'hannah.m@example.com', phone: '123-456-7897', avatar: 'https://picsum.photos/seed/8/100/100', team: 'Engineering' },
];

export const leaveRequests: LeaveRequest[] = [
  { id: 'lr1', employeeName: 'Alice Johnson', employeeId: '1', startDate: new Date('2024-08-01'), endDate: new Date('2024-08-05'), type: 'Vacation', status: 'Approved' },
  { id: 'lr2', employeeName: 'Bob Williams', employeeId: '2', startDate: new Date('2024-08-10'), endDate: new Date('2024-08-12'), type: 'Personal', status: 'Pending' },
  { id: 'lr3', employeeName: 'Charlie Brown', employeeId: '3', startDate: new Date('2024-07-20'), endDate: new Date('2024-07-21'), type: 'Sick Leave', status: 'Approved' },
  { id: 'lr4', employeeName: 'Ethan Hunt', employeeId: '5', startDate: new Date('2024-09-01'), endDate: new Date('2024-09-10'), type: 'Vacation', status: 'Denied' },
  { id: 'lr5', employeeName: 'Alice Johnson', employeeId: '1', startDate: new Date('2024-09-15'), endDate: new Date('2024-09-16'), type: 'Sick Leave', status: 'Pending' },
];

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Alice Johnson',
        role: 'Software Engineer',
        avatar: 'https://picsum.photos/seed/1/100/100',
        reviews: [
            { id: 'r1', date: new Date('2024-01-15'), summary: 'Excellent performance, exceeded all targets.', rating: 5 },
            { id: 'r2', date: new Date('2023-07-20'), summary: 'Met expectations, good team player.', rating: 4 },
        ]
    },
    {
        id: '5',
        name: 'Ethan Hunt',
        role: 'QA Tester',
        avatar: 'https://picsum.photos/seed/5/100/100',
        reviews: [
            { id: 'r3', date: new Date('2024-02-01'), summary: 'Good attention to detail, but needs to improve on automation testing skills.', rating: 3 },
        ]
    },
    {
        id: '8',
        name: 'Hannah Montana',
        role: 'Frontend Developer',
        avatar: 'https://picsum.photos/seed/8/100/100',
        reviews: []
    }
];

export const documents: Document[] = [
  { id: 'doc1', name: 'Employee Handbook 2024', type: 'PDF', lastModified: new Date('2024-01-10'), size: '2.5 MB' },
  { id: 'doc2', name: 'Q3 Financial Report', type: 'Spreadsheet', lastModified: new Date('2024-07-05'), size: '1.2 MB' },
  { id: 'doc3', name: 'Marketing Strategy Q4', type: 'Word', lastModified: new Date('2024-06-28'), size: '800 KB' },
  { id: 'doc4', name: 'Remote Work Policy', type: 'PDF', lastModified: new Date('2023-11-15'), size: '500 KB' },
];

export const onboardingSteps: OnboardingStep[] = [
    { id: 'ob1', title: 'Prepare Paperwork', description: 'Send offer letter, tax forms, and employment agreement.', completed: true },
    { id: 'ob2', title: 'Set Up Workspace', description: 'Arrange desk, computer, and necessary hardware.', completed: true },
    { id: 'ob3', title: 'Configure Accounts', description: 'Create email, Slack, and other necessary software accounts.', completed: false },
    { id: 'ob4', title: 'Schedule Orientation', description: 'Plan HR orientation and team introduction meetings.', completed: false },
    { id: 'ob5', title: 'Assign a Buddy', description: 'Pair the new hire with a team member for guidance.', completed: false },
];
