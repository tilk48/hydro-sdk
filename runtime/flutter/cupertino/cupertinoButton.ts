import { RuntimeBaseClass } from "../../runtimeBaseClass";
import { Color } from "./../../dart/ui/color";
import { VoidCallback } from "./../../dart/ui/voidCallback";
import { Radius } from "../../dart/ui/radius";
import { Type } from "../../dart/core/type";
import { StatelessWidget } from "../widgets/statelessWidget";
import { Key } from "../foundation/key";
import { EdgeInsets } from "../painting/edgeInsets";
import { BorderRadius } from "../painting/borderRadius";
import { Widget } from "../widget";
import { CupertinoColors } from "./cupertinoColors";
import { kMinInteractiveDimensionCupertino } from "./constants";

interface CupertinoButtonProps {
    key?: Key | undefined;
    child: Widget;
    padding?: EdgeInsets | undefined;
    color?: Color | undefined;
    disabledColor?: Color | undefined;
    minSize?: number | undefined;
    pressedOpacity?: number | undefined;
    borderRadius?: BorderRadius | undefined;
    onPressed: VoidCallback;
}

declare const flutter: {
    cupertino: {
        cupertinoButton: (this: void, props: CupertinoButtonProps) => CupertinoButton;
        cupertinoButtonFilled: (this: void, props: CupertinoButtonProps) => CupertinoButton;
    }
}
export class CupertinoButton extends StatelessWidget implements RuntimeBaseClass {
    public readonly internalRuntimeType = new Type(CupertinoButton);
    private filled = false;
    public props: CupertinoButtonProps;
    public constructor(props: CupertinoButtonProps) {
        super();

        this.props = props;

        if (this.props.disabledColor === undefined) {
            this.props.disabledColor = CupertinoColors.quaternarySystemFill.color;
        }

        if (this.props.minSize === undefined) {
            this.props.minSize = kMinInteractiveDimensionCupertino;
        }

        if (this.props.pressedOpacity === undefined) {
            this.props.pressedOpacity = 0.4;
        }

        if (this.props.borderRadius === undefined) {
            this.props.borderRadius = BorderRadius.all(Radius.circular(8.0));
        }
    }

    public static filled(props: Omit<CupertinoButtonProps, "color">) {
        const res = new CupertinoButton(props);
        res.filled = true;
        return res;
    }

    public build() {
        if (this.filled) {
            return flutter.cupertino.cupertinoButtonFilled(this.props);
        }

        return flutter.cupertino.cupertinoButton(this.props);
    }
}