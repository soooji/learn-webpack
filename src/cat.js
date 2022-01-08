import Heading from "./components/heading/heading";
import CatImage from "./components/cat-cmp/cat";
import React from "react";
import _ from "lodash";

const Header = new Heading();
Header.render(_.upperFirst("cat"));

const catImg = new CatImage();
catImg.render();
