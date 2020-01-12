package com.qa.StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.testutil.TestBase;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;


public class LoginPageSteps extends TestBase {
	
	WebDriver driver;
	LoginPage loginpage;
	HomePage homepage;
	
	
	@Given("user launches the browser")
	public void user_launches_the_browser() {
	    // Write code here that turns the phrase above into concrete actions
	    TestBase.initialization();
	    
	}
	
	@Given("user lands on the Login Page and finds the CRM LOGO")
	public void user_lands_on_the_Login_Page_and_finds_the_CRM_LOGO() {
	    // Write code here that turns the phrase above into concrete actions
		  loginpage=new LoginPage();
		 boolean CRMLogoDisplay=loginpage.validateCRMLogoDisplayed();
		 Assert.assertTrue(CRMLogoDisplay);
	  
	}
	@Given("user clicks on Login button after entering the {string} and {string}")
	public void user_clicks_on_Login_button_after_entering_the_and(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
		homepage=loginpage.UserLogin(string, string2);
	}

	/*
	@Given("^user clicks on Login button after entering \"(.*)\" and \"(.*)\"$")
	public void user_clicks_on_Login_button_after_entering_the_username_and_password() {
	    // Write code here that turns the phrase above into concrete actions
	  homepage=loginpage.UserLogin(prop.getProperty("Username"), prop.getProperty("Password"));
	}
	*/

	@Then("user lands on the HomePage")
	public void user_lands_on_the_HomePage() {
	    // Write code here that turns the phrase above into concrete actions
	   String title=homepage.validateHomePageTitle();
	   Assert.assertEquals("CRMPRO", title);
	
	}

	@Then("user finds the username displayed on left top section of the page.")
	public void user_finds_the_username_displayed_on_left_top_section_of_the_page() {
	    // Write code here that turns the phrase above into concrete actions
		boolean flag=homepage.verifyUserLogin();
		Assert.assertTrue("User has not been able to login in", flag);
	    
	}



}
