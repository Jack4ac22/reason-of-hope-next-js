'use client';
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
export default function PdfViewer({ url, height = "400px", title = "PDF Viewer" }) {
  function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android|windows phone|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
    const isTablet = /ipad|android|tablet|kindle|silk/i.test(userAgent) && !isMobile;

    if (isMobile) return "Mobile";
    if (isTablet) return "Tablet";
    return "Desktop";
  }

  const [showFallback, setShowFallback] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const device = getDeviceType();
    if (device === "Mobile") {
      setShowFallback(true);
    }
  }, []);
  if (!url) return <p className="text-red-500">No PDF URL provided.</p>;
  return (
    <div className="w-full my-4 print:hidden">
      <div className="relative w-full border rounded shadow-md overflow-hidden">
        {!showFallback ? (
          <Iframe
            src={`${url}#view=FitH`}
            title={title}
            width="100%"
            height={height}
            className="w-full"
            loading="lazy"
            onError={() => setShowFallback(true)}
          />
        ) : (
          // TODO: adjust  the fallback layout and styles
          <div className="flex flex-col justify-center items-center bg-white text-center p-4 space-y-4">
            <p className="text-gray-700">لا يمكن عرض الملف في هذا المتصفح.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                فتح الملف في صفحة جديدة
              </a>
              <a
                href={url}
                download
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                تحميل الملف PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}