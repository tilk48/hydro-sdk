import {Widget} from "../widget";

import {AppBar} from "./appBar";
import {StatelessWidget} from "./../widgets/statelessWidget";

interface ScaffoldProps {
    appBar: AppBar;
    body?: Widget | undefined;
    floatingActionButton?: Widget | undefined;
}

declare const flutter: {
    material: {
        scaffold: (this: void, props: ScaffoldProps) => { tag: string };
    }
};

export class Scaffold extends StatelessWidget 
{
    public props: ScaffoldProps;
    public constructor(props: ScaffoldProps) 
    {
        super();
        this.props = props;
    }

    public build(): Widget 
    {
        return flutter.material.scaffold(this.props);
    }
}