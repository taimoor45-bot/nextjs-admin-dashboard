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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    const { quotes } = await getQuotes();
    setQuotes(quotes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id: string) => {
    const updated = await updateQuoteStatus(id, true);
    if (updated) {
      setQuotes((prev) =>
        prev.map((data) =>
          data.id === id ? { ...data, is_approved: true } : data,
        ),
      );
    }
  };

  const handleReject = async (id: string) => {
    const updated = await updateQuoteStatus(id, false);
    if (updated) {
      setQuotes((prev) =>
        prev.map((data) =>
          data.id === id ? { ...data, is_approved: false } : data,
        ),
      );
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = quotes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(quotes.length / itemsPerPage);

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
          {currentItems.map((item) => (
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

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded border px-3 py-1 ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
