# OxyTrack system architecture

## Objective

OxyTrack is designed as a distributed hospital oxygen telemetry platform that continuously monitors pressure, flow rate, and infrastructure health across medical oxygen pipeline networks.

## Architecture overview

Central Oxygen Tank

↓

Pressure & Flow Sensors

↓

ESP32 Sensor Nodes

↓

MQTT Telemetry Gateway

↓

Cloud Analytics Platform

↓

Dashboard & Mobile Alerts

## Core components

### Sensor layer

* Pressure transducers
* Flow sensors

### Edge layer

* ESP32 microcontrollers
* Local buffering
* Sensor validation
* Fail-safe operation

### Communication layer

* MQTT
* Wi-Fi
* HTTPS fallback

### Cloud layer

* Time-series database
* Analytics engine
* Alert management
* Reporting

### Application layer

* Biomedical engineering dashboard
* Mobile notifications
* Oxygen consumption analytics
* Predictive maintenance

## Expected outputs

* Real-time pressure monitoring
* Flow rate monitoring
* Leak detection
* Zone-level oxygen visibility
* Infrastructure health scoring
* Oxygen demand forecasting
