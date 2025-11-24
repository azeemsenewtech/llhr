import React, { useState } from "react";
import ContractsDashboard from "./feacture/contractDashboard";
import DashboardStats from "../my-properties/feacture/dashboardStatus";
import ContractStats from "./feacture/contractStatus";
import NewPropertyWizard from "./feacture/contractForm";

const Contract = () => {
  const [showWizard, setShowWizard] = useState(true);

  return (
    <div>
  
      {showWizard ? (
        <>
          <ContractStats />
          <ContractsDashboard onStart={() => setShowWizard(false)} />
        </>
        
      ) : (
        <NewPropertyWizard />
      )}
    </div>
  );
};

export default Contract;
