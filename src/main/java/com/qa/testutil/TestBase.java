package com.qa.testutil;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	
	 public static WebDriver driver;
	 public	static Properties prop;

	 	public TestBase() {
	 		prop = new Properties();
	 		FileInputStream fis;
	 		try {
	 			fis = new FileInputStream(
	 					"C:\\Users\\sajit\\workspce new\\CucumberPOM\\src\\main\\java\\com\\qa\\config\\config.properties");
	 			prop.load(fis);
	 		} catch (FileNotFoundException e) {
	 			// TODO Auto-generated catch block
	 			e.printStackTrace();
	 		} catch (IOException e) {
	 			// TODO Auto-generated catch block
	 			e.printStackTrace();
	 		}

	 	}
	 	
	 	public static void initialization() {
			String browserName = prop.getProperty("browser");

			if (browserName.equals("chrome")) {

				System.setProperty("webdriver.chrome.driver",
						"C:\\Users\\sajit\\Work\\chromedriver_win32\\chromedriver.exe");

				driver = new ChromeDriver();

			} else if (browserName.equals("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						"C:\\Users\\sajit\\Work\\geckodriver-v0.26.0-win64\\geckodriver.exe");

				driver = new FirefoxDriver();

			}
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
			driver.get(prop.getProperty("URL"));

		}


}
