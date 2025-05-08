/**
 * HubSpot API integration service
 * Handles form submissions to HubSpot Forms API
 */

// HubSpot credentials from environment variables
const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;
const HUBSPOT_API_TOKEN = import.meta.env.VITE_HUBSPOT_API_TOKEN;

/**
 * Submit form data to HubSpot
 * @param formData Form data to submit
 * @returns Promise with the response from HubSpot
 */
export async function submitToHubSpot(formData: any) {
  try {
    // Map form fields to HubSpot fields
    // This mapping handles both ContactForm and ContactSection field naming
    const hubspotFormData = {
      fields: [
        {
          name: "email",
          value: formData.email
        },
        {
          name: "firstname",
          value: formData.fullName || formData.name || ""
        },
        {
          name: "phone",
          value: formData.phone || ""
        },
        {
          name: "company",
          value: formData.company || ""
        },
        {
          name: "message",
          value: formData.message || ""
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    // Submit to HubSpot Forms API
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HUBSPOT_API_TOKEN}`
        },
        body: JSON.stringify(hubspotFormData)
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot API error:', errorData);
      throw new Error('Form submission failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to HubSpot:', error);
    throw error;
  }
}