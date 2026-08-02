# OxyTrack backend architecture

## Objective

Provide a scalable cloud platform for ingesting telemetry, processing oxygen infrastructure data, generating alerts, and serving dashboard analytics.

## Architecture

ESP32 Nodes

↓

MQTT Broker

↓

Telemetry API

↓

Processing Engine

↓

PostgreSQL

↓

Analytics Service

↓

Dashboard API

## Core services

### Telemetry service

Receives sensor data

Validates telemetry

Stores time-series records

### Alert service

Detects pressure anomalies

Detects flow anomalies

Generates notifications

### Analytics service

Consumption trends

Leak probability

Infrastructure health

Demand forecasting

### Dashboard service

Real-time monitoring

Historical analytics

Zone comparisons

Maintenance insights

## Technology stack

* Python
* FastAPI
* PostgreSQL
* MQTT
* Redis
* Docker

## Scalability

Support multiple hospitals through tenant isolation and zone-based telemetry processing.
