
'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getAIInsightAction } from '@/app/(main)/analysis/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Insight'}
    </Button>
  );
}

export function AiInsightGenerator() {
  const [state, formAction] = useFormState(getAIInsightAction, initialState);

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Textarea
            id="topic"
            name="topic"
            placeholder="e.g., 'Analyze the impact of the new offside rule in the Premier League' or 'Compare the playing styles of Messi and Ronaldo'"
            rows={3}
            required
            aria-describedby="topic-error"
          />
          {state.errors?.topic && (
            <p id="topic-error" className="text-sm font-medium text-destructive">
              {state.errors.topic[0]}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>

      {state.message && state.message !== 'Validation failed.' && !state.data && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <Card>
          <CardContent className="p-6">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>AI Generated Insight</AlertTitle>
                <AlertDescription className="prose prose-sm dark:prose-invert mt-2 whitespace-pre-wrap">
                    {state.data}
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
