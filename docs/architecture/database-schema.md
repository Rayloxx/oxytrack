# OxyTrack telemetry database schema

## Objective

Define the data model for storing oxygen telemetry and infrastructure monitoring data.

## Hospitals

hospital_id

name

county

level

created_at

## Zones

zone_id

hospital_id

name

department

created_at

## Sensors

sensor_id

zone_id

type

serial_number

status

installed_at

## Telemetry

telemetry_id

sensor_id

timestamp

pressure

flow_rate

temperature

battery

signal_strength

## Alerts

alert_id

hospital_id

zone_id

type

severity

message

timestamp

resolved

## Maintenance

maintenance_id

hospital_id

zone_id

component

status

priority

assigned_to

created_at

## Relationships

Hospital

↓

Zones

↓

Sensors

↓

Telemetry

↓

Alerts

Maintenance

## Analytics outputs

* pressure trends
* flow trends
* leak probability
* infrastructure health score
* maintenance recommendations
