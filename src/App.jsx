import { Button } from './components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"


import './App.css'

function App() {

  return (
    <>
      <div className=''>
        <Menubar>
          <Avatar>
            <AvatarImage src="https://github.com/account" />
            <AvatarFallback>Hi!</AvatarFallback>
          </Avatar>

          <Separator orientation="vertical" />

          <MenubarMenu>
            <MenubarTrigger>Dropdown1</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <Separator orientation="vertical" />

          <MenubarMenu>
            <MenubarTrigger>Dropdown2</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <div className='flex right-0'>
            <div className='flex px-2 mx-2'>
              Darkmode
            </div>
            <Switch />
          </div>
        </Menubar>
      </div>
      <h1 className='flex-row pl-7 pt-4 '>Bookmarks</h1>
      <div className="flex-row h-[100vh] space-y-2 rounded-md border bg-background p-2 mx-5 my-2">
        <Skeleton className="h-4 w-[100%]" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[50%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[67%]" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </>
  )
}

export default App
