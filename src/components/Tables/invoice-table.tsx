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

export default async function InvoiceTable() {
  const { quotes } = await getQuotes();

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead className="min-w-[155px] xl:pl-7.5">ID</TableHead>
            <TableHead>Quotation ID</TableHead>
            <TableHead>Quote</TableHead>
            <TableHead>Author Name</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {quotes.map((item) => (
            <TableRow
              key={item.id}
              className="border-[#eee] dark:border-dark-3"
            >
              <TableCell className="min-w-[155px] xl:pl-7.5">
                <h5 className="text-dark dark:text-white">{item.user?.name}</h5>
                <p className="mt-[3px] text-body-sm font-medium">{item.uuid}</p>
              </TableCell>
              <TableCell>
                <p className="text-dark dark:text-white">{item.id}</p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">{item.quote}</p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">{item.auther_name}</p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">
                  {dayjs(item.created_at).format("MMM DD, YYYY")}
                </p>
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "max-w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                    {
                      "bg-[#219653]/[0.08] text-[#219653]":
                        item.is_approved === true,
                      "bg-[#D34053]/[0.08] text-[#D34053]":
                        item.is_approved === false,
                    },
                  )}
                >
                  {item.is_approved ? "Approved" : "Pending"}
                </div>
              </TableCell>

              <TableCell className="xl:pr-7.5">
                <div className="flex items-center justify-end gap-x-3.5">
                  <button className="hover:text-primary">
                    <span className="sr-only">Mark Invoice</span>
                    <MarkIcon />
                  </button>

                  <button className="hover:text-primary">
                    <span className="sr-only">Delete Invoice</span>
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
