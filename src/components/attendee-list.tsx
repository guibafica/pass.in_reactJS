import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import { IconButton } from "./icon-button";

import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendees</h1>

        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input
            type="text"
            placeholder="Search for attendees..."
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0"
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400"
              />
            </TableHeader>

            <TableHeader>Code</TableHeader>
            <TableHeader>Attendees</TableHeader>
            <TableHeader>Registration Date</TableHeader>
            <TableHeader>Check-In Date</TableHeader>

            <th style={{ width: 64 }}></th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableHeader>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </TableHeader>

              <TableHeader>56465</TableHeader>
              <TableHeader>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Jeremias Astio
                  </span>
                  <span>jeremias@hotmail.com</span>
                </div>
              </TableHeader>
              <TableHeader>7 days ago</TableHeader>
              <TableHeader>7 days ago</TableHeader>

              <TableHeader>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableHeader>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>Showing 10 of 280 items</TableCell>

            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Page 1 of 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
