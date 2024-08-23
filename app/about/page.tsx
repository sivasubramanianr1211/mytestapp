import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description=" காரைக்குடியில் 2003-ம் ஆண்டு தொடங்கப்பட்ட செட்டிநாடு பிராப்பர்டீஸ் பிரைவேட் லிமிடெட் நிறுவனம் 20 ஆண்டுகளுக்கும் மேலாக ரியல் எஸ்டேட் துறையில் முன்னணியில் உள்ளது. காரைக்குடியில் சுமூகமான சொத்து பரிவர்த்தனைகளை உறுதிசெய்து, லாபகரமான முதலீட்டு வாய்ப்புகளை வழங்குவதன் மூலம் தனிநபர்கள் மற்றும் வணிகங்கள் ஆகிய இரண்டிற்கும் விருப்பமான ரியல் எஸ்டேட் பங்குதாரராக மாறுவதை நோக்கமாகக் கொண்டுள்ளோம்.</p>"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
