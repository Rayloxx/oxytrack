# OxyTrack telemetry data flow

## Objective

Define how pressure and flow data move from hospital oxygen infrastructure to the OxyTrack analytics platform.

## End-to-end data flow

Pressure Sensor
Flow Sensor
Temperature Sensor
|
ESP32 Telemetry Node
|
MQTT Gateway
|
Cloud Broker
|
Telemetry Database
|
Analytics Engine
|
Dashboard
Mobile Alerts
Reports

## Sensor acquisition

Sampling interval:

* pressure: 1–5 seconds
* flow: 1–5 seconds
* temperature: 30–60 seconds

## Edge processing

Each ESP32 node performs:

* sensor validation
* noise filtering
* timestamp synchronization
* anomaly pre-check
* communication retry handling

## MQTT topic structure

oxytrack/hospital/{hospital_id}/zone/{zone_id}/pressure

oxytrack/hospital/{hospital_id}/zone/{zone_id}/flow

oxytrack/hospital/{hospital_id}/zone/{zone_id}/temperature

oxytrack/hospital/{hospital_id}/alerts

## Cloud ingestion

Incoming telemetry is stored in a time-series database optimized for:

* trend analysis
* anomaly detection
* historical reporting
* predictive analytics

## Analytics pipeline

Raw telemetry

↓

Validation

↓

Aggregation

↓

Anomaly detection

↓

Alert generation

↓

Dashboard visualization

## Alert logic

Pressure thresholds

Flow anomalies

Pressure-flow imbalance

Sensor offline

Communication failure

Rapid consumption increase

## Dashboard outputs

Current pressure

Current flow

24-hour trends

Zone comparisons

Leak probability

Infrastructure health score

Oxygen consumption forecast

## Reliability features

Local buffering

Automatic retransmission

MQTT QoS

Timestamp preservation

Heartbeat monitoring

Offline recovery synchronization
