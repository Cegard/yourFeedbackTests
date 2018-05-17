package services;

import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import net.serenitybdd.rest.SerenityRest;

import java.util.Map;

public abstract class Proxy {
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
