package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import com.qa.testutil.TestBase;

public class LoginPage extends TestBase {
	
	
	@FindBy(name="username")
	WebElement username;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(xpath="//img[contains(@src,'https://classic.freecrm.com/img/logo.png')]")
	WebElement CRM_logo;
	
	
	@FindBy(xpath="//input[@value='Login']")
	WebElement LoginBtn;
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
    public String GetLoginPageTitle()
    {
    	return driver.getTitle();
    }
    
    public boolean validateCRMLogoDisplayed()
    {
    	return CRM_logo.isDisplayed();
    }
    
    public HomePage UserLogin(String uname,String pword)
    {
    	username.sendKeys(uname);
    	password.sendKeys(pword);
    	try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	LoginBtn.click();
    	
    	return new HomePage();
    	
    
    }
	
	

}
