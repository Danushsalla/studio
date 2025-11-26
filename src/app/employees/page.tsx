import Image from 'next/image';
import { AppLayout } from '@/components/layout/app-layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { employees } from '@/lib/data';

export default function EmployeeDirectoryPage() {
  return (
    <AppLayout pageTitle="Employee Directory">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <Card key={employee.id} className="flex flex-col">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={employee.avatar} alt={employee.name} data-ai-hint="person face" />
                <AvatarFallback>
                  {employee.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline">{employee.name}</CardTitle>
              <CardDescription>{employee.role}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end text-sm text-muted-foreground">
                <div className="space-y-2">
                    <div className='flex items-center gap-2'>
                        <Mail className="h-4 w-4"/>
                        <a href={`mailto:${employee.email}`} className="hover:text-primary">{employee.email}</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Phone className="h-4 w-4"/>
                        <span>{employee.phone}</span>
                    </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
