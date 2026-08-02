# OxyTrack sensor specification

## Objective

Define the technical requirements for pressure and flow sensors used in the OxyTrack monitoring network.

## Pressure sensors

### Measurement range

0–16 bar

### Accuracy

±0.25% FS

### Output

0–5 V or 4–20 mA

### Sampling rate

1–5 seconds

### Operating temperature

0–60°C

## Flow sensors

### Medium

Medical oxygen

### Measurement type

Inline flow measurement

### Accuracy

±2%

### Output

Pulse or analog

### Sampling rate

1–5 seconds

## ESP32 telemetry node

### Processor

ESP32

### Connectivity

Wi-Fi

### Communication

MQTT

### Power

12–24 V DC

### Local storage

Flash buffering

## Installation requirements

* accessible maintenance location
* vibration isolation
* calibration access
* moisture protection
* service labeling

## Calibration

Pressure sensors should be calibrated every 6–12 months.

Flow sensors should be validated against reference flow meters.
