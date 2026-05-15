interface DataTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

export default function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-border shadow-sm">
      <table className="w-full text-sm">
        {caption && <caption className="text-text-lt text-xs mb-2 text-left px-1">{caption}</caption>}
        <thead>
          <tr className="bg-navy">
            {headers.map((h, i) => (
              <th key={i} className="text-white font-semibold text-left px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? 'bg-cream' : 'bg-white'}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-text border-t border-border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
