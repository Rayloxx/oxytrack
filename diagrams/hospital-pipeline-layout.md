# Hospital oxygen pipeline monitoring layout

```mermaid
flowchart LR
    A[Bulk Oxygen Tank]
    B[Manifold Room]
    C[Main Pipeline]
    D[ICU]
    E[Operating Theatre]
    F[Emergency]
    G[Neonatal Unit]
    H[General Ward]

    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
```

## Sensor deployment

Pressure sensors are installed at:

* tank outlet
* manifold outlet
* main pipeline
* ICU branch
* theatre branch
* neonatal branch

Flow sensors are installed on major distribution branches to measure ward-level oxygen consumption.
