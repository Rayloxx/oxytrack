# OxyTrack system overview

```mermaid
flowchart TD
    A[Central Oxygen Tank] --> B[Pressure Sensors]
    A --> C[Flow Sensors]

    B --> D[ESP32 Telemetry Nodes]
    C --> D

    D --> E[MQTT Gateway]
    E --> F[Cloud Platform]

    F --> G[Time-Series Database]
    F --> H[Analytics Engine]

    H --> I[Biomedical Dashboard]
    H --> J[Mobile Alerts]
    H --> K[Predictive Maintenance]
```

## Overview

The OxyTrack platform transforms hospital oxygen infrastructure into a distributed telemetry network that continuously monitors pressure, flow, and infrastructure health.
