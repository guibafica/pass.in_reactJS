import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendees</h1>

        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input
            type="text"
            placeholder="Search for attendees..."
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" />
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-left">
                Code
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Attendees
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Registration Date
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Check-In Date
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input type="checkbox" />
                </td>

                <td className="py-3 px-4 text-sm text-zinc-300">56465</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Jeremias Astio
                    </span>
                    <span>jeremias@hotmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
                <td className="py-3 px-4 text-sm text-zinc-300"></td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Showing 10 of 280 items
              </td>

              <td
                className="py-3 px-4 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                Page 1 of 23
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
