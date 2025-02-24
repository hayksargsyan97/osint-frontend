import React, { useState } from "react";
import { fetchScans, startScan } from "./api";
import ScanCard from "./ScanCard";
import {Scan} from "./Scan";

const ScanList: React.FC = () => {
    const [scans, setScans] = useState<Scan[]>([]); // Explicit type
    const [domain, setDomain] = useState<string>("");

    // Fetch scans only when the user clicks a button
    const handleFetchScans = async () => {
        const data = await fetchScans();
        setScans(data);
    };

    const handleScan = async () => {
        if (!domain.trim()) return;
        const newScan = await startScan(domain);
        setScans((prevScans) => [...prevScans, newScan]);
    };

    return (
        <div>
            <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter domain..."
            />
            <button onClick={handleScan}>Start Scan</button>
            <button onClick={handleFetchScans}>Fetch Scans</button>
            <div>
                {scans.map((scan) => (
                    <ScanCard scan={scan} />
                ))}
            </div>
        </div>
    );
};

export default ScanList;
