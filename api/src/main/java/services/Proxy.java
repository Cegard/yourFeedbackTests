package services;

import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import net.serenitybdd.rest.SerenityRest;

import java.util.Map;

public abstract class Proxy {
    public ResponseOptions<Response> sendGet(String url, Map<String, String> headers) {
        return SerenityRest.rest().given().request()
                .headers(headers)
                .when()
                .log()
                .all()
                .get(url)
                .andReturn();
    }

    public ResponseOptions<Response> sendPost(String url, Object body, Map<String, String> headers) {
        return SerenityRest.rest().given().request()
                .headers(headers)
                .body(body)
                .when()
                .log()
                .all()
                .post(url)
                .andReturn();
    }
}
