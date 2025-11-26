import { AppLayout } from '@/components/layout/app-layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/data';
import { PlusCircle, Star } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

export default function PerformancePage() {
  return (
    <AppLayout pageTitle="Performance Reviews">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>My Team</CardTitle>
            <CardDescription>Manage performance reviews for your direct reports.</CardDescription>
          </div>
           <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Start New Review Cycle
          </Button>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {teamMembers.map((member) => (
              <AccordionItem value={`item-${member.id}`} key={member.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person face" />
                      <AvatarFallback>{member.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">Review History</h4>
                        <Button variant="outline" size="sm">
                            <PlusCircle className="mr-2 h-4 w-4" /> New Review
                        </Button>
                    </div>
                    {member.reviews.length > 0 ? (
                      <div className="space-y-4">
                        {member.reviews.map((review) => (
                          <div key={review.id} className="p-4 border rounded-md bg-secondary/50">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-sm text-muted-foreground">{format(review.date, 'PPP')}</p>
                                <p className="mt-1 text-sm">{review.summary}</p>
                              </div>
                              <Rating value={review.rating} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No reviews found for {member.name}.
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
