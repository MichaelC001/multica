"use client";

import { cn } from "@multica/ui/lib/utils";
import { SidebarTrigger } from "@multica/ui/components/ui/sidebar";

interface PageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <div className={cn("flex h-12 shrink-0 items-center border-b px-4", className)}>
      <SidebarTrigger className="mr-2 md:hidden" />
      {children}
    </div>
  );
}
