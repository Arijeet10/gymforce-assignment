"use client";

import { Home, ChevronDown, ChevronUp, Calendar, MessageSquare, File, Store, Bitcoin, Mail, ReceiptText, BriefcaseBusiness, ClipboardCheck, Contact, Text, Briefcase, User, FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {

  const pathname=usePathname()

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full h-full flex flex-col  gap-4 bg-[#2a3042] text-[#7b8497]">
        <section className="text-center">
          <div className="">GYMFORCE</div>
        </section>
        <section className="px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div>Menu</div>
            <div className="flex flex-col gap-4">
              <div className={`flex items-center justify-between ${pathname=='/dashboard'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>
                <div className="flex items-center gap-2">
                  <div>
                    <Home />
                  </div>
                  <div>Dashboard</div>
                </div>

                <div className="">
                  {dropdown ? (
                    <ChevronUp onClick={() => setDropdown(false)} />
                  ) : (
                    <ChevronDown onClick={() => setDropdown(true)} />
                  )}
                </div>
              </div>
              {dropdown && (
                <div className="pl-8 flex flex-col gap-4 items-start">
                  <Link href="/" className={`${pathname=='/'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>Default</Link>
                  <Link href="/dashboard/saas" className={`${pathname=='/dashboard/saas'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>SAAS</Link>
                  <Link href="/dashboard/crypto" className={`${pathname=='/dashboard/crypto'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>Crypto</Link>
                  <Link href="/dashboard/blog" className={`${pathname=='/dashboard/blog'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>Blog</Link>
                  <Link href="/dashboard/job" className={`${pathname=='/dashboard/job'?'text-[#FFFFFF]':'text-[#7b8497]'}`}>Job</Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>APPS</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div><Calendar /></div>
                <div>Calendar</div>
              </div>
              <div className="flex items-center gap-2">
                <div><MessageSquare /></div>
                <div>Chat</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <File />
                </div>
                <div>File Manager</div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                <div><Store /></div>
                <div>Ecommerce</div>
                </div>

                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><Bitcoin /></div>
                  <div>
                    Cryto
                  </div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><Mail /></div>
                  <div>Email</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><ReceiptText /></div>
                  <div>Invoice</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><Briefcase /></div>
                  <div>Project</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex item-center gap-2">
                  <div>
                    <ClipboardCheck />
                  </div>
                  <div>
                    Tasks
                  </div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Contact />
                  </div>
                  <div>Contacts</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><Text /></div>
                  <div>Blog</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <BriefcaseBusiness />
                  </div>
                  <div>Job</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>PAGES</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><User /></div>
                  <div>Authentication</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div><FileSpreadsheet /></div>
                  <div>Utility</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
