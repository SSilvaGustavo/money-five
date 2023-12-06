import { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export function LogoutButton() {
  const [isActive, setIsActive] = useState(false);
  const { isMobile } = useContext(AppContext);
  const { data: session } = useSession();

  return (
    <div
      className="flex items-center justify-center relative text-left"
      title="Language"
    >
      <DropdownMenu.Root onOpenChange={() => setIsActive(!isActive)}>
        <DropdownMenu.Trigger className="flex items-center justify-center hover:scale-105 transition-all px-2">
          <img
            src={session?.user?.image!}
            alt="Profile Pic"
            className="h-8 w-h-8 rounded-full mr-2"
            referrerPolicy="no-referrer"
          />
          <span className="text-sm">{session?.user?.name}</span>
          <MdOutlineKeyboardArrowDown className={`${isActive ? 'rotate-180' : 'rotate-0'} transition-all`}/>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align={`${isMobile ? "center" : "end"}`}
            sideOffset={5}
            className={`w-32 rounded-lg px-1.5 py-1 z-50`}
          >
            <DropdownMenu.Item
              className="select-none cursor-pointer font-medium items-center rounded-md px-2 py-2 text-sm outline-none bg-primary-100 text-white transition-colors"
              onClick={() => signOut()}
            >
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
