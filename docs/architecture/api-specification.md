# OxyTrack API specification

## Authentication

POST /api/auth/login

POST /api/auth/logout

## Hospitals

GET /api/hospitals

GET /api/hospitals/{id}

## Zones

GET /api/hospitals/{id}/zones

GET /api/zones/{id}

## Sensors

GET /api/zones/{id}/sensors

POST /api/sensors

PUT /api/sensors/{id}

## Telemetry

POST /api/telemetry

GET /api/telemetry/latest

GET /api/telemetry/history

## Alerts

GET /api/alerts

POST /api/alerts

PUT /api/alerts/{id}/resolve

## Dashboard

GET /api/dashboard/overview

GET /api/dashboard/pressure

GET /api/dashboard/flow

GET /api/dashboard/health

## Analytics

GET /api/analytics/consumption

GET /api/analytics/leaks

GET /api/analytics/forecast

## Security

All API requests require authentication.

Device endpoints use secure MQTT authentication.

All telemetry transmissions are encrypted.
