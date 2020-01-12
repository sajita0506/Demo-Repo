package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.testutil.TestBase;

public class HomePage  extends TestBase{
	
	@FindBy(xpath="//td[contains(text(),'User: Sajita Renoy')]")
	WebElement Usernamelabel;
	
	
	public HomePage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public String validateHomePageTitle()
	{
		return driver.getTitle();
	}
	
	public boolean verifyUserLogin()
	{
		driver.switchTo().frame("leftpanel");
		
		if(Usernamelabel.isDisplayed())
			return true;
		else
			return false;
		
	}
	
	

}
