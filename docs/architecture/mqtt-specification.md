# OxyTrack MQTT specification

## Purpose

Define the MQTT communication architecture for sensor telemetry.

## Topic hierarchy

oxytrack/

├── hospital/

│   ├── {hospital_id}/

│   │   ├── zone/

│   │   │   ├── {zone_id}/

│   │   │   │   ├── pressure

│   │   │   │   ├── flow

│   │   │   │   ├── temperature

│   │   │   │   └── telemetry

│   │   ├── alerts

│   │   └── status

## Example topics

oxytrack/hospital/mtrh/zone/icu/pressure

oxytrack/hospital/mtrh/zone/theatre/flow

oxytrack/hospital/mtrh/alerts

## Message format

{
"timestamp": "2026-08-06T10:30:15Z",
"pressure": 4.2,
"flow": 38.5,
"temperature": 24.1,
"signal": -61,
"battery": 98
}

## QoS

Telemetry: QoS 1

Alerts: QoS 2

Status: QoS 1

## Retained messages

Retain:

* device status
* latest pressure
* latest flow

Do not retain:

* historical telemetry
* alert history
