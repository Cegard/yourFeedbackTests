package utils;

import org.apache.commons.lang3.RandomStringUtils;

import java.util.UUID;

public class Utils {
    private static String getRandomId() {
        return UUID.randomUUID().toString().substring(0, 6);
    }

    public static String getRandomNumeric() {
        return RandomStringUtils.randomNumeric(6);
    }

    public static String getRandomString() {
        return getRandomId();
    }

    public static String getRandomEmail() {
        return "api-" + getRandomId() + "@hotmail.com";
    }

    public static String getRandomPassword() {
        return "P" + RandomStringUtils.randomAlphanumeric(8) + "0";
    }
}
