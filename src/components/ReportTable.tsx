import React, { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import JSZip from "jszip";

interface ReportData {
  category: string;
  primitive: string;
  script_size_bytes: string;
}

const REPORT_ARTIFACT_NAME = "bitcoin-scripts-performance-report";
const REPORT_ARTIFACT_GET_API_URL =
  "https://api.github.com/repos/Bitcoin-Wildlife-Sanctuary/bitcoin-circle-stark/actions/artifacts";

const ReportTable: React.FC = () => {
  const [data, setData] = useState<ReportData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtifactUrl = async () => {
      try {
        const response = await axios.get(REPORT_ARTIFACT_GET_API_URL);
        const artifacts = response.data.artifacts;
        const latestArtifact = artifacts.find(
          (artifact: any) => artifact.name === REPORT_ARTIFACT_NAME,
        );
        const downloadUrl = latestArtifact.archive_download_url;
        return downloadUrl;
      } catch (error) {
        console.error("Error fetching artifact URL:", error);
        return null;
      }
    };

    const fetchData = async () => {
        const downloadUrl = await fetchArtifactUrl();
        if (downloadUrl) {
          try {
            const response = await axios.get(downloadUrl, {
              headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
              },
              responseType: 'arraybuffer'
            });
  
            const zip = await JSZip.loadAsync(response.data);
            const file = zip.file('bitcoin_scripts_performance_report.csv');
            if (file) {
              const csvText = await file.async('text');
              Papa.parse<ReportData>(csvText, {
                header: true,
                complete: (result) => {
                  setData(result.data);
                  setLoading(false);
                  console.log(result.data);
                  console.log('Finished loading');
                }
              });
            } else {
              console.error('CSV file not found in the zip');
            }
          } catch (error) {
            console.error('Error fetching or unzipping CSV data:', error);
          }
        }
      };
  

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Primitive</th>
          <th>Script Size (Bytes)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.category}</td>
            <td>{row.primitive}</td>
            <td>{row.script_size_bytes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
