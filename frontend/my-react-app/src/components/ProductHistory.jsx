import React from "react";
import './Css/ProductHistory.css';

function ProductHistory() {
  return (
    <div className="product-history">
      <h2>Product History</h2>
      <div className="filters">
        <div className="row">
          <label>SerialNumber</label>
          <input type="text"  />
          <label>From</label>
          <input type="date" />
          <label>To</label>
          <input type="date" />
          <button className="btn">Search</button>
          <button className="btn">Advanced Search</button>
          <button className="btn">Save</button>
          <button className="btn">Clear</button>
        </div>

        <div className="checkboxes">
          <label><input type="checkbox" /> Unselect All Fields</label>
          <label><input type="checkbox" defaultChecked /> Serial Number</label>
          <label><input type="checkbox" /> Location</label>
          <label><input type="checkbox" /> DeviceIP</label>
          <label><input type="checkbox" /> TestName</label>
          <label><input type="checkbox" /> StockCode</label>
          <label><input type="checkbox" /> Model</label>
          <label><input type="checkbox" /> CheckPoint</label>
          <label><input type="checkbox" /> Message</label>
          <label><input type="checkbox" defaultChecked /> Time</label>
          <label><input type="checkbox" /> By</label>
          <label><input type="checkbox" /> Passed</label>
          <label><input type="checkbox" /> Reset/Bypassed</label>
          <label><input type="checkbox" /> IPN</label>
        </div>

        <button className="btn export">Export to Excel</button>

        <table className="history-table">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>TestName Reset/Bypassed</th>
              <th>StockCode</th>
              <th>CheckPoint</th>
              <th>Time</th>
              <th>By</th>
              <th>Passed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7">No items to display</td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <button>{"<<"}</button>
          <button>{"<"}</button>
          <span>0</span>
          <button>{">"}</button>
          <button>{">>"}</button>
          <select>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>data items per page</span>
        </div>
      </div>
      <span className="version">Version: 1.0.0</span>
    </div>
  );
}

export default ProductHistory;
