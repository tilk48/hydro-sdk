import {Type} from "../../dart/core/type";
import {List} from "../../dart/collection/list";
import {Widget} from "../widget";
import {RuntimeBaseClass} from "../../runtimeBaseClass";

import {Key} from "./../foundation/key";
import {Axis} from "./../painting/axis";
import {DragStartBehavior} from "./../gestures/dragStartBehavior";
import {StatelessWidget} from "./statelessWidget";
import {ScrollPhysics} from "./scrollPhysics";

interface CustomScrollViewProps {
    key?: Key | undefined;
    scrollDirection?: Axis | undefined;
    reverse?: boolean | undefined;
    //controller
    physics?: ScrollPhysics|undefined;
    shrinkWrap?: boolean | undefined;
    center?: Key | undefined;
    anchor?: number | undefined;
    cacheExtent?: number | undefined;
    slivers?: List<Widget> | undefined;
    semanticChildCount?: number | undefined;
    dragStartBehavior?: DragStartBehavior | undefined;
}

declare const flutter: {
    widgets: {
        customScrollView: (this: void, props: CustomScrollViewProps) => CustomScrollView;
    };
};

export class CustomScrollView extends StatelessWidget implements RuntimeBaseClass 
{
    public readonly internalRuntimeType = new Type(CustomScrollView);
    public props: CustomScrollViewProps;
    public constructor(props: CustomScrollViewProps) 
    {
        super();
        this.props = props;

        if (this.props.scrollDirection === undefined) 
        {
            this.props.scrollDirection = Axis.vertical;
        }

        if (this.props.reverse === undefined) 
        {
            this.props.reverse = false;
        }

        if (this.props.shrinkWrap === undefined) 
        {
            this.props.shrinkWrap = false;
        }

        if (this.props.anchor === undefined) 
        {
            this.props.anchor = 0.0;
        }

        if (this.props.slivers === undefined) 
        {
            this.props.slivers = List.fromArray([]);
        }

        if (this.props.dragStartBehavior === undefined) 
        {
            this.props.dragStartBehavior = DragStartBehavior.start;
        }
    }

    public build() 
    {
        return flutter.widgets.customScrollView(this.props);
    }
}