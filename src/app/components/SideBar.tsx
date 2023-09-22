/** @format */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  select,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  const router = useRouter();
  return (
    <Card className='hidden xl:flex h-[calc(100vh-4rem)] rounded-none bg-[#fff] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <List>
        <ListItem
          onClick={() => {
            router.push("/admin/dashboard");
          }}>
          <ListItemPrefix>
            <HomeIcon className='h-5 w-5' />
          </ListItemPrefix>
          Dashboard
        </ListItem>

        <ListItem
          onClick={() => {
            router.push("/admin/category");
          }}>
          <ListItemPrefix>
            <ShoppingBagIcon className='h-5 w-5' />
          </ListItemPrefix>
          Categoria
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <InboxIcon className='h-5 w-5' />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className='h-5 w-5' />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className='h-5 w-5' />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
