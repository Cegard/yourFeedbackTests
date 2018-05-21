package services;

import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;

import java.util.HashMap;
import java.util.Map;

public class EditService extends Proxy {
    private String url = "http://172.17.228.115:9090/setUser";

    public ResponseOptions<Response> sendRequest(Object body) {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        return sendPost(url, body, headers);
    }
}
