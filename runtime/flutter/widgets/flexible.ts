import {Widget} from "../widget";
import {RuntimeBaseClass} from "../../runtimeBaseClass";
import {Type} from "../../dart/core/type";

import {FlexFit} from "./../rendering/flexFit";
import {StatelessWidget} from "./statelessWidget";
import {Key} from "./../foundation/key";

interface FlexibleProps {
    key?: Key | undefined;
    flex?: number | undefined;
    fit?: FlexFit | undefined;
    child: Widget;
}

declare const flutter: {
    widgets: {
        flexible: (this: void, props: FlexibleProps) => Flexible;
    };
};

export class Flexible extends StatelessWidget implements RuntimeBaseClass 
{
    public readonly internalRuntimeType = new Type(Flexible);
    public props: FlexibleProps;
    public constructor(props: FlexibleProps) 
    {
        super();
        this.props = props;

        if (this.props.flex === undefined) 
        {
            this.props.flex = 1;
        }

        if (this.props.fit === undefined) 
        {
            this.props.fit = FlexFit.loose;
        }
    }

    public build(): Widget 
    {
        return flutter.widgets.flexible(this.props);
    }
}