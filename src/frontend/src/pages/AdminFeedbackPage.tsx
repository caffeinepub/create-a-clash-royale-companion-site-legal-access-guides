import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserRole, useGetAllFeedback } from '../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, Mail, User, MessageSquare, Shield } from 'lucide-react';

export default function AdminFeedbackPage() {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userRole, isLoading: roleLoading } = useGetCallerUserRole();
  const { data: feedback, isLoading: feedbackLoading } = useGetAllFeedback();

  const isAuthenticated = !!identity;
  const isAdmin = userRole === 'admin';

  // Show loading state while checking authentication
  if (isInitializing || roleLoading) {
    return (
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Authentication Required</AlertTitle>
            <AlertDescription>
              Please log in using the Login button in the header to access the admin panel.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You do not have permission to view this page. Admin access is required to view feedback
              submissions.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Admin Panel</h1>
          <p className="text-lg text-muted-foreground">Review feedback submissions from users</p>
        </div>

        {feedbackLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        ) : !feedback || feedback.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No feedback submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Total submissions: <span className="font-semibold text-foreground">{feedback.length}</span>
            </p>
            {feedback.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Feedback #{feedback.length - index}
                  </CardTitle>
                  <CardDescription className="space-y-1">
                    {item.name && (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{item.name}</span>
                      </div>
                    )}
                    {item.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{item.email}</span>
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm whitespace-pre-wrap">{item.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
