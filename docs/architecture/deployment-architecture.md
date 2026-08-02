# OxyTrack deployment architecture

## Objective

Deploy a secure, scalable telemetry platform for hospital oxygen monitoring.

## Cloud architecture

ESP32

↓

MQTT Broker

↓

FastAPI

↓

Redis

↓

PostgreSQL

↓

Analytics

↓

Next.js Dashboard

## Infrastructure

### MQTT

EMQX or Mosquitto

### API

FastAPI

### Database

PostgreSQL

### Cache

Redis

### Dashboard

Next.js

### Deployment

Docker

Nginx

HTTPS

## Security

TLS encryption

JWT authentication

Role-based access

Device authentication

Audit logging

## Monitoring

API health

MQTT health

Database health

Sensor health

Alert system health
