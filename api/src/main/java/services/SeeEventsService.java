package services;

import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;

import java.util.HashMap;
import java.util.Map;

public class SeeEventsService extends Proxy {
    private String url = "http://172.17.228.115:9090/getEvents";

    public ResponseOptions<Response> sendRequest() {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        return sendGet(url, headers);
    }
}
