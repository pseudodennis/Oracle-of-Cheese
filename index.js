/* eslint-disable  func-names */
/* eslint-disable  no-console */

/*
 * Highly-credible fact sources, edited for spelling and articulability:
 * https://www.buzzfeed.com/erinlarosa/facts-about-cheese-that-will-make-you-want-to-eat-it-even?utm_term=.hmKDvlQyo#.utMmAbreB
 * http://mentalfloss.com/article/54578/11-things-you-might-not-know-about-cheese
 * https://www.thefactsite.com/2012/09/top-twenty-cheese-facts.html
 * https://www.tasteofhome.com/article/10-amazing-facts-about-cheese-you-need-to-know/
 */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Oracle of Cheese';
const GET_FACT_MESSAGE = 'Cheesy fact: ';
const HELP_MESSAGE = 'You can say tell me a cheese fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  "A 2015 study suggested that the holes in Swiss cheese may be caused by flecks of hay dust that fall into milk buckets.",
  "People who love cheese are called turophiles.",
  "June is National Dairy Month.",
  "The largest and heaviest cheese ever produced weighed 57,518 pounds, and was 32 feet long.",
  "There are about 2,000 varieties of cheese.",
  "A 2005 study found that eating cheese 30 minutes before bed helps you sleep better.",
  "A Wisconsin law in 1936 used to require restaurants to serve cheese with every meal.",
  "The most popular cheese recipe in America is Mac and Cheese... . Obviously.",
  "Every pound of cheese requires 10 pounds of milk.",
  "Some scientists believe that regularly eating Roquefort blue cheese helps people live longer.",
  "Cheese existed before written language.",
  "Queen Victoria received the gift of a 1250-pound, 9-foot-diameter cheddar cheese as a wedding present.",
  "Lactococcus lactis, the bacterium used to make Colby, cheddar, and Monterey Jack, is Wisconsin’s official microbe.",
  "The largest macaroni and cheese, according to Guinness World Records, weighed 2469 pounds. The recipe called for 286 pounds of cheese, 575 pounds of cooked macaroni, 56 pounds of butter, 26 pounds of flour, 1100 pounds of milk, and 61 pounds of dry seasoning.",
  "Cheese comes from the Latin word caseus, which means to ferment or to sour.",
  "Cheese is made from the milk of cows, buffalo’s, goats, sheep, horses and camels.",
  "Cheese is boiled at a high temperature before the curds and liquid whey are separated, and rennet -- an enzyme found in the stomach of mammals -- is added.",
  "Some cheeses can be curdled by adding lemon juice or vinegar.",
  "The yellow to red coloring of cheese is done through the addition of annatto; tropical tree seeds.",
  "There are many types of cheese such as hard cheese, soft cheese, cream cheese, and processed cheese, all of which can be used in cooking.",
  "Hard cheeses have a longer shelf live than soft cheeses.",
  "Blue cheese, which has distinctive smells and tastes, have blue veins running through, which is caused by piercing the cheese and its crust with stainless steel needles and copper wires, to allow air into the product.",
  "Cheese production can be dated back to 8000 BCE when sheep were first domesticated.",
  "The Ancient Greeks credit the mythological hero Aristaeus, who discovered feta cheese, which is still widely used in Greek cuisine.",
  "There are many types of cheese; Bel Paese, Bresse Bleu, Brie, Caerphilly, Camembert, Cheddar, Chesire, Cottage Cheese, Cream Cheese, Danish Blue, Demi-Sel, Derby, Dunlop, Double Gloucester, Edam, Emmenthal, Gjestost, Gorgonzola, Gouda, Gruyere, Lancashire, Leicester, Mozzarella, Parmesan, Port Salut, Roquefort, Samsoe, St. Paulin, Stilton, Tome au Raisin, and Wensleydale.",
  "The US produces over 4275 tonnes of cheese a year. Germany produces 1927 tonnes, whereas France produces 1884 tonnes.",
  "Greece consumes over 31.1 kilograms of cheese per capita a year. France consumes 26.1 kilograms, whereas Iceland consumes 25.4 kilograms per capita.",
  "A seller of cheese is known as a cheesemonger.",
  "Those who are lactose intolerant should probably avoid eating cheese.",
  "Vegetarians eat vegetable based cheeses, which are usually almond or soy based.",
  "Some people once believed the proverb that the moon is made of green cheese.",
  "Collecting cheese labels is known as tyrosemiophilia.",
  "The characters Wallace and Gromit are partial to Wensleydale cheese on crackers.",
  "If a cheese is named after a city or country, it’s capitalized.",
  "Different curd sizes yield different types of cheeses.",
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
