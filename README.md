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
