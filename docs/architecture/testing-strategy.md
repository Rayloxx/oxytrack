# OxyTrack testing strategy

## Objective

Ensure telemetry accuracy, communication reliability, and dashboard correctness before pilot deployment.

## Unit testing

* pressure conversion
* flow calculation
* MQTT serialization
* alert thresholds

## Integration testing

* ESP32 → MQTT
* MQTT → Cloud
* Cloud → Dashboard
* Dashboard → Alerts

## Hardware testing

* pressure sensor calibration
* flow sensor calibration
* communication stability
* power reliability

## Field testing

* ICU monitoring
* theatre monitoring
* manifold monitoring
* emergency monitoring

## Acceptance criteria

* pressure accuracy ±0.25%
* flow accuracy ±2%
* alert latency <10 seconds
* telemetry uptime >99%
