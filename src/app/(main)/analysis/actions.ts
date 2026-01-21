
'use server';

import { generateAISportsInsights, GenerateAISportsInsightsInput } from '@/ai/flows/generate-ai-sports-insights';
import { z } from 'zod';

const schema = z.object({
  topic: z.string().min(10, 'Please enter a more detailed topic.'),
});

export async function getAIInsightAction(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
      data: null,
    };
  }

  try {
    const result = await generateAISportsInsights(validatedFields.data as GenerateAISportsInsightsInput);
    return {
        errors: {},
        message: 'Insights generated successfully.',
        data: result.insights,
    };
  } catch (e) {
    console.error(e);
    return {
        errors: {},
        message: 'An error occurred while generating insights. Please try again.',
        data: null,
    };
  }
}
