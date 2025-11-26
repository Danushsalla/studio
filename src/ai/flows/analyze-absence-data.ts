'use server';

/**
 * @fileOverview AI-powered tool that uses historical absence data to suggest future staffing needs, considering seasonality and trends.
 *
 * - analyzeAbsenceData - A function that handles the analysis of absence data.
 * - AnalyzeAbsenceDataInput - The input type for the analyzeAbsenceData function.
 * - AnalyzeAbsenceDataOutput - The return type for the analyzeAbsenceData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeAbsenceDataInputSchema = z.object({
  historicalAbsenceData: z
    .string()
    .describe(
      'Historical absence data in CSV format, including dates, employee IDs, and absence reasons.'
    ),
  seasonalityData: z
    .string()
    .optional()
    .describe(
      'Seasonality data in JSON format, indicating the impact of different seasons on absence rates. Example: { "winter": 1.2, "summer": 1.5 }'
    ),
});
export type AnalyzeAbsenceDataInput = z.infer<
  typeof AnalyzeAbsenceDataInputSchema
>;

export type AnalyzeAbsenceDataOutput = string;

export async function analyzeAbsenceData(
  input: AnalyzeAbsenceDataInput
): Promise<AnalyzeAbsenceDataOutput> {
  return analyzeAbsenceDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeAbsenceDataPrompt',
  input: {schema: AnalyzeAbsenceDataInputSchema},
  prompt: `You are an HR analyst expert. Analyze the provided historical absence data and seasonality trends to suggest future staffing needs.

Historical Absence Data (CSV):
{{{historicalAbsenceData}}}

Seasonality Data (JSON):
{{{seasonalityData}}}

Based on this data, provide a concise analysis and actionable staffing suggestions for the upcoming periods. Focus on identifying patterns and predicting potential understaffing.`,
});

const analyzeAbsenceDataFlow = ai.defineFlow(
  {
    name: 'analyzeAbsenceDataFlow',
    inputSchema: AnalyzeAbsenceDataInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const {text} = await prompt(input);
    return text;
  }
);
