import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills-component";
import "./scripts/reviews";
import "./scripts/parallax";