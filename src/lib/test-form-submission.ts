/**
 * Test script for form submission to both HubSpot and XRM APIs
 * This file is for testing purposes only and should not be included in production
 */

import { submitToHubSpot } from "./hubspot";
import { submitToXRM, isXRMAPIAvailable } from "./xrm";

// Test data that matches the ContactForm fields
const testFormData = {
  name: "Test User",
  email: "test@example.com",
  phone: "+1234567890",
  company: "Test Company",
  message: "This is a test message for the contact form submission."
};

/**
 * Test the form submission to both HubSpot and XRM APIs
 */
async function testFormSubmission() {
  console.log("Testing form submission with data:", testFormData);
  console.log("-----------------------------------");
  
  // Test HubSpot submission
  console.log("Testing HubSpot submission...");
  try {
    const hubspotResponse = await submitToHubSpot(testFormData);
    console.log("✅ HubSpot submission successful!");
    console.log("HubSpot response:", hubspotResponse);
  } catch (error) {
    console.error("❌ HubSpot submission failed:", error);
  }
  
  console.log("-----------------------------------");
  
  // Check if XRM API is available
  console.log("Checking XRM API availability...");
  const xrmAvailable = await isXRMAPIAvailable();
  console.log("XRM API available:", xrmAvailable);
  
  if (xrmAvailable) {
    // Test XRM submission
    console.log("Testing XRM submission...");
    try {
      const xrmResponse = await submitToXRM(testFormData);
      console.log("✅ XRM submission successful!");
      console.log("XRM response:", xrmResponse);
    } catch (error) {
      console.error("❌ XRM submission failed:", error);
    }
  } else {
    console.log("Skipping XRM submission test as API is not available.");
  }
  
  console.log("-----------------------------------");
  console.log("Form submission test completed.");
}

// Execute the test
testFormSubmission().catch(error => {
  console.error("Error during test execution:", error);
});