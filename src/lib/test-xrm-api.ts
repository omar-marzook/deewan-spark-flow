/**
 * Test script for XRM API integration
 * This file is for testing purposes only and should not be included in production
 */

const XRM_API_URL = 'https://xrm-dev.cequens.net/api/xrm/integrations/deewan/lead';
const XRM_API_KEY = 'VjzDsAbP6fnqVjwPRQNp4gAmPAeFcaeJ';

// Test data
const testData = {
  name: "Test User",
  email: "test@example.com",
  mobileNumber: "+1234567890",
  companyName: "Test Company"
};

/**
 * Test the XRM API with sample data
 */
async function testXRMAPI() {
  console.log("Testing XRM API with data:", testData);
  
  try {
    const response = await fetch(XRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': XRM_API_KEY
      },
      body: JSON.stringify(testData)
    });

    const responseData = await response.json();
    
    console.log("Response status:", response.status);
    console.log("Response data:", responseData);
    
    if (response.ok) {
      console.log("✅ XRM API test successful!");
    } else {
      console.error("❌ XRM API test failed:", responseData);
    }
    
    return { status: response.status, data: responseData };
  } catch (error) {
    console.error("❌ Error testing XRM API:", error);
    throw error;
  }
}

// Execute the test
testXRMAPI();

// Export for potential reuse
export { testXRMAPI };