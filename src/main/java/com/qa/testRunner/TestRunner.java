package com.qa.testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="C:\\Users\\sajit\\workspce new\\CucumberPOM\\src\\main\\java\\com\\qa\\feature\\crm.feature",
	glue= {"com\\qa\\StepDefinitions"},
	plugin = { "pretty", "html:target/cucumber-reports" },
	monochrome=true
		)

public class TestRunner {

}
