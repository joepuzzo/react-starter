# Intro

React is a great JavaScript library for building out web applications. React gives
you the ability to design and build simple to complex views that will update
and render efficiently when the state of your application changes. While it's
probably the most powerful web framework today, it does still require
developers to design and layout their projects to meet the needs of that
project.

The purpose of this project is to create a starter template for creating a
react application. In addition to providing an example layout, it also includes
examples of how you may utilize react, and some additional libraries, to
build out some complex functionality you may encounter in the real world.

# Scenario

Suppose we need to build a site with the following criteria:

1. Public and private routes and layouts ( when you're logged in and logged out )
2. Multiple roles. ( Access restrictions and different views based on role )
3. Application state. ( App state that lives for the duration of the session )
4. Route context. ( /customers/:customerId/employees/:employeeId )

These are only a few criteria but can pack a pretty big punch and require some
time to layout and implement. In addition because react is a library and not a
framework, these criteria can be met in many ways.

In this starter template, we have mocked out one possible implementation.

# Installation

Run the following command to install dependencies

```
npm install
```

# Staring the app

In order to start the Webpack dev server run the following command.

```
npm start
```

This should open the app in your main browser.

# Exploring the app

Go to `localhost:4000` to load the app in your browser. You will see a screen
with two public routes, "Login" and "About", as well as two login buttons.

The first login button will log you in as a user with role1 while the second
login will log you in as a user with role2 ( pretty self explanatory ). Go
ahead and click on "Login as role 1".

You will now be routed to the home page for users with role1. You will notice
that the nav has changed with some new links. `Foo`, `Bar`, and
`Choose Customer` are routes that are only accessible to users with role1.
`Example` is an example of a route that is accessible to both users with role1
and role2. And finally both users will see a `Home` and `Logout` link. Next go
ahead and click on `Choose Customer`.

You will notice that the url has chaned to `/customers` and you now have the
option to choose a customer. We are now about to see an example of route
context. Go ahead and click on `Customer1`.

Note how the url changed to `/customers/customer1`. You are now within the
context of customer1. A few things happened when you clicked that link.

1. A route change was triggered by a react router `<Link/>` tag to
`/customers/customer1`
2. The route `/customers/:customerId` determined that the user has the role
role1 and is therefore allowed to access any customer ( think of role 1 as
admin ).
3. Because the route matched `/customers/:customerId` and the user had the
correct role to access that customer, a high level `Customer` component was
rendered.
4. Finally a a redux action `fetchCustomer` was triggered by the `Customer`
component and the customer was fetched from an api ( mocked ).

Now that you are within the context of that customer, you can poke around the
two routes specific to that customer.

Next click `Logout`, and login as role2 by clicking `Login as role2`.

Notice how oyu still have `Home`, `Example`, and `Logout` links but now you
also have role2 specific routes, `Baz` and `Customer`.

Go ahead and click on `Customer` link. A few things happened when you clicked
on this link.

1. A route change was triggered by a react router `<Link/>` tag to
`/customers/customer1`
2. The route `/customers/:customerId` determined that the user has the role
role2 and is therefore allowed to access only his own customer.
3. Because the route matched `/customers/:customerId` and the user had the
correct role to access that customer, a high level `Customer` component was
rendered.
4. Finally a a redux action `fetchCustomer` was triggered by the `Customer`
component and the customer was fetched from an api ( mocked ).

This walkthrough shows off the power of this app. Now go dig through the source
code and see how simple the code is!!!
