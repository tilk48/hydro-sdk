import 'package:flua/vm/context.dart';
import 'package:flua/builtins/flutter/key.dart';
import 'package:flua/builtins/flutter/material/material.dart';
import 'package:flua/builtins/flutter/package/package.dart';
import 'package:flua/builtins/flutter/painting/painting.dart';
import 'package:flua/builtins/flutter/widgets/widgets.dart';
import 'package:flua/vm/table.dart';

loadFlutterLib(Context ctx) {
  var flutter = Table();

  ctx.env["flutter"] = flutter;

  loadKey(flutter);
  loadMaterial(flutter);
  loadPackage(flutter);
  loadWidgets(flutter);
  loadPainting(flutter);
}