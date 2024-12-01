"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Activity,
  ChartNoAxesCombined,
  Lightbulb,
  Settings,
  UsersRound,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "../icon.png";

// Menu items.
const items = [
  {
    title: "Reports",
    url: "#",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Library",
    url: "#",
    icon: Zap,
  },
  {
    title: "People",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Activities",
    url: "#",
    icon: Activity,
  },
];
const items2 = [
  {
    title: "Get Started",
    url: "#",
    icon: Lightbulb,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
export function AppSidebar() {
  const path = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();
  useEffect(() => {
    if (path === "/thankyou") {
      setIsSidebarOpen(false);
    } else {
      true;
    }
  }, []);

  if (isSidebarOpen === false) return null;

  return (
    <Sidebar className="">
      <SidebarHeader className="h-14 px-10">
        <div className="relative h-full">
          <Image
            src={Icon}
            fill
            className="flex-1 object-contain"
            alt="Tesla Image"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base">Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex h-28 border-t-2">
        <div className="relative h-8 w-8 bg-blue-100 rounded-full">
          <Image
            src={Icon}
            fill
            className="flex-1 object-contain rounded-full"
            alt="Tesla Image"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold ">Sam Wheeler</span>
          <span className="!text-xs text-gray-700">samwheeler@example.com</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
