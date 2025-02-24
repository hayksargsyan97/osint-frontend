import React from "react";
import { Scan } from "./Scan";

const ScanCard: React.FC<{ scan: Scan }> = ({ scan }) => (
    <div className="border p-4 rounded shadow">
        <h3>{scan.domain}</h3>
        <p>Start: {scan.startTime}</p>
        <p>End: {scan.endTime || "In Progress..."}</p>
        {scan.result && <p>Result: {scan.result}</p>}
    </div>
);

export default ScanCard;
