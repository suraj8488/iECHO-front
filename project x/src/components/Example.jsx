import React, { useState } from "react";
const Example = () => {
  // State variables for selected values
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Data for dropdown options
  const countryOptions = {
    Prod: "Prod",
    Demo: "Demo",
  };

  const cityOptions = {
    Prod: {
      "ed-data-sync-agent-service-lambda-prod":
        "ed-data-sync-agent-service-lambda-prod-hotfix",
      "admin-management-prod": "admin-management-prod-hotfix",
      "blank-service-prod": "blank-service-prod-hotfix",
      "report-management-prod": "report-management-prod-hotfix",
      "communication-email-service-python-prod":
        "communication-email-service-python-prod-hotfix",
      "sqs-pull-email-service-python-prod":
        "sqs-pull-email-service-python-prod-hotfix",
      "communication-sms-service-python-prod":
        "communication-sms-service-python-prod-hotfix",
      "sqs-pull-sms-service-python-prod":
        "sqs-pull-sms-service-python-prod-hotfix",
      "communication-whatsapp-service-prod":
        "communication-whatsapp-service-prod-hotfix",
      "sqs-pull-whatsapp-service-prod": "sqs-pull-whatsapp-service-prod-hotfix",
      "audit-management-prod": "audit-management-prod-hotfix",
      "certificate-management-prod": "certificate-management-prod-hotfix",
      "geo-location-prod": "geo-location-prod-hotfix",
      "taxonomy-service-prod": "taxonomy-service-prod-hotfix",
      "upload-management-prod": "upload-management-prod-hotfix",
      "organization-management-prod": "organization-management-prod-hotfix",
      "data-normalization-service-prod":
        "data-normalization-service-prod-hotfix",
      "program-management-prod": "program-management-prod-hotfix",
      "session-management-prod": "session-management-prod-hotfix",
      "conference-management-prod": "conference-management-prod-hotfix",
      "user-management-prod": "user-management-prod-hotfix",
      "content-management-prod": "content-management-prod-hotfix",
      "form-management-prod": "form-management-prod-hotfix",
      "community-management-prod": "community-management-prod-hotfix",
      "Platform-management-prod": "Platform-management-prod-hotfix",
      "notification-management-prod": "notification-management-prod-hotfix",
      "badge-management-prod": "badge-management-prod-hotfix",
    },
    Demo: {
      "https://www.google.com/":
        "ed-data-sync-agent-service-lambda-demo-hotfix",
      "admin-management-demo": "admin-management-demo-hotfix",
      "blank-service-demo": "blank-service-demo-hotfix",
      "report-management-demo": "report-management-demo-hotfix",
      "communication-email-service-python-demo":
        "communication-email-service-python-demo-hotfix",
      "sqs-pull-email-service-python-demo":
        "sqs-pull-email-service-python-demo-hotfix",
      "communication-sms-service-python-demo":
        "communication-sms-service-python-demo-hotfix",
      "sqs-pull-sms-service-python-demo":
        "sqs-pull-sms-service-python-demo-hotfix",
      "communication-whatsapp-service-demo":
        "communication-whatsapp-service-demo-hotfix",
      "sqs-pull-whatsapp-service-demo": "sqs-pull-whatsapp-service-demo-hotfix",
      "audit-management-demo": "audit-management-demo-hotfix",
      "certificate-management-demo": "certificate-management-demo-hotfix",
      "geo-location-demo": "geo-location-demo-hotfix",
      "taxonomy-service-demo": "taxonomy-service-demo-hotfix",
      "upload-management-demo": "upload-management-demo-hotfix",
      "organization-management-demo": "organization-management-demo-hotfix",
      "data-normalization-serivce-demo":
        "data-normalization-serivce-demo-hotfix",
      "program-management-demo": "program-management-demo-hotfix",
      "session-management-demo": "session-management-demo-hotfix",
      "conference-management-demo": "conference-management-demo-hotfix",
      "user-management-demo": "user-management-demo-hotfix",
      "content-management-demo": "content-management-demo-hotfix",
      "form-management-demo": "form-management-demo-hotfix",
      "community-management-demo": "community-management-demo-hotfix",
      "platform-management-demo": "platform-management-demo-hotfix",
      "notification-management-demo": "notification-management-demo-hotfix",
      "badge-management-demo": "badge-management-demo-hotfix",
    },
  };

  // Handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); // Reset city when country changes
  };

  // Handle city selection
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleSubmit = () => {
    console.log("Choose Env", selectedCountry);
    console.log("choose service:", selectedCity);
    // You can perform further actions with the selected values here...
    let Url = `https://awsjenkins.echodigital.org/job/${selectedCity} `;
    console.log(Url);
  };
  return (
    <div className="main">
      <h2>Choose Environment</h2>
      {/* Country dropdown */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Choose Env</option>
        {Object.entries(countryOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* City dropdown */}
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Choose Service</option>
        {selectedCountry &&
          cityOptions[selectedCountry] &&
          Object.entries(cityOptions[selectedCountry]).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
      </select>
      <button onClick={handleSubmit}>Build</button>
    </div>
  );
};

export default Example;
