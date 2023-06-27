import React from "react";
import Script from "next/script";

// -- Prop types
// ----------

export interface AnalyticsProps {}

// -- Component
// ----------

/** Add analytics scripts */
const Analytics: React.FC<AnalyticsProps> = () => {
  // include only in production
  if (process.env.NODE_ENV === "production") {
    return (
      <Script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id={process.env.UMAMI_WEBSITE_ID}
      ></Script>
    );
  }

  return null;
};

export default Analytics;
