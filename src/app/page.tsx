import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Users,
  CalendarDays,
  Star,
  BrainCircuit,
  Folder,
  UserPlus,
} from 'lucide-react';
import { AppLayout } from '@/components/layout/app-layout';

const features = [
  {
    title: 'Employee Directory',
    description: 'Browse and manage employee profiles.',
    href: '/employees',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Leave Requests',
    description: 'Submit and approve leave applications.',
    href: '/leave',
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Performance Reviews',
    description: 'Conduct and track employee reviews.',
    href: '/performance',
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Document Repository',
    description: 'Store and share company documents.',
    href: '/documents',
    icon: <Folder className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Employee Onboarding',
    description: 'Guide new hires through the process.',
    href: '/onboarding',
    icon: <UserPlus className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Absence Analyzer',
    description: 'AI-powered staffing suggestions.',
    href: '/absence-analyzer',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  },
];

export default function DashboardPage() {
  return (
    <AppLayout pageTitle="Dashboard">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <div className="flex-1">
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </AppLayout>
  );
}
