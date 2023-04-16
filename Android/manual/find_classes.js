var classes = Java.enumerateLoadedClassesSync();
for (var i = 0; i < classes.length; i++) {
    console.log(classes[i]);
}
