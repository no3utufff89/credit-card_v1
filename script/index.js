import {createApp} from "./modules/createApp.js";
import {mount} from "redom";
import {listeners} from "./modules/listeners.js";

mount(document.body, createApp());
listeners()