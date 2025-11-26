'use client';

import * as React from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { onboardingSteps as initialSteps } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

export default function OnboardingPage() {
  const [steps, setSteps] = React.useState(initialSteps);

  const handleCheckedChange = (stepId: string) => {
    setSteps(
      steps.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const completedCount = steps.filter((step) => step.completed).length;
  const progressPercentage = (completedCount / steps.length) * 100;

  return (
    <AppLayout pageTitle="Employee Onboarding">
      <Card>
        <CardHeader>
          <CardTitle>New Hire Onboarding Checklist</CardTitle>
          <CardDescription>
            Guide a new employee through their first days.
          </CardDescription>
           <div className="flex items-center gap-4 pt-2">
            <Progress value={progressPercentage} className="w-[60%]" />
            <span className="text-sm text-muted-foreground">{completedCount} of {steps.length} steps completed</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-start space-x-4">
                  <Checkbox
                    id={step.id}
                    checked={step.completed}
                    onCheckedChange={() => handleCheckedChange(step.id)}
                    className="mt-1 h-5 w-5"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor={step.id}
                      className={`text-base font-medium ${
                        step.completed ? 'line-through text-muted-foreground' : ''
                      }`}
                    >
                      {step.title}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
