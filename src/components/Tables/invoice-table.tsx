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
import { getQuotes } from "@/services/getQuoteService";
import { updateQuoteStatus } from "@/services/UpdateServices";

export default function InvoiceTable() {
  const [quotes, setQuotes] = useState<any[]>([]);

  const fetchData = async () => {
    const { quotes } = await getQuotes();
    setQuotes(quotes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id: string) => {
    console.log("handle Approve");

    const updated = await updateQuoteStatus(id, true);

    if (updated) {
      console.log("Working");

      setQuotes((prev) =>
        prev.map((data) =>
          data.id === id ? { ...data, is_approved: true } : data,
        ),
      );
    }
  };

  const handleReject = async (id: string) => {
    console.log("handle Reject");
    const updated = await updateQuoteStatus(id, false);
    if (updated) {
      setQuotes((prev) =>
        prev.map((data) =>
          data.id === id ? { ...data, is_approved: false } : data,
        ),
      );
    }
  };

  return (
    <div className="rounded-[10px] border bg-white p-4 shadow-1 sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Quote</TableHead>
            <TableHead>Author Name</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {quotes.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.uuid}</TableCell>
              <TableCell>{item.quote}</TableCell>
              <TableCell>{item.auther_name}</TableCell>
              <TableCell>
                {dayjs(item.created_at).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell>
                <div
                  className={cn(
                    "rounded-full px-3 py-1 text-center text-sm font-medium",
                    {
                      "bg-green-100 text-green-600": item.is_approved === true,
                      "bg-red-100 text-red-600": item.is_approved === false,
                    },
                  )}
                >
                  {item.is_approved ? "True" : "False"}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex gap-2">
                  <button onClick={() => handleApprove(item.id)}>
                    <MarkIcon />
                  </button>
                  <button onClick={() => handleReject(item.id)}>
                    <CrossIcon />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
