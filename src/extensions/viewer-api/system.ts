import { Representation } from './representation';


export class System {
    representations: Representation[];

    constructor(moldata: any) {
        // Allow loading multiple files in a single Molecule. i.e. prmtop+xtc
        this.loadFile(moldata);
    }

    loadFile(moldata: any) {
        // If there is nothing in Molecule just load the file
        // if there is already a topology loaded, check if new file matches the topology
        // if yes, overwrite the existing coordinates if overwriteCoords else append them
    }

    getRepresentations() {
        return this.representations;
    }

    addRepresentation(selection: string, type: string, options: any) {
        const rep = new Representation(selection, type, options);
        this.representations.push(rep);
        return rep;
    }

    removeRepresentation(repr: Representation) {
        // Remove this rep from the Molecule object
    }

    getAtomicProperty(prop: string) {
        // Return stuff like atom names, residue names as arrays etc
    }

    setCurrentFrame(frame: number) {
        // Change which frame of a trajectory, or model is currently visualized
    }
}