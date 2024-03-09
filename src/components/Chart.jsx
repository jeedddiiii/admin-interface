import { LineChart, Line } from "recharts";
import Sidebar from "./SideBar";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },

  { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 500, pv: 2400, amt: 2400 },
];
const data01 = [
  {
    name: "Sad",
    value: 400,
  },
  {
    name: "Happy",
    value: 300,
  },
  {
    name: "Natural",
    value: 300,
  },
  {
    name: "Angry",
    value: 200,
  },
];

function Chart() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <div class="d-flex flex-row mb-3 gap-3">
          <div class="dropdown">
            <button
              class="btn btn-outline-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Month
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  January
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  February
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  March{" "}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  April
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  May
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  June
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  July
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  August
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  September
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  October
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  November
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  December
                </a>
              </li>
            </ul>
          </div>
          <button
            class="btn btn-outline-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Name
          </button>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Chart;
