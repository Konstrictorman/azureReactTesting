export const msalConfig = {
   auth: {
     clientId: "6165b7a8-04ae-4185-8704-b6ec63ab4c14",
     authority: "https://login.microsoftonline.com/c9277e2f-d5b3-4cb1-8d3c-f374f42ffbc4", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
     redirectUri: "https://zealous-coast-09027a810.1.azurestaticapps.net/",
   },

   cache: {
     cacheLocation: "sessionStorage", // This configures where your cache will be stored
     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
   }
 };
 
 // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
 export const loginRequest = {
  //scopes: ["User.Read"]
  scopes: ["api://6cebbf4e-4092-418a-abc7-6d483c3f8f04/Fidelizacion_WEB"]
 };
 
 
 // Add the endpoints here for Microsoft Graph API services you'd like to use.
 export const graphConfig = {
     graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
 };