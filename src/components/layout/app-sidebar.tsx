'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Home,
  Users,
  CalendarDays,
  Star,
  BrainCircuit,
  Folder,
  UserPlus,
  Settings,
  LogOut,
  Mountain,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/employees', label: 'Employees', icon: Users },
  { href: '/leave', label: 'Leave', icon: CalendarDays },
  { href: '/performance', label: 'Performance', icon: Star },
  { href: '/documents', label: 'Documents', icon: Folder },
  { href: '/onboarding', label: 'Onboarding', icon: UserPlus },
  { href: '/absence-analyzer', label: 'Absence Analyzer', icon: BrainCircuit },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader className="h-16 justify-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="w-8 h-8 text-sidebar-primary" />
          <span className="font-bold text-lg text-sidebar-foreground group-data-[state=collapsed]:hidden">
            TaskFlow
          </span>
        </Link>
      </SidebarHeader>
      <SidebarMenu className="flex-1 p-2">
        {menuItems.map(({ href, label, icon: Icon }) => (
          <SidebarMenuItem key={href}>
            <Link href={href}>
              <SidebarMenuButton
                isActive={pathname === href}
                tooltip={label}
                className="justify-start"
              >
                <Icon />
                <span>{label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="justify-start" tooltip="Settings">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <div className="flex items-center p-2 gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/9/100/100" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[state=collapsed]:hidden">
                <span className="text-sm font-semibold text-sidebar-foreground">Admin</span>
                <span className="text-xs text-sidebar-foreground/70">Logout</span>
              </div>
              <LogOut className="ml-auto h-5 w-5 text-sidebar-foreground/70 group-data-[state=collapsed]:hidden" />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
