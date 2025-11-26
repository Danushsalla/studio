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
      'Seasonality data in JSON format, indicating the impact of different seasons on absence rates. Example: {\