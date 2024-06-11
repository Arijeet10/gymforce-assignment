"use client"

import {
  Bell,
  ChevronDown,
  LayoutGrid,
  Maximize,
  Menu,
  Search,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { SetStateAction } from "react";

const Navbar = ({sidebar,setSidebar}:{sidebar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>}) => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <section className="hidden  sm:flex items-center gap-4">
          <div onClick={()=>(setSidebar(!sidebar))} className="p-2 rounded-full hover:bg-[#f8f8fb]">
            <Menu />
          </div>
          <div className="p-2 flex w-full items-center gap-2 border rounded-full">
            <Search />

            <input
              type="text"
              placeholder="Search"
              className="w-full focus:outline-none"
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center">
                  <div className="text-nowrap">Mega Menu</div>
                  <div>
                    <ChevronDown />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
        <section className="w-full sm:w-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/united-states.png"
                alt=""
                width={100}
                height={100}
                className="w-5 h-5 object-cover"
              />
            </div>
            <div>
              <LayoutGrid />
            </div>
            <div>
              <Maximize />
            </div>
            <div>
              <Bell />
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center">
                    <div>Admin</div>
                    <div>
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Settings />
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
