import json
import random
import time
from datetime import datetime

def generate_telemetry():
return {
"hospital_id": "mtrh",
"zone_id": "icu",
"timestamp": datetime.utcnow().isoformat(),
"pressure": round(random.uniform(3.8, 4.5), 2),
"flow_rate": round(random.uniform(25, 45), 2),
"temperature": round(random.uniform(20, 28), 1),
"signal_strength": random.randint(-70, -50),
"battery": random.randint(85, 100)
}

if **name** == "**main**":
while True:
telemetry = generate_telemetry()
print(json.dumps(telemetry, indent=2))
time.sleep(3)
