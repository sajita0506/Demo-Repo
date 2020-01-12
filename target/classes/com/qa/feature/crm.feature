#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Free CRM test functionality
  I want to use this template for my feature file


Scenario Outline: Verify User Login
Given  user launches the browser
And  user lands on the Login Page and finds the CRM LOGO
And  user clicks on Login button after entering the "<Username>" and "<Password>"
Then  user lands on the HomePage
And  user finds the username displayed on left top section of the page.

Examples:
|Username|Password|
|sajita0506|Ransom4522|
