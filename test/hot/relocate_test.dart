import 'package:flua/luastate.dart';
import 'package:flua/reassembler/reassemble.dart';
import 'package:flua/vm/context.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('', () async {
    var state1 = LuaState();

    List<String> outLines = [];

    state1.context.env["print"] = (List<dynamic> args) {
      outLines
          .add(args.map((a) => Context.luaToString(a).toString()).join("\t"));
    };

    var state2 = LuaState();

    state2.context.env["print"] = (List<dynamic> args) {
      outLines
          .add(args.map((a) => Context.luaToString(a).toString()).join("\t"));
    };

    var state3 = LuaState();

    state3.context.env["print"] = (List<dynamic> args) {
      outLines
          .add(args.map((a) => Context.luaToString(a).toString()).join("\t"));
    };

    LuaFunctionImpl res1 = await state1.loadFile("test/hot/simple1.lc");

    LuaFunctionImpl res2 = await state2.loadFile("test/hot/simple2.lc");

    LuaFunctionImpl res3 = await state2.loadFile("test/hot/simple3.lc");

    var res = reassemble(destination: res1.closure, source: res2.closure);
    expect(res.relocatedProtos, 0);

    res = reassemble(destination: res1.closure, source: res3.closure);
    expect(res.relocatedProtos, 2);

    res = reassemble(destination: res2.closure, source: res3.closure);
    expect(res.relocatedProtos, 0);
  });
}