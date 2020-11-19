# Asellion tech test

Hello guys, here's the finished tech test. It was actually quite a lot of fun diving back into Angular and figuring it out especially using NGRX which I've not checked out before. The occasional head-bang on the desk trying to figure out implementing side effects and mocking tests, but otherwise reasonably straight froward picking it back up again. I haven't spent all week on this as I've still been picking up bits from ThinkSprint, otherwise I would've submitted it yesterday.

### Commands

To run the project, usual start command
`npm start`

And tests is ususal command
`npm test`

### Thoughts

-   I added place holder images to the items which are just fetched by the item ID and are essentially auto-generated. I also added extra fields to the data model which are obviously outside the spec.
-   The store in a separate feature folder and module. I saw examples of store logic being used within the same folder as a component feature, but I don't know how I feel about doing that as the domains don't necessarilly always logically map to the UI displaying that data, so my preference is to separate them. Not sure what the best practice is in Angular but encapsulating these services into there own module made sense to me
-   I was going to build components with StoryBook but figured that it would be a little overkill given that there was only a couple of components with hardly any states
-   If i was to spend longer on the test I'd improve the tests! They all should be in the green, but are only really testing whether the component loads and not really functional. I would also cover the store with tests generally as these are quite cheap tests to write.
-   I would also improve the UX a little, particularly the 'remove product' button I would always have this behaviour behind a 'confirm' dialog.
-   Didn't go big on the CSS, it's all very simple layout tweaking
-   Was even thinking about going the extra mile and writing a NestJS simple back-end service but i thought better of it
-   Would probably have formatted the HTML a bit better, making the line lengths shoter and formatting attributes veritcally for better readability

# Asellion Front-end assignment (Senior-Level)

## Introduction

Your challenge will be to create a simple Angular application (min 10.x) with two main user stories. Please make sure that your application compiles and will work in the best possible way.

## Story 1: As a visitor, I want to see the list of products.

As a visitor, upon opening the application, I want to be presented with a list of all products.

## Acceptance Criteria

For this story, we would like to see the list of products. The number of products should be at least three. Each product should contain these fields:

-   id (pick something suitable)
-   name (string)
-   currentPrice (number)
-   lastUpdate (Date)

## Story 2: As a visitor, I want to update product's data.

By clicking on a product, the visitor can see the product details, and this sub-page is where the visitor can find product specific information.

## Acceptance Criteria

Product details are displayed in a form; here, the visitor can update or delete products.

On the main page, the visitor can click on a button to add a product, where the product form is displayed for the user to enter the product data.

## Non functional requirements

-   You should use Angular
-   You should use Ngrx to represent the app state
-   You should create your own `object` provided by a "fake backend" where the needed data can be requested.

## Evaluation criteria sorted by importance

(Inspired by this article: https://blog.indorse.io/heres-what-we-learned-from-4500-code-reviews-6c9ea3069d0e)

-   Code quality
-   Readability
-   Extensibility
-   Knowledge of Design Patterns and best practices
-   Test coverage

Please submit your finished assignment to dev@asellion.com (including the source files) or if you prefer Gitlab invite dev@asellion.com to your Gitlab repo. For any questions email dev@asellion.com
Good luck!
