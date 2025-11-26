import { AppSidebar } from './app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Header } from './header';

export function AppLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header title={pageTitle} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
