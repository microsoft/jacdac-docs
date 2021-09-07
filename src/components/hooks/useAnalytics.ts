import { ApplicationInsights } from "@microsoft/applicationinsights-web-basic"

export type EventProperties = Record<string, unknown>

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
              name: "",
              time: new Date().toUTCString(),
              tags: [],
              baseType: "PageviewData",
              baseData: {
                  name: window.location.href,
                  uri: window.location.href,
              },
          })
    : () => {}

const trackEvent: (name: string, properties?: EventProperties) => void =
    appInsights
        ? (name, properties) =>
              appInsights.track({
                  name: "",
                  time: new Date().toUTCString(),
                  data: {},
                  baseType: "EventData",
                  baseData: {
                      name,
                      properties,
                  },
              })
        : () => {}

const trackError: (error: unknown, properties?: EventProperties) => void =
    appInsights
        ? (error, properties) =>
              appInsights.track({
                  name: "",
                  time: new Date().toUTCString(),
                  data: {},
                  baseType: "ExceptionData",
                  baseData: {
                      error,
                      properties,
                  },
              })
        : () => {}

// store instance
if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window["analytics"] = {
        page,
        trackEvent,
        trackError,
    }
}

export default function useAnalytics() {
    return {
        page,
        trackEvent,
        trackError,
    }
}
