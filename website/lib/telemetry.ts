export interface TelemetryState {
  pressure: number;
  flow: number;
  health: number;
  uptime: number;
}

export function generateTelemetry(): TelemetryState {
  return {
    pressure: 4.1 + Math.random() * 0.3,
    flow: 36 + Math.random() * 6,
    health: 97 + Math.random() * 2,
    uptime: 99.9 + Math.random() * 0.09,
  };
}
