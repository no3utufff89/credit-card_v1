import {createApp} from "./modules/createApp.js";
import {mount} from "redom";
import {listeners} from "./modules/listeners.js";
import validate from "./modules/validate";

mount(document.body, createApp());
listeners()
validate()