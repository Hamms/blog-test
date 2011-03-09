Title: Messing With Scope
Author: Elijah Hamovitz
Date: Mon Feb 28 12:57:56 PST 2011
Node: v0.4.0

One of Javascript's greatest weaknesses is the frighteningly flexible
way it approaches scope, and one of the easiest ways this weakness can
be exploited is when attempting to create inheritable objects in
Javascript.

## Object Factories

In [Learning Javascript with Object Graphs (Part
II)](http://howtonode.org/object-graphs-2), Tim Caswell outlines a fairly
robust method of creating ``Object Factories'' which is fairly similar to the
functional inheritance scheme described in Javascript - The Good Parts.

<messing-with-scope/factory.js#definition*>

This is a pretty cool pattern; anything outside the return block is only
visible by the methods you return so you can carefully control access
rights; new methods defined on the object or even redefined old methods
can't touch your instantiation variables.

Something like:

<messing-with-scope/factory.js#redefinition*>

Will not expose your secrets.

