import { Cube } from "./class/Cube.js";
import { cubes } from "./data/cubes.js";

cubes.forEach(cubedata => {
    const cube = new Cube(cubedata.height,cubedata.width,cubedata.depth);
    if(cube.isCube()){
        console.log(`この立方体の体積は${cube.getVolume()}`);
    }
    else{
        console.log(`この直方体の体積は${cube.getVolume()}`);
    }
});