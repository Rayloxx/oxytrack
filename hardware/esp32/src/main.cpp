#include <WiFi.h>
#include <PubSubClient.h>

const char* WIFI_SSID = "YOUR_WIFI";
const char* WIFI_PASSWORD = "YOUR_PASSWORD";
const char* MQTT_SERVER = "broker.oxytrack.local";

WiFiClient wifiClient;
PubSubClient mqtt(wifiClient);

const int PRESSURE_PIN = 34;
const int FLOW_PIN = 35;

void connectWiFi() {
WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

while (WiFi.status() != WL_CONNECTED) {
delay(500);
}
}

void connectMQTT() {
while (!mqtt.connected()) {
mqtt.connect("oxytrack-node");
delay(1000);
}
}

float readPressure() {
return analogRead(PRESSURE_PIN);
}

float readFlow() {
return analogRead(FLOW_PIN);
}

void publishTelemetry() {
String payload = "{"pressure":" +
String(readPressure()) +
","flow":" +
String(readFlow()) +
"}";

mqtt.publish(
"oxytrack/hospital/demo/zone/main/telemetry",
payload.c_str()
);
}

void setup() {
connectWiFi();
mqtt.setServer(MQTT_SERVER, 1883);
}

void loop() {
if (!mqtt.connected()) {
connectMQTT();
}

mqtt.loop();

publishTelemetry();

delay(3000);
}
