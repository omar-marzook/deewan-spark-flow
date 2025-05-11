/**
 * Test script for XRM API integration only
 * This file is for testing purposes only and should not be included in production
 */

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
 * Test the form submission to XRM API only
 */
async function testXRMSubmission() {
  console.log("Testing XRM form submission with data:", testFormData);
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
    console.log("XRM API is not available. Please check the API endpoint and credentials.");
  }
  
  console.log("-----------------------------------");
  console.log("XRM submission test completed.");
}

// Execute the test
testXRMSubmission().catch(error => {
  console.error("Error during test execution:", error);
});