import { Sprite } from "pixi.js";
import Scene from "./Scene";
import gsap from "gsap";
import Footer from "../components/Footer";
import Fish from "../components/Fish";

export default class Play extends Scene {
  async onCreated() {

    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    const fish = new Fish();
    this.addChild(fish);
  }

  /**
@@ -19,7 +22,7 @@ export default class Play extends Scene {
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */

  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}