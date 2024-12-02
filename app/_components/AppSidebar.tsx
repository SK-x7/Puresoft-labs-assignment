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
  useSidebar,
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "../icon.png";

// Menu items.
const items = [
  {
    title: "Reports",
    url: "/dashboard",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Library",
    url: "/library",
    icon: Zap,
  },
  {
    title: "People",
    url: "/people",
    icon: UsersRound,
  },
  {
    title: "Activities",
    url: "/activities",
    icon: Activity,
  },
];
const items2 = [
  {
    title: "Get Started",
    url: "/get-started",
    icon: Lightbulb,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
export function AppSidebar() {
  const path = usePathname();
  const {toggleSidebar,isMobile}=useSidebar();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();
  useEffect(() => {
    if (path&&path === "/thankyou") {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [path]);

  if (isSidebarOpen === false) return null;
  
  function handleClick(){
    if(isMobile){
      toggleSidebar();
    }
  }

  return (
    <Sidebar className="!bg-gray-200/50">
      <div className="h-full !bg-gray-200/50">
      <div className=" h-full flex flex-col bg-white !rounded-e-3xl">
      <div className="pt-3">
        
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
      </div>
      <div className="flex flex-col justify-between  flex-1">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="px-5">
                  <SidebarMenuButton asChild className={`font-normal rounded-lg text-base py-5 hover:bg-blue-500 hover:text-white ${path===item.url?"text-blue-600 bg-blue-200/50":''}`} onClick={handleClick}>
                    <Link href={item.url} className="flex gap-4">
                      <item.icon size={36} />
                      {/* <Activity size={36} /> */}
                      <span>{item.title}</span>

                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold mb-5 px-10">Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {items2.map((item) => (
                <SidebarMenuItem key={item.title} className="px-5">
                  <SidebarMenuButton asChild className={`font-normal rounded-lg text-base py-5 hover:bg-blue-500 hover:text-white ${path===item.url?"text-blue-600 bg-blue-200/50":''}`} onClick={handleClick}>
                    <Link href={item.url} className="gap-4">
                      <item.icon size={36}/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex h-36 px-9 justify-center items-center">
        <div className="border-t-2 px-1 pt-6 flex flex-col gap-3" >
          
        <div className="relative h-8 w-8 bg-blue-100 rounded-full">
          <Image
            src={Icon}
            fill
            className="flex-1 object-contain rounded-full"
            alt="Tesla Image"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Sam Wheeler</span>
          <span className="!text-xs text-gray-700">samwheeler@example.com</span>
        </div>
            </div>
      </SidebarFooter>
      </div>
    </div >
    </div>
    </Sidebar>
  );
}
