import { ChangeEvent, useCallback, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en-ca";
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

dayjs.extend(relativeTime);
dayjs.locale("en-ca");

export function AttendeeList() {
  const [, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [attendees, setAttendees] = useState([]);

  const totalPages = Math.ceil(attendees.length / 10);

  const onSearchInputChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const goToNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const goToPreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const goToFirstPage = useCallback(() => {
    setPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setPage(totalPages);
  }, [totalPages]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendees</h1>

        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input
            type="text"
            placeholder="Search for attendees..."
            onChange={onSearchInputChanged}
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow key={attendee.id}>
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
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableHeader>
              <TableHeader>{dayjs().to(dayjs(attendee.createdAt))}</TableHeader>
              <TableHeader>{dayjs().to(dayjs(attendee.checkInAt))}</TableHeader>

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
            <TableCell colSpan={3}>
              Showing 10 of {attendees.length} items
            </TableCell>

            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>
                  Page {page} of {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>

                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>

                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>

                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
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
