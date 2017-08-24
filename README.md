# NgRx - a few ideas for boilerplate reduction / refactoring

This application illustrates how one may attempt to reduce boilerplate inherent in NgRx apps.

It is a companion repository to this article on Medium:
https://medium.com/@slawojstanislawski/ngrx-app-refactoring-some-boilerplate-reduction-ideas-with-examples-22d53d4863f0

* The first commit is the inital commit of Angular CLI
* The second commit is the initial application from which the refactoring starts
* The third commit introduces the dashboard and illustrates the problem of shared error and loading state between components
* The fourth commit tries to alleviate the problem, but creates more boilerplate in the long run
* The fifth commit moves loading state properties into ngrx effects class
* The sixth commit illustrates refactoring related to actions file
* The seventh commit illustrates representing each state property wrapped with StateItem object

## Try It!

* Clone the repository
* Run `npm install`
* Git-checkout the revision (the commit) you want to investigate
* Run `npm start`
