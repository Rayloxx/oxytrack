# ADR 0001: MQTT as the telemetry protocol

## Status

Accepted

## Context

OxyTrack requires low-latency, lightweight communication between distributed sensor nodes and the cloud platform.

## Decision

MQTT will be used as the primary telemetry protocol.

## Rationale

* lightweight
* low bandwidth
* publish-subscribe architecture
* reliable QoS
* widely used in IoT systems

## Consequences

Positive:

* scalable telemetry
* efficient sensor communication
* flexible topic routing

Negative:

* broker dependency
* MQTT security management
