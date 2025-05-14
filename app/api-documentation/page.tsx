export default function Maps() {
    const models = [
      {
        name: "Holt-Winters",
        description: "Statistical Model for Time Series. Here, only agrouped crop data was used.",
        group: "For each Country without zeros on a year.",
      },
      {
        name: "LightGBM",
        description: "Regressor model based per country groups. Here, data from crops and weather was used.",
        group: "G1: France, G2: Spain, Italy, G3: Others.",
      },
    ];

    return (
      <div className="p-24">
        <div>
          <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
          <p>Here you can find the documentation for the API developed for yield forecasting models.</p>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold mb-4">Dataset Types</h3>
          <p>The developed models were designed for two types of datasets:</p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>All Crops:</strong> All the data from all crops was used in these models.</li>
            <li><strong>Top Crop:</strong> Through the Sharpe Ratio, the best yield of harvest was determined, which is cultivated in all countries, and this single crop was selected for the development of the different models. In this case, the top crop was <strong>Cereals for the production of grain, including seed.</strong></li>
          </ul>
        </div>
        <div className="mt-4">
        <h3 className="text-2xl font-bold mb-4">Model Types</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Model</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Group</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{model.name}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{model.description}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{model.group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p>
            Each of these models is registered in MLFlow (access expires on December 15, 2024) at the following link:{" "}
            <a 
              href="http://ec2-54-160-110-158.compute-1.amazonaws.com:5000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline"
            >
              MLFlow Dashboard
            </a>.
          </p>
        </div>
      </div>
      
    )
  }
  
  