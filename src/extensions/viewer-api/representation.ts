export class Representation {
    selection: string; // Replace with the correct type of mol* atom selection
    type: string;

    constructor(selection: string, type: string, options: any) {
        this.selection = selection;
        this.type = type;
    }

    modifyProperty(prop: string, value: any) {
        // Change color for example
        // Or change isovalue if we are showing a surface
        // Or change current frame in a trajectory for that representation only
    }
}