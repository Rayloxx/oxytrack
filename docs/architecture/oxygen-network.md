# OxyTrack oxygen distribution network architecture

## Purpose

This document defines the physical and logical structure of a hospital medical oxygen distribution network and the sensor placement strategy used by OxyTrack.

## Hospital oxygen network overview

A typical hospital oxygen system distributes medical oxygen from a central storage source through a network of manifolds, regulators, valves, and pipeline branches that serve multiple clinical departments.

### Primary infrastructure

* Bulk oxygen tank
* Vaporizer system
* Pressure regulators
* Main distribution manifold
* Main oxygen pipeline
* Zone valve boxes
* Department branch pipelines
* Bedside oxygen outlets

## Monitoring zones

### Zone A — oxygen source

* Tank pressure
* Tank level
* Supply temperature
* Primary regulator pressure

### Zone B — manifold room

* Manifold outlet pressure
* Regulator performance
* Changeover status

### Zone C — main distribution line

* Main pipeline pressure
* Flow rate
* Pipeline stability

### Zone D — clinical departments

* ICU
* Operating theatres
* HDU
* Neonatal units
* Emergency department
* General wards

## Sensor placement strategy

Pressure sensors are installed at critical pressure transition points.

Flow sensors are installed at major distribution branches.

Each monitoring zone contains an ESP32 telemetry node responsible for:

* sensor acquisition
* local validation
* timestamping
* MQTT transmission
* temporary buffering

## Zone telemetry architecture

Central Tank
|
Source Sensors
|
Manifold Sensors
|
Main Line Sensors
|
Zone Sensors
|
ESP32 Nodes
|
MQTT Gateway
|
Cloud Platform

## Advantages

* Zone-level visibility
* Rapid fault localization
* Leak isolation
* Department consumption monitoring
* Infrastructure health analysis
* Predictive maintenance support

## OxyTrack objective

Transform hospital oxygen pipelines into an intelligent sensor network capable of continuous real-time monitoring and infrastructure analytics.
