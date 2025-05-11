/**
 * XRM API Integration Service
 * 
 * This module provides functions to interact with the XRM API for lead submission.
 * It works alongside the existing HubSpot integration to provide dual submission
 * capabilities for the contact form.
 * 
 * API Endpoint: https://xrm-dev.cequens.net/api/xrm/integrations/deewan/lead
 * 
 * Required fields:
 * - name: The user's full name
 * - email: The user's email address
 * - mobileNumber: The user's phone number
 * - companyName: The user's company name (optional)
 */

const XRM_API_URL = 'https://xrm-dev.cequens.net/api/xrm/integrations/deewan/lead';
const XRM_API_KEY = 'VjzDsAbP6fnqVjwPRQNp4gAmPAeFcaeJ';

/**
 * Submit contact form data to XRM API
 * @param formData Form data to submit
 * @returns Promise with the response from XRM API
 */
export async function submitToXRM(formData: any) {
  try {
    // Map form fields to XRM API fields
    const xrmFormData = {
      name: formData.fullName || formData.name || "",
      email: formData.email,
      mobileNumber: formData.phone || "",
      companyName: formData.company || ""
    };

    // Validate required fields before submission
    if (!xrmFormData.name) {
      throw new Error('Name is required for XRM submission');
    }
    if (!xrmFormData.email) {
      throw new Error('Email is required for XRM submission');
    }

    // Submit to XRM API
    const response = await fetch(XRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': XRM_API_KEY
      },
      body: JSON.stringify(xrmFormData)
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Format error message from API response
      const errorMessage = responseData.errors?.map((err: any) => 
        `${err.msg} (${err.path})`
      ).join(', ') || 'Form submission to XRM failed';
      
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error) {
    console.error('Error submitting to XRM:', error);
    throw error;
  }
}

/**
 * Check if the XRM API is available
 * @returns Promise that resolves to true if API is available, false otherwise
 */
export async function isXRMAPIAvailable() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(XRM_API_URL, {
      method: 'OPTIONS',
      headers: {
        'x-api-key': XRM_API_KEY
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.warn('XRM API availability check failed:', error);
    return false;
  }
}