$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Pets/PS002CreatePet.feature");
formatter.feature({
  "line": 2,
  "name": "This is create feature",
  "description": "",
  "id": "this-is-create-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 327503900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Creating a pet",
  "description": "",
  "id": "this-is-create-feature;creating-a-pet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@kumal"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have access to pet service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I create a pet",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the following result is available",
  "keyword": "Then "
});
formatter.match({
  "location": "FindPetSteps.iHaveAccessToPetService()"
});
formatter.result({
  "duration": 403826200,
  "status": "passed"
});
formatter.match({
  "location": "CreateSteps.iCreateAPet()"
});
formatter.result({
  "duration": 1465001100,
  "status": "passed"
});
formatter.match({
  "location": "CreateSteps.theFollowingResultIsAvailable()"
});
formatter.result({
  "duration": 71142400,
  "status": "passed"
});
});