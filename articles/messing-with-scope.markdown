Title: Messing With Scope
Author: Elijah Hamovitz
Date: Mon Feb 28 12:57:56 PST 2011
Node: v0.4.0

One of Javascript's greatest weaknesses is the frighteningly flexible
way it approaches scope, and one of the easiest ways this weakness can
be exploited is when attempting to create inheritable objects in
Javascript.

## Object Factories

In http://howtonode.org/object-graphs-2, Tim Caswell
outlines a fairly robust method of creating ``Object Factories'' which
is fairly similar to the functional inheritance scheme described in
Javascript - The Good Parts.

<messing-with-scope/factory.js>

Adna dljwal
