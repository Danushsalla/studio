'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { analyzeAbsenceData } from '@/ai/flows/analyze-absence-data';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BrainCircuit } from 'lucide-react';

const formSchema = z.object({
  historicalAbsenceData: z
    .string()
    .min(1, 'Historical absence data is required.'),
  seasonalityData: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function AnalyzerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      historicalAbsenceData: 'date,employee_id,reason\n2023-01-15,E101,Sick\n2023-01-16,E102,Personal\n2023-07-20,E101,Vacation',
      seasonalityData: '{\n  "winter": 1.2,\n  "summer": 1.5\n}',
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const analysis = await analyzeAbsenceData(data);
      setResult(analysis);
    } catch (e: any) {
      setError('An error occurred during analysis. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="historicalAbsenceData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Historical Absence Data (CSV)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="date,employee_id,reason..."
                      className="h-48 font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seasonalityData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seasonality Data (JSON, Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='{ "winter": 1.2, "summer": 1.5 }'
                      className="h-48 font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze Data'}
          </Button>
        </form>
      </Form>

      {loading && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 animate-pulse" />
              AI Analysis in Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      )}

      {error && <p className="mt-4 text-destructive">{error}</p>}

      {result && (
        <Card className="mt-8 bg-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Analysis Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap font-sans text-sm">{result}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
