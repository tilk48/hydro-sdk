import 'package:flua/vm/context.dart';
import 'package:flua/vm/table.dart' as l;

loadPrint(l.Table table) {
  table["print"] = makeLuaDartFunc(func: (List<dynamic> args) {
    print(args[0]);
    return [];
  });
}