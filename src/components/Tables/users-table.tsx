"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { CrossIcon, MarkIcon } from "./icons";
import { updateQuoteStatus } from "@/services/UpdateServices";
import { getUsers } from "@/services/getUsersService";
import Image from "next/image";

export default function UsersTable() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const { users } = await getUsers();
    setData(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="rounded-[10px] border bg-white p-4 shadow-1 sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Updated Profile</TableHead>
            <TableHead>Profile Picture</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                {dayjs(item.date_of_birth).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell>
                {dayjs(item.created_at).format("MMM DD, YYYY")}
              </TableCell>

              <TableCell>
                {dayjs(item.updated_at).format("MMM DD, YYYY")}
              </TableCell>

              <TableCell>
                {item.profile_picture?
                (
                    <img
                      src={item.profile_picture}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                ):(
                    <span>No Image</span>
                )}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
