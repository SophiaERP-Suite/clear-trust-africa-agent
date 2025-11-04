import { ChevronRightIcon, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const requests = [
  { id: 1, name: "John Doe", caseType: "Fraud Case", date: "2025-10-10", status: "Pending" },
  { id: 2, name: "Zenith Bank", caseType: "Staff Theft", date: "2025-10-11", status: "Assigned" },
  { id: 3, name: "Jane Smith", caseType: "Identity Theft", date: "2025-10-12", status: "Rejected" },
];

function RequestsList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? requests : requests.filter((r) => r.status === filter);
  return (
    <div
      className="p-6 lg:p-8 footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <div className="flex flex-wrap justify-between mb-6 gap-4">
        <div className="col-md-12">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex">
              <Mail className="text-[rgb(112_22_208/0.9)] mr-2" size={36} />
              <div>
                <h3 className="mb-0 text-black">Resquests</h3>
                <p className="text-secondary-600 text-black">
                  Dashboard <ChevronRightIcon size={14} /> Resquests{" "}
                </p>
              </div>
            </div>

            <div>
              {/* <a
                href="applicantNew"
                className="text-black btn shadow-md bg-white border focus:bg-gray-200"
              >
                <Plus size={18} className="mr-2" />
                Pay
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
          <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
       
            <hr className="m-0" />
            <div className="flex-auto p-5">
              <div className="border dark:border-secondary-800 rounded overflow-x-auto">
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Search requests..."
                    className="border p-2 rounded w-1/3"
                  />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Assigned</option>
                    <option>Rejected</option>
                  </select>
                </div>

                <table
                  id="basic-table"
                  className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                >
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        S/N
                      </th>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Requester Name
                      </th>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Case Type
                      </th>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Date Submitted
                      </th>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r, i) => (
                      <tr key={r.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{i + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {r.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {r.caseType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {r.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-sm ${
                              r.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : r.status === "Assigned"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {r.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => navigate(`/requests/${r.id}`)}
                            className="text-blue-600 hover:underline"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestsList;
