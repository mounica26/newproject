Feature: Login to Facebook

Scenario: User should be able to login with valid credentials
    Given User is on Facebook login page
    When User enters valid username and password
    Then User should be redirected to the homepage