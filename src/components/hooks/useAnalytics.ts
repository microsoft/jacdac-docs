import { ApplicationInsights } from "@microsoft/applicationinsights-web-basic"

const INSTRUMENTATION_KEY = "81ad7468-8585-4970-b027-4f9e7c3eb191"
const appInsights =
    typeof window !== "undefined" &&
    INSTRUMENTATION_KEY &&
    new ApplicationInsights({
        instrumentationKey: INSTRUMENTATION_KEY,
        isStorageUseDisabled: true,
        isCookieUseDisabled: true,
        disableCookiesUsage: true,
        disableAjaxTracking: true,
        enableSessionStorageBuffer: false,
    })
const page: () => void = appInsights
    ? () =>
          appInsights.track({
              name: window.location.href,
              time: new Date().toUTCString(),
              baseType: "PageData",
          })
    : () => {}
const track: (name: string, properties?: { [key: string]: unknown }) => void =
    appInsights
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (name: string, properties?: { [key: string]: any }) =>
              appInsights?.track({
                  name,
                  time: new Date().toUTCString(),
                  data: properties,
                  baseType: "EventData",
              })
        : () => {}

// store instance
if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window["analytics"] = {
        page,
        track,
    }
}

export default function useAnalytics() {
    return {
        page,
        track,
    }
}
