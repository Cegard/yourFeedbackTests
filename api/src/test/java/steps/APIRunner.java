package steps;


import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = {"src/test/resources/login.feature"},
        format = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber.json"},
        strict = true)

public class APIRunner {
}
