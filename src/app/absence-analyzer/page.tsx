import { AppLayout } from '@/components/layout/app-layout';
import { AnalyzerForm } from '@/components/absence-analyzer/analyzer-form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function AbsenceAnalyzerPage() {
  return (
    <AppLayout pageTitle="Absence Analyzer">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Staffing Suggestions</CardTitle>
          <CardDescription>
            Use historical absence data to predict future staffing needs. Provide
            data in the specified formats to get an analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnalyzerForm />
        </CardContent>
      </Card>
    </AppLayout>
  );
}
