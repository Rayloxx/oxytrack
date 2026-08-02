# Oxygen pipeline leak detection methodology

## Objective

Develop a sensor-based methodology for detecting oxygen leakages within hospital medical gas pipeline networks using pressure and flow telemetry.

## Problem statement

Undetected oxygen leaks lead to:

* oxygen wastage
* increased refill costs
* reduced pipeline pressure
* equipment stress
* delayed clinical response

Traditional leak detection relies heavily on manual inspection and pressure testing, which may fail to identify small continuous leaks.

## OxyTrack approach

Leak detection will be based on continuous monitoring of:

* pressure
* flow rate
* pressure differential
* flow stability
* time-series consumption patterns

## Detection methods

### Pressure differential analysis

Pressure is monitored across adjacent pipeline zones.

A sustained abnormal pressure drop indicates possible leakage.

ΔP = P_upstream - P_downstream

### Flow imbalance analysis

Expected flow is compared with measured flow.

Leak indicator:

Leak Flow = Inlet Flow - Outlet Flow

### Night-time baseline monitoring

Hospitals exhibit relatively stable oxygen consumption during low-activity periods.

Persistent elevated flow during baseline hours may indicate leakage.

### Trend-based anomaly detection

Machine learning models can identify abnormal pressure-flow behavior that deviates from historical patterns.

## Sensor placement

Recommended monitoring locations:

* manifold outlet
* main pipeline branches
* ICU branch
* theatre branch
* neonatal branch
* zone valve boxes

## Alert levels

### Level 1

Minor pressure deviation

### Level 2

Sustained pressure-flow imbalance

### Level 3

Confirmed leak probability

### Level 4

Critical infrastructure leak

## Dashboard indicators

* leak probability score
* affected zone
* estimated leak flow
* pressure loss trend
* recommended inspection location

## Expected benefits

* reduced oxygen wastage
* faster fault localization
* lower maintenance costs
* improved oxygen availability
* infrastructure performance optimization
