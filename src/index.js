import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import React from "react";
import _ from "lodash";

const Header = new Heading();
Header.render(_.upperFirst("home"));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const helloWorldButton2 = new HelloWorldButton();
helloWorldButton2.render();
