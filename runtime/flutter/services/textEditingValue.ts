import {Type} from "../../dart/core/type";
import {RuntimeBaseClass} from "../../runtimeBaseClass";
import {JITAllocatingRTManagedBox} from "../../syntheticBox";
import {TextRange} from "../../dart/ui/textRange";

import {TextSelection} from "./textSelection";

interface TextEditingValueProps {
    text?: string | undefined;
    selection?: TextSelection | undefined;
    composing?: TextRange | undefined;
}

declare const flutter: {
    services: {
        textEditingValue: (this: void, inst: TextEditingValue, props: TextEditingValueProps) => TextEditingValue;
    };
};

export class TextEditingValue 
{
    public props: TextEditingValueProps;

    public constructor(props: TextEditingValueProps) 
    {
        this.props = props;

        if (this.props.text === undefined) 
        {
            this.props.text = "";
        }

        if (this.props.selection === undefined) 
        {
            this.props.selection = TextSelection.collapsed({offset: -1});
        }

        if (this.props.composing === undefined) 
        {
            this.props.composing = TextRange.empty;
        }

        flutter.services.textEditingValue(this, this.props);
    }

    public copyWith: (props: TextEditingValueProps) => TextEditingValue = undefined as any;
}