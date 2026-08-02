# OxyTrack ESP32 telemetry node

## Purpose

The ESP32 telemetry node collects pressure and flow sensor data from hospital oxygen infrastructure and transmits telemetry to the OxyTrack cloud platform.

## Hardware components

* ESP32
* pressure sensor
* flow sensor
* temperature sensor
* power regulator
* status LEDs

## Communication

* Wi-Fi
* MQTT
* HTTPS fallback

## Telemetry interval

1–5 seconds

## Responsibilities

* sensor acquisition
* calibration
* local validation
* timestamping
* MQTT publishing
* offline buffering
* health monitoring
