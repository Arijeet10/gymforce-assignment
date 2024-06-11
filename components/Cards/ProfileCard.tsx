import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const ProfileCard = () => {
  return (
    <>
      <div >
        <Card className="">
          <CardHeader className="bg-[#d4dbf9] text-[#567de9]">
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription className="text-[#567de9]">
              Gymforce Dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex justify-between">
              <div className="absolute z-50 -top-5 ">
                <div className="p-2 h-20 w-20 border bg-[#FFFFFF] rounded-full flex items-center justify-between ">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="">
                  <div>Henry Pri...</div>
                  <div>UI/UX Desi...</div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div>125</div>
                      <div>Projects</div>
                    </div>
                    <div>
                      <div>$1245</div>
                      <div>Revenue</div>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button variant={"blue"} className="flex items-center">
                      <div>View Profile</div>
                      <div>
                        <ChevronRight />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileCard;
