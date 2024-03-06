import React, { useEffect } from 'react';

const PAGE_VIEW_EVENT = 'page_view';

type tabole =  {
    publisherId:number

} 
const TaboolaPixel = ({ publisherId}:tabole) => {
  useEffect(() => {
    const scriptId = `taboola-pixel`;
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `//cdn.taboola.com/libtrc/unip/${publisherId}/tfa.js`;
      script.async = true;

      document.head.appendChild(script);

      // Trigger page view event after script loads (optional)
      window._tfa = window._tfa || [];
      window._tfa.push({ notify: 'event', name: PAGE_VIEW_EVENT });
    }
  }, [publisherId]);

  return null; // This component doesn't render any visible content
};

export default TaboolaPixel;
