package services;

import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;

import java.util.HashMap;
import java.util.Map;

public class SeeEventsService extends Proxy {

    private String url = "http://54.226.98.250:9090/auth/getEvent";

    public ResponseOptions<Response> sendRequest(Object body) {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        return sendPost(url, body, headers);
    }

}
